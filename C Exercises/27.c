#include<stdio.h>

int main(){

int x, y, product;

printf("Enter the first integer: ");
scanf("%d", &x);

printf("Enter the second integer: ");
scanf("%d", &y);

product = x * y;

printf("The product of %d and %d is %d ",x ,y, product);

return 0;
}
