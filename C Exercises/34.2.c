#include<stdio.h>

int main(){

double res, b, c;

printf("Calculate a result with this formula result = b + c / 2 * b * c \n");

printf("Enter value for b: ");
scanf("%lf", &b);

printf("Enter value for c: ");
scanf("%lf", &c);

res = b + c / 2 * b * c;

printf("The result is: %lf ", res);

return 0;
}
