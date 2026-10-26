#include<stdio.h>

int main(){

float C, F;

printf("Enter the temperature in Celsius: ");
scanf("%f", &C);

F = 32 + (C * 180/100);

printf("%.2f Celsius is %.2f Fahrenheit", C, F);

return 0;
}
