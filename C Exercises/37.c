#include<stdio.h>

int main(){

int fib1, fib2, fib3;

fib1 = 13 + 21;
printf("%d", fib1);

fib2 = fib1 + 21;
printf(", %d", fib2);

fib3 = fib1 + fib2;
printf(", %d", fib3);

return 0;
}
