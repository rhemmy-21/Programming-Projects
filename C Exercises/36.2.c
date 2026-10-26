#include<stdio.h>

int main(){

float inches, yard;

printf("Enter the measurement in inches: ");
scanf("%f", &inches);

yard = inches / 36;

printf("%2.f inches is %.2f yards." , inches, yard);

return 0;
}

