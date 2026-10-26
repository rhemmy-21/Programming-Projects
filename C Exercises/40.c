#include<stdio.h>

int main(){

int divisor, dividend;
float quotient;

printf("Enter value for dividend: ");
scanf("%d", &dividend);

printf("Enter value for divisor: ");
scanf("%d", &divisor);

if(divisor!=0){
    quotient = (float)dividend/divisor;
}
if(divisor==0){
    quotient = divisor;
}
else{
    quotient = (float)dividend/divisor;

}
printf("If the divisor is %d divided by the dividend is %d it is equal to %.2f", dividend, divisor, quotient);

return 0;
}
