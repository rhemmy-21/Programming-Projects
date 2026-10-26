#include<stdio.h>

int main(){

int num, i, Prime ;

printf("PRIME NUMBER DETECTOR\n");

printf("Enter a random whole non-negative number: ");
scanf("%d", &num);

if(num <= 1){
    printf("This is not a prime number");

    return 0;
}

for (i = 2; i < num; i++){

    if (num % i == 0){
        Prime = 0;
        break;
    }
}

if(Prime == 1){
    printf("This is a prime number.");
}
else {
    printf("This is not a prime number.");
}
    return 0;


}
