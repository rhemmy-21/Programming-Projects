#include<stdio.h>
#include<math.h>

int main(){

double KinEn, m, v;

printf("Enter a value for mass: ");
scanf("%lf", &m);

printf("Enter a value for velocity: ");
scanf("%lf", &v);

KinEn = m * pow(v, 2) / 2;

printf("Kinetic Energy: %.1lf J", KinEn);

return 0;
}
