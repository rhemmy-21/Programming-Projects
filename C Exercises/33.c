#include<stdio.h>

int main(){

float C, F;

printf("Enter the temperature in Fahrenheit: ");
scanf("%f", &F);
printf("Fahrenheit temperature: %.2f\n", F);

C = (100.0 / 180.0) * (F - 32);

printf("Celsius temperature: %.2f\n", C);

return 0;
}
