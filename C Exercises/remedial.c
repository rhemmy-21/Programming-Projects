#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int choice;
    int num1, num2;
    int answer, correctAnswer;
    int score = 0;

    srand(time(NULL));

    do {
        printf("\n=== Arith practice program ===\n");
        printf("1. Addition\n");
        printf("2. Subtraction\n");
        printf("3. Multiplication\n");
        printf("4. Division\n");
        printf("5. Exit\n");

        printf("\nChoose operation: ");
        scanf("%d", &choice);

        if (choice == 5) {
            printf("\nFinal Score: %d\n", score);
            printf("Thankyou for using this program...\n");
            break;
        }

        // Generate random numbers
        num1 = rand() % 100 + 1;
        num2 = rand() % 100 + 1;

        switch (choice) {

        case 1:
            printf("\nADDITION\n");
            printf("%d + %d = ", num1, num2);
            scanf("%d", &answer);
            correctAnswer = num1 + num2;
            break;

        case 2:
            printf("\nSUBTRACTION\n");

            // ensure positive answer
            if (num1 < num2) {
                int temp = num1;
                num1 = num2;
                num2 = temp;
            }

            printf("%d - %d = ", num1, num2);
            scanf("%d", &answer);
            correctAnswer = num1 - num2;
            break;

        case 3:
            printf("\nMULTIPLICATION\n");
            printf("%d x %d = ", num1, num2);
            scanf("%d", &answer);
            correctAnswer = num1 * num2;
            break;

        case 4:
            printf("\nDIVISION\n");

            if (num2 == 0) {
                printf("It cannot proceed, it generated 0 value...\n");
                break;
            }

            // make divisible
            num1 = num1 * num2;

            printf("%d / %d = ", num1, num2);
            scanf("%d", &answer);
            correctAnswer = num1 / num2;
            break;

        default:
            printf("Invalid key...\n");
            continue;
        }

        // Check answer
        if (answer == correctAnswer) {
            printf("Galing!\n");
            score++;
        } else {
            printf("Mali! Correct answer is: %d\n", correctAnswer);
        }

    } while (1);

    return 0;
}
