#include<stdio.h>

int main(){

int number;
int d1, d2, d3, d4, d5;

printf("Enter a number integer(0 to 32767): ");
scanf("%d", &number);

d1 = (number/10000) %10;
d2 = (number/1000) %10;
d3 = (number/100) %10;
d4 = (number/10) %10;
d5 = number %10;

printf("%d   %d   %d   %d   %d \n", d1, d2, d3, d4, d5);
printf("%d   %d   %d   %d \n", d2, d3, d4, d5);
printf("%d   %d   %d \n", d3, d4, d5);
printf("%d   %d \n", d4, d5);
printf("%d \n", d5);

return 0;
}
