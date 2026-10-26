#include<stdio.h>
#include<math.h>

int main(){

float x = 1.00, y = 2.00, p, s, total, exp = 2;

p = x*y;
s = x + y;

total = pow(s,exp) + p * (s - x) * (p + y);

printf("%.2f", total);

return 0;
}
