#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main(){

int i=1, num, guess;
srand(time(NULL));
printf("I have a number in mind (1-20), can you guess it?\n");
printf("Your guess: ");
scanf("%d", &guess);
num = rand()% 20 + 1;

while (guess!=num){
    if (guess>num){
        printf("Lower.\n");
    }
    else{
        printf("Higher.\n");
    }
    printf("Guess again.");
    scanf("%d", &guess);
}
printf("You got it in %d tries. \n", guess);

return 0;
}
