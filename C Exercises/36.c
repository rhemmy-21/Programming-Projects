#include<stdio.h>

int main(){

float inches, feet;

printf("Enter the measurement in inches: ");
scanf("%f", &inches);

feet = inches / 12;

printf("%2.f inches is %.2f feet." , inches, feet);

return 0;
}
