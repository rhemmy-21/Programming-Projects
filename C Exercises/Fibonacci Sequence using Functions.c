#include <stdio.h>

int printFibonacci(int seriesSize);

int main()
{
    int seriesSize;
    int lastTerm;

    printf("This program prints a Fibonacci series...\n");
    printf("How many numbers do you want? \n");
    scanf("%d", &seriesSize);

    printf("\n");

    lastTerm = printFibonacci(seriesSize);

    printf("\nThe last term in the series is %d\n", lastTerm);

    return 0;
}

int printFibonacci(int seriesSize)
{
    int termCounter = 0;
    int fNum = 0, sNum = 1, tNum;

    while (termCounter < seriesSize)
    {
        printf("%5d", fNum);
        tNum = fNum + sNum;
        fNum = sNum;
        sNum = tNum;
        termCounter++;
    }

    return fNum;
}
