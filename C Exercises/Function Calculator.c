#include <stdio.h>

// Function declarations
int add(int a, int b);
int subtract(int a, int b);
int multiply(int a, int b);
float divide(int a, int b);
int modulus(int a, int b);

int main() {
    int choice, num1, num2;
    int sum, diff, prod, mod;
    float quot;

    do {
        printf("\nCALCULATOR\n");
        printf("1.] Addition\n");
        printf("2.] Subtraction\n");
        printf("3.] Multiplication\n");
        printf("4.] Division\n");
        printf("5.] Modulus\n");
        printf("6.] Exit\n");

        printf("\nEnter Operation [1/2/3/4/5/6]: ");
        scanf("%d", &choice);

        if (choice >= 1 && choice <= 5) {
            printf("\nEnter first number: ");
            scanf("%d", &num1);
            printf("Enter second number: ");
            scanf("%d", &num2);
        }

        switch (choice) {
            case 1:
                printf("\nADDITION\n");
                sum = add(num1, num2);
                printf("The sum is: %d\n", sum);
                break;

            case 2:
                printf("\nSUBTRACTION\n");
                diff = subtract(num1, num2);
                printf("The difference is: %d\n", diff);
                break;

            case 3:
                printf("\nMULTIPLICATION\n");
                prod = multiply(num1, num2);
                printf("The product is: %d\n", prod);
                break;

            case 4:
                printf("\nDIVISION\n");
                if (num2 != 0) {
                    quot = divide(num1, num2);
                    printf("The quotient is: %.2f\n", quot);
                } else {
                    printf("Error: Division by zero is not allowed.\n");
                }
                break;

            case 5:
                printf("\nMODULUS\n");
                if (num2 != 0) {
                    mod = modulus(num1, num2);
                    printf("The remainder is: %d\n", mod);
                } else {
                    printf("Error: Modulus by zero is not allowed.\n");
                }
                break;

            case 6:
                printf("\nProgram Ended.\n");
                break;

            default:
                printf("\nInvalid choice! Please try again.\n");
        }
    } while (choice != 6);

    return 0;
}

// Function definitions
int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int multiply(int a, int b) {
    return a * b;
}

float divide(int a, int b) {
    return (float)a / b;
}

int modulus(int a, int b) {
    return a % b;
}
