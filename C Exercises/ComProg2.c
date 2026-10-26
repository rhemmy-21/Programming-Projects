#include<stdio.h>

int main(){

int num1, num2, rem;

printf("This is a GCD Calculator \n");

printf("Enter a whole number that is bigger number than the next input: ");
scanf("%d", &num1);

printf("Enter the next number that is smaller than the first number: ");
scanf("%d", &num2);

rem = num1%num2;

while(rem!= 0){
    num1 = num2;
    num2 = rem;
    rem = num1%num2;
}

printf("The GCD is: %d", num2);

return 0;
}
