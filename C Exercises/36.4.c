#include<stdio.h>

int main(){

float inches, meter;

printf("Enter the measurement in inches: ");
scanf("%f", &inches);

meter = inches / 39.37;

printf("%2.f inches is %.2f meters." , inches, meter);

return 0;
}
