#include<stdio.h>

int main(){

float x, y, area, perimeter;

printf("Enter the length: ");
scanf("%f", &x);

printf("Enter the width: ");
scanf("%f", &y);

area = x * y;

perimeter = 2*(x + y);

printf("The area of the rectangle is %.2f and it's perimeter is %.2f. ", area, perimeter);

return 0;
}
