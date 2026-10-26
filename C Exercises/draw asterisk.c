#include <stdio.h>

// A void function: it does something but does NOT return a value
void drawSquare(int size) {
    for (int row = 0; row < size; row++) {
        for (int col = 0; col < size; col++) {
            printf("* ");
        }
        printf("\n"); // move to next line
    }
}

int main(void) {
    int n;
    printf("Enter size of square: ");
    scanf("%d", &n);

    drawSquare(n); // call the void function
    return 0;
}
