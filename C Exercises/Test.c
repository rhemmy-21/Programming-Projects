#include <stdio.h>

int main(){

char name[49];

printf("Enter your name: ");
scanf("%49[^/n]", &name);

printf("Hello %s! Welcome to C Programming. ", name);

return 0;
}
