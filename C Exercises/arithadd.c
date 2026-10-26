#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int addition(int items){

int i, cor = 0, a ,b, ans;
 for (i=0;i<items;i++){
    a = rand()%20 + 1;
    b = rand()%20 + 1;
    printf("%d.) What is %d + %d\n", i +1, a, b);
    scanf("%d", &ans);
    if (ans == a+b){
        printf("Correct!\n");
        cor++;
    }
    else{
    printf("Malas! The correct answer is %d\n", a+b);
    }
 }
return cor;
}

int main(){

srand(time(NULL));
    int n=5;
    printf("You got %d correct answers out of %d?\n",  addition(n), n);

return 0;
}
