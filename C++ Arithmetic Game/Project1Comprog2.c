#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <ctype.h>

#define MAX_USERS 100

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
            while ((c = getchar()) != '\n' && c != EOF); // Clear input buffer
            return choice;
        }
        printf("Invalid input! Please enter a number between %d-%d.\n", min, max);
        int c;
        while ((c = getchar()) != '\n' && c != EOF); // Clear input buffer
    }
}

void getValidString(char* str, int maxLen, const char* prompt) {
    printf("%s", prompt);
    scanf("%s", str);
    str[maxLen-1] = '\0'; // Ensure null termination
    int c;
    while ((c = getchar()) != '\n' && c != EOF); // Clear input buffer
}

// ================= FILE HANDLING =================
void loadUsers() {
    FILE *fp = fopen("users.txt", "r");
    if (fp == NULL) return;

    while (fscanf(fp, "%s %s %d", users[userCount].username,
                  users[userCount].password,
                  &users[userCount].score) == 3 && userCount < MAX_USERS) {
        userCount++;
    }
    fclose(fp);
}

void saveUsers() {
    FILE *fp = fopen("users.txt", "w");
    if (fp == NULL) return;

    for (int i = 0; i < userCount; i++) {
        fprintf(fp, "%s %s %d\n",
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

    printf("Welcome %s!\n", uname);
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
        printf("%d. %s - %d pts\n", i+1, sortedUsers[i].username, sortedUsers[i].score);
    }

    if (userCount == 0) {
        printf("No players yet!\n");
    }
}


void playGame(int userIndex) {
    int choice;
    int num1, num2;
    int answer, correctAnswer;

    srand(time(NULL));

    do {
        printf("\n=== Arithmetic Game ===\n");
        printf("1. Addition\n");
        printf("2. Subtraction\n");
        printf("3. Multiplication\n");
        printf("4. Division\n");
        printf("5. Exit\n");

        choice = getValidInt(1, 5, "Choice: ");

        if (choice == 5) {
            printf("Thanks for playing!\n");
            break;
        }

        num1 = rand() % 100 + 1;
        num2 = rand() % 100 + 1;

        switch (choice) {
        case 1: // Addition
            printf("\n%d + %d = ", num1, num2);
            scanf("%d", &answer);
            correctAnswer = num1 + num2;
            printf("Your answer: %d | Correct: %d\n", answer, correctAnswer);
            break;

        case 2: // Subtraction
            if (num1 < num2) {
                int temp = num1;
                num1 = num2;
                num2 = temp;
            }
            printf("\n%d - %d = ", num1, num2);
            scanf("%d", &answer);
            correctAnswer = num1 - num2;
            printf("Your answer: %d | Correct: %d\n", answer, correctAnswer);
            break;

        case 3: // Multiplication
            printf("\n%d × %d = ", num1, num2);
            scanf("%d", &answer);
            correctAnswer = num1 * num2;
            printf("Your answer: %d | Correct: %d\n", answer, correctAnswer);
            break;

        case 4: // Division
            num1 = num1 * num2;
            printf("\n%d ÷ %d = ", num1, num2);
            scanf("%d", &answer);
            correctAnswer = num1 / num2;
            printf("Your answer: %d | Correct: %d\n", answer, correctAnswer);
            break;
        }

        int c;
        while ((c = getchar()) != '\n' && c != EOF);

        if (answer == correctAnswer) {
            printf("Correct! +1 point\n");
            users[userIndex].score++;
        } else {
            printf("Wrong!\n");
        }
        printf("Current score: %d\n", users[userIndex].score);

    } while (1);

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
