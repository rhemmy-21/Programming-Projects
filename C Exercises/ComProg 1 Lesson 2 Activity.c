#include <stdio.h>
#include <string.h>
int main ()
{
    char name[100]; // to store the name
    int age;        // to store the age

    // Ask for name
    printf("Enter your full name: ");
    fgets(name, sizeof(name), stdin); // read full line including spaces

    // Remove newline character if present
    name[strcspn(name, "\n")] = '\0';

    // Ask for age
    printf("Enter your age: ");
    scanf("%d", &age);

    // Output greeting
    printf("Hi %s, you are %d years old!\n", name, age);

    return 0;

}
