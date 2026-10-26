#include <stdio.h>

int callLeastSig(int firstNum, int secNum);
int extractLeast(int digit);
void display(int result);

int main() {
    int sum, num1, num2;

    printf("Enter first 3-digit number: ");
    scanf("%d", &num1);

    printf("Enter second 3-digit number: ");
    scanf("%d", &num2);

    sum = callLeastSig(num1, num2);

    display(sum);

    return 0;
}

int callLeastSig(int firstNum, int secNum) {
    int ext1, ext2;
    ext1 = extractLeast(firstNum);
    ext2 = extractLeast(secNum);

    return (ext1 + ext2);
}

int extractLeast(int digit) {
    return (digit % 10);
}

void display(int result) {
    printf("The sum of their least significant values is %d\n", result);
}
