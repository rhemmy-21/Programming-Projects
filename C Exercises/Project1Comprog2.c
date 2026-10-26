#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define MAX_USERS 100
#define QUESTIONS_PER_ROUND 5
#define POINTS_PER_QUESTION 1

typedef struct {
    char username[50];
    char password[50];
    int score;
} User;

User users[MAX_USERS];
int userCount = 0;

int getValidInt(int min, int max, const char* prompt) {
    int choice;
    while (1) {
        printf("%s", prompt);
        if (scanf("%d", &choice) == 1 && choice >= min && choice <= max) {
            int c;
            while ((c = getchar()) != '\n' && c != EOF);
            return choice;
        }
        printf("Invalid input! Please enter a number between %d-%d.\n", min, max);
        int c;
        while ((c = getchar()) != '\n' && c != EOF);
    }
}

void getValidString(char* str, int maxLen, const char* prompt) {
    printf("%s", prompt);
    scanf("%s", str);
    str[maxLen-1] = '\0';
    int c;
    while ((c = getchar()) != '\n' && c != EOF);
}

void loadUsers() {
    FILE *fp = fopen("users.txt", "r");
    if (fp == NULL) return;

    char line[256];
    while (fgets(line, sizeof(line), fp) && userCount < MAX_USERS) {
        char *username_start = line;
        char *pipe1 = strchr(line, '|');
        if (!pipe1) continue;

        char *password_start = pipe1 + 1;
        char *pipe2 = strchr(password_start, '|');
        if (!pipe2) continue;

        char *score_str = pipe2 + 1;

        int username_len = pipe1 - username_start;
        if (username_len >= 50) username_len = 49;
        strncpy(users[userCount].username, username_start, username_len);
        users[userCount].username[username_len] = '\0';

        int password_len = pipe2 - password_start;
        if (password_len >= 50) password_len = 49;
        strncpy(users[userCount].password, password_start, password_len);
        users[userCount].password[password_len] = '\0';

        users[userCount].score = atoi(score_str);
        userCount++;
    }
    fclose(fp);
}

void saveUsers() {
    FILE *fp = fopen("users.txt", "w");
    if (fp == NULL) return;

    for (int i = 0; i < userCount; i++) {
        fprintf(fp, "%s|%s|%d\n",
                users[i].username,
                users[i].password,
                users[i].score);
    }
    fclose(fp);
}

int findUser(char uname[]) {
    for (int i = 0; i < userCount; i++) {
        if (strcmp(users[i].username, uname) == 0)
            return i;
    }
    return -1;
}

int registerUser() {
    char uname[50], pass[50];

    printf("\n=== REGISTER ===\n");
    getValidString(uname, 50, "Username: ");

    if (findUser(uname) != -1) {
        printf("User already exists!\n");
        return -1;
    }

    getValidString(pass, 50, "Password: ");

    strcpy(users[userCount].username, uname);
    strcpy(users[userCount].password, pass);
    users[userCount].score = 0;

    userCount++;
    saveUsers();
    printf("Registration successful!\n");
    return userCount - 1;
}

int loginUser() {
    char uname[50], pass[50];

    printf("\n=== LOGIN ===\n");
    getValidString(uname, 50, "Username: ");
    getValidString(pass, 50, "Password: ");

    int idx = findUser(uname);
    if (idx == -1) {
        printf("User not found!\n");
        return -1;
    }

    if (strcmp(users[idx].password, pass) != 0) {
        printf("Invalid password!\n");
        return -1;
    }

    printf("Welcome %s! Current score: %d points\n", uname, users[idx].score);
    return idx;
}

void forgotPassword() {
    char uname[50];
    printf("\n=== FORGOT PASSWORD ===\n");
    getValidString(uname, 50, "Username: ");

    int idx = findUser(uname);
    if (idx == -1) {
        printf("User not found!\n");
        return;
    }

    char newPass[50];
    printf("Enter new password: ");
    getValidString(newPass, 50, "");

    strcpy(users[idx].password, newPass);
    saveUsers();
    printf("Password updated successfully!\n");
}

void leaderboard() {
    printf("\n=== LEADERBOARD (TOP 10) ===\n");

    User sortedUsers[MAX_USERS];
    memcpy(sortedUsers, users, sizeof(users));

    for (int i = 0; i < userCount - 1; i++) {
        for (int j = 0; j < userCount - i - 1; j++) {
            if (sortedUsers[j].score < sortedUsers[j+1].score) {
                User temp = sortedUsers[j];
                sortedUsers[j] = sortedUsers[j+1];
                sortedUsers[j+1] = temp;
            }
        }
    }

    int limit = userCount < 10 ? userCount : 10;
    for (int i = 0; i < limit; i++) {
        printf("%d. %s - %d points\n", i+1, sortedUsers[i].username, sortedUsers[i].score);
    }

    if (userCount == 0) {
        printf("No players yet!\n");
    }
}

void playRound(int userIndex, int operation) {
    const char* ops[] = {"", "Addition", "Subtraction", "Multiplication", "Division"};
    int roundScore = 0;
    int num1, num2, answer, correctAnswer;

    printf("\n=== %s ROUND (5 Questions) ===\n", ops[operation]);
    printf("Each correct answer = %d point | Total possible: %d points\n\n",
           POINTS_PER_QUESTION, QUESTIONS_PER_ROUND * POINTS_PER_QUESTION);

    srand(time(NULL) + operation);

    for (int q = 1; q <= QUESTIONS_PER_ROUND; q++) {
        num1 = rand() % 100 + 1;
        num2 = rand() % 100 + 1;

        switch (operation) {
        case 1:
            printf("Q%d: %d + %d = ", q, num1, num2);
            scanf("%d", &answer);
            correctAnswer = num1 + num2;
            break;
        case 2:
            if (num1 < num2) {
                int temp = num1;
                num1 = num2;
                num2 = temp;
            }
            printf("Q%d: %d - %d = ", q, num1, num2);
            scanf("%d", &answer);
            correctAnswer = num1 - num2;
            break;
        case 3:
            printf("Q%d: %d x %d = ", q, num1, num2);
            scanf("%d", &answer);
            correctAnswer = num1 * num2;
            break;
        case 4:
            num1 = num1 * num2;
            printf("Q%d: %d / %d = ", q, num1, num2);
            scanf("%d", &answer);
            correctAnswer = num1 / num2;
            break;
        }

        int c;
        while ((c = getchar()) != '\n' && c != EOF);

        printf("   Your answer: %d | Correct: %d\n", answer, correctAnswer);

        if (answer == correctAnswer) {
            roundScore += POINTS_PER_QUESTION;
            printf("   CORRECT! +%d point\n", POINTS_PER_QUESTION);
        } else {
            printf("   WRONG!\n");
        }
    }

    users[userIndex].score += roundScore;
    printf("\n=== ROUND RESULTS ===\n");
    printf("Round Score: %d/%d points\n", roundScore, QUESTIONS_PER_ROUND * POINTS_PER_QUESTION);
    printf("Total Score: %d points\n", users[userIndex].score);
}

void playGame(int userIndex) {
    int choice;

    do {
        printf("\n=== ARITHMETIC GAME ===\n");
        printf("1. Addition Round\n");
        printf("2. Subtraction Round\n");
        printf("3. Multiplication Round\n");
        printf("4. Division Round\n");
        printf("5. Leaderboard\n");
        printf("6. Exit Game\n");
        printf("Your current score: %d points\n", users[userIndex].score);

        choice = getValidInt(1, 6, "Choice: ");

        switch (choice) {
        case 1: case 2: case 3: case 4:
            playRound(userIndex, choice);
            break;
        case 5:
            leaderboard();
            break;
        case 6:
            printf("Thanks for playing!\n");
            break;
        }
    } while (choice != 6);

    saveUsers();
    leaderboard();
}

int main() {
    int choice, userIndex = -1;

    loadUsers();
    printf("Welcome to Arithmetic Game!\n");

    do {
        printf("\n=== MAIN MENU ===\n");
        printf("1. Register\n");
        printf("2. Login\n");
        printf("3. Forgot Password\n");
        printf("4. Leaderboard\n");
        printf("5. Exit\n");

        choice = getValidInt(1, 5, "Choice: ");

        switch (choice) {
        case 1:
            registerUser();
            break;
        case 2:
            userIndex = loginUser();
            if (userIndex != -1) {
                playGame(userIndex);
            }
            break;
        case 3:
            forgotPassword();
            break;
        case 4:
            leaderboard();
            break;
        case 5:
            printf("Goodbye!\n");
            saveUsers();
            exit(0);
        }
    } while (1);

    return 0;
}
