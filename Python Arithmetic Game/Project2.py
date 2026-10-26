import os
import random
import json
from pathlib import Path


# ─────────────────────────────────────────────
#  Data Model
# ─────────────────────────────────────────────

class User:
    def __init__(self, username: str, password: str, score: int = 0):
        self.username = username
        self.password = password
        self.score = score

    def to_dict(self) -> dict:
        return {
            "username": self.username,
            "password": self.password,
            "score": self.score,
        }

    @classmethod
    def from_dict(cls, data: dict) -> "User":
        return cls(data["username"], data["password"], data.get("score", 0))

    def __repr__(self) -> str:
        return f"User(username={self.username!r}, score={self.score})"


# ─────────────────────────────────────────────
#  Persistence
# ─────────────────────────────────────────────

class UserRepository:
    """Handles loading and saving users to a JSON file."""

    def __init__(self, filepath: str = "users.json"):
        self.filepath = Path(filepath)
        self._users: dict[str, User] = {}
        self.load()

    # ── I/O ──────────────────────────────────

    def load(self) -> None:
        if not self.filepath.exists():
            return
        try:
            with self.filepath.open("r") as f:
                raw = json.load(f)
            self._users = {entry["username"]: User.from_dict(entry) for entry in raw}
        except (json.JSONDecodeError, KeyError):
            print("Warning: could not parse users file; starting fresh.")

    def save(self) -> None:
        with self.filepath.open("w") as f:
            json.dump([u.to_dict() for u in self._users.values()], f, indent=2)

    # ── CRUD ─────────────────────────────────

    def find(self, username: str) -> User | None:
        return self._users.get(username)

    def exists(self, username: str) -> bool:
        return username in self._users

    def add(self, user: User) -> None:
        self._users[user.username] = user
        self.save()

    def update(self, user: User) -> None:
        self._users[user.username] = user
        self.save()

    def all_sorted_by_score(self) -> list[User]:
        return sorted(self._users.values(), key=lambda u: u.score, reverse=True)


# ─────────────────────────────────────────────
#  Auth Service
# ─────────────────────────────────────────────

class AuthService:
    def __init__(self, repo: UserRepository):
        self.repo = repo

    def register(self) -> User | None:
        print("\n=== REGISTER ===")
        username = self._prompt_string("Username: ")
        if self.repo.exists(username):
            print("Username already taken!")
            return None
        password = self._prompt_string("Password: ")
        user = User(username, password)
        self.repo.add(user)
        print("Registration successful!")
        return user

    def login(self) -> User | None:
        print("\n=== LOGIN ===")
        username = self._prompt_string("Username: ")
        password = self._prompt_string("Password: ")
        user = self.repo.find(username)
        if user is None:
            print("User not found!")
            return None
        if user.password != password:
            print("Invalid password!")
            return None
        print(f"Welcome, {username}!")
        return user

    def forgot_password(self) -> None:
        print("\n=== FORGOT PASSWORD ===")
        username = self._prompt_string("Username: ")
        user = self.repo.find(username)
        if user is None:
            print("User not found!")
            return
        new_password = self._prompt_string("New password: ")
        user.password = new_password
        self.repo.update(user)
        print("Password updated successfully!")

    @staticmethod
    def _prompt_string(prompt: str) -> str:
        while True:
            value = input(prompt).strip()
            if value:
                return value
            print("Input cannot be empty.")


# ─────────────────────────────────────────────
#  Question Generator
# ─────────────────────────────────────────────

class Question:
    def __init__(self, text: str, answer: int):
        self.text = text
        self.answer = answer

    def ask(self) -> int:
        """Prompt the user and return their integer answer."""
        while True:
            raw = input(f"{self.text} = ").strip()
            try:
                return int(raw)
            except ValueError:
                print("Please enter a whole number.")


class QuestionFactory:
    OPERATIONS = {
        1: "Addition",
        2: "Subtraction",
        3: "Multiplication",
        4: "Division",
    }

    @staticmethod
    def create(operation: int) -> Question:
        a = random.randint(1, 100)
        b = random.randint(1, 100)

        if operation == 1:
            return Question(f"{a} + {b}", a + b)

        if operation == 2:
            if a < b:
                a, b = b, a          # keep result non-negative
            return Question(f"{a} - {b}", a - b)

        if operation == 3:
            return Question(f"{a} × {b}", a * b)

        if operation == 4:
            dividend = a * b         # guarantees integer result
            return Question(f"{dividend} ÷ {b}", a)

        raise ValueError(f"Unknown operation: {operation}")


# ─────────────────────────────────────────────
#  Game Session
# ─────────────────────────────────────────────

class GameSession:
    def __init__(self, user: User, repo: UserRepository):
        self.user = user
        self.repo = repo

    def run(self) -> None:
        print(f"\n=== Arithmetic Game — playing as {self.user.username} ===")
        while True:
            self._print_game_menu()
            choice = self._get_valid_int(1, 5, "Choice: ")
            if choice == 5:
                print("Thanks for playing!")
                break
            question = QuestionFactory.create(choice)
            player_answer = question.ask()
            self._evaluate(player_answer, question.answer)

        self.repo.update(self.user)

    def _evaluate(self, player_answer: int, correct_answer: int) -> None:
        print(f"Your answer: {player_answer} | Correct: {correct_answer}")
        if player_answer == correct_answer:
            print("Correct! +1 point")
            self.user.score += 1
        else:
            print("Wrong!")
        print(f"Current score: {self.user.score}")

    @staticmethod
    def _print_game_menu() -> None:
        print("\n--- Choose an operation ---")
        for key, name in QuestionFactory.OPERATIONS.items():
            print(f"  {key}. {name}")
        print("  5. Exit game")

    @staticmethod
    def _get_valid_int(min_val: int, max_val: int, prompt: str) -> int:
        while True:
            raw = input(prompt).strip()
            try:
                value = int(raw)
                if min_val <= value <= max_val:
                    return value
            except ValueError:
                pass
            print(f"Please enter a number between {min_val} and {max_val}.")


# ─────────────────────────────────────────────
#  Leaderboard
# ─────────────────────────────────────────────

class Leaderboard:
    TOP_N = 10

    def __init__(self, repo: UserRepository):
        self.repo = repo

    def display(self) -> None:
        print(f"\n=== LEADERBOARD (TOP {self.TOP_N}) ===")
        top = self.repo.all_sorted_by_score()[: self.TOP_N]
        if not top:
            print("No players yet!")
            return
        for rank, user in enumerate(top, start=1):
            print(f"  {rank:>2}. {user.username:<20} {user.score} pts")


# ─────────────────────────────────────────────
#  Application (Main Menu)
# ─────────────────────────────────────────────

class ArithmeticGameApp:
    def __init__(self):
        self.repo = UserRepository()
        self.auth = AuthService(self.repo)
        self.leaderboard = Leaderboard(self.repo)

    def run(self) -> None:
        print("Welcome to Arithmetic Game!")
        while True:
            self._print_main_menu()
            choice = self._get_valid_int(1, 5, "Choice: ")

            if choice == 1:
                self.auth.register()

            elif choice == 2:
                user = self.auth.login()
                if user:
                    GameSession(user, self.repo).run()
                    self.leaderboard.display()

            elif choice == 3:
                self.auth.forgot_password()

            elif choice == 4:
                self.leaderboard.display()

            elif choice == 5:
                print("Goodbye!")
                self.repo.save()
                break

    @staticmethod
    def _print_main_menu() -> None:
        print("\n=== MAIN MENU ===")
        print("  1. Register")
        print("  2. Login")
        print("  3. Forgot Password")
        print("  4. Leaderboard")
        print("  5. Exit")

    @staticmethod
    def _get_valid_int(min_val: int, max_val: int, prompt: str) -> int:
        while True:
            raw = input(prompt).strip()
            try:
                value = int(raw)
                if min_val <= value <= max_val:
                    return value
            except ValueError:
                pass
            print(f"Please enter a number between {min_val} and {max_val}.")


# ─────────────────────────────────────────────
#  Entry Point
# ─────────────────────────────────────────────

if __name__ == "__main__":
    ArithmeticGameApp().run()