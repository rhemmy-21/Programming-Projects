#include<stdio.h>

int main(){

    int week0Population, week1Population, week2Population;
    float growthrate;

    printf("Enter initial population: ");
    scanf("%d", &week0Population);

    printf("Enter first week  population: ");
    scanf("%d", &week1Population);

    growthrate = ((week1Population-week2Population)*1.01) /week0Population;

    week2Population = growthrate*week1Population + week1Population;

    printf("The predicted population is %d at a growth rate of %lf%%\n", week2Population, growthrate);

return 0;
}
