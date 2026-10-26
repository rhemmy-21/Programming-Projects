#include<stdio.h>
#include<math.h>

int main(){

int degree;
float radian;

printf("Enter the angle: ");
scanf("%d", &degree);

radian = degree *(3.141592653589793/180);

printf("%d degrees is %.5f radians", degree, radian);

return 0;
}
