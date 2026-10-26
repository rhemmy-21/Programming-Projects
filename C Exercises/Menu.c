#include <stdio.h>

// Function prototypes
void listEven();
void listOdd();
void findGCD();
void fibonacciRange();
int menu();

int main() {
    int choice;

    do {
        choice = menu();

        switch(choice) {
            case 1:
                listEven();
                break;
            case 2:
                listOdd();
                break;
            case 3:
                findGCD();
                break;
            case 4:
                fibonacciRange();
                break;
            case 5:
                printf("Exiting program...\n");
                break;
            default:
                printf("Invalid choice!\n");
        }

        printf("\n");

    } while(choice != 5);

    return 0;
}

// Menu function
int menu() {
    int option;
    printf("=== MENU ===\n");
    printf("1. List Even Numbers (only if input is even)\n");
    printf("2. List Odd Numbers (only if input is odd)\n");
    printf("3. Find GCD of Two Numbers\n");
    printf("4. Fibonacci Numbers Between Two Numbers\n");
    printf("5. Exit\n");
    printf("Enter your choice: ");
    scanf("%d", &option);
    return option;
}

// Case 1
void listEven() {
    int n, i;
    printf("Enter a positive number: ");
    scanf("%d", &n);

    if(n <= 0) {
        printf("Number must be positive!\n");
        return;
    }

    if(n % 2 == 0) {
        printf("%d is EVEN\n", n);
        printf("Even numbers up to %d: ", n);
        for(i = 2; i <= n; i += 2) {
            printf("%d ", i);
        }
        printf("\n");
    } else {
        printf("%d is ODD. No even numbers listed.\n", n);
    }
}

// Case 2
void listOdd() {
    int n, i;
    printf("Enter a positive number: ");
    scanf("%d", &n);

    if(n <= 0) {
        printf("Number must be positive!\n");
        return;
    }

    if(n % 2 != 0) {
        printf("%d is ODD\n", n);
        printf("Odd numbers up to %d: ", n);
        for(i = 1; i <= n; i += 2) {
            printf("%d ", i);
        }
        printf("\n");
    } else {
        printf("%d is EVEN. No odd numbers listed.\n", n);
    }
}

// Case 3
void findGCD() {
    int a, b, temp;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    int x = a, y = b;

    while(b != 0) {
        temp = b;
        b = a % b;
        a = temp;
    }

    printf("GCD of %d and %d is %d\n", x, y, a);
}

// Case 4
void fibonacciRange() {
    int lower, upper;
    printf("Enter two numbers (smaller first, bigger second): ");
    scanf("%d %d", &lower, &upper);

    if(lower > upper) {
        printf("First number must be smaller than second!\n");
        return;
    }

    int a = 0, b = 1;
    printf("Fibonacci numbers between %d and %d: ", lower, upper);

    while(a <= upper) {
        if(a >= lower) {
            printf("%d ", a);
        }
        int next = a + b;
        a = b;
        b = next;
    }

    printf("\n");
}
