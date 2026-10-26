#include <stdio.h>

int main()
{

int age, year=2025;

    printf("Enter your age: \n");
    scanf("%d", &age);

    age = age + 1;

    printf("Your age by next year, %d is %d\n",year+1 ,age);
    printf("Thank you for using this program");

    return 0;
}
