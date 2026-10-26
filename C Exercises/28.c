#include<stdio.h>
#include<math.h>

int main(){

float x;
int number, rightmostdigit;

printf("Enter your desired float point number: ");
scanf("%f",&x);

number = x;

rightmostdigit = abs(number %10);

printf("The rightmost digit of your given float point number is %d. ", rightmostdigit);

return 0;
}
