#include<stdio.h>

int main(){

float inches, cm;

printf("Enter the measurement in inches: ");
scanf("%f", &inches);

cm = inches * 2.54;

printf("%2.f inches is %.2f centimeters." , inches, cm);

return 0;
}

