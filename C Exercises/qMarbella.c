#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int Menu();
int Addition();
int Subtraction();
int Multiplication();
int Division();

int Addition(){

    int items = 5, i, cor = 0, a ,b, ans;
    printf("=== Addition Quiz ===\n");
    for (i=0;i<items;i++){
    a = rand()%20 + 1;
    b = rand()%20 + 1;
    printf("%d.) What is %d + %d\n", i + 1, a, b);
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

int Subtraction(){

        int items = 5, i, cor = 0, a ,b, ans;
        printf("=== Subtraction Quiz ===\n");
        for (i=0;i<items;i++){
        a = rand()%20 + 1;
        b = rand()%20 + 1;

         if (a<b){
            int temp = a;
            a = b;
            b = temp;
        }

        printf("%d.) What is %d - %d\n", i + 1, a, b);
        scanf("%d", &ans);

        if (ans == a-b){
            printf("Correct!\n");
            cor++;
        }
        else{
        printf("Malas! The correct answer is %d\n", a-b);
        }
     }
    return cor;
}

int Multiplication(){

 int items = 5, i, cor = 0, a ,b, ans;
    printf("=== Multiplication Quiz ===\n");
    for (i=0;i<items;i++){
    a = rand()%20 + 1;
    b = rand()%20 + 1;
    printf("%d.) What is %d x %d\n", i + 1, a, b);
    scanf("%d", &ans);
    if (ans == a*b){
        printf("Correct!\n");
        cor++;
    }
    else{
    printf("Malas! The correct answer is %d\n", a*b);
    }
 }
return cor;


}
int Division(){
    int items = 5, i, cor = 0, a ,b, ans;
        printf("=== Division Quiz ===\n");
        for (i=0;i<items;i++){

        b = rand()%20 + 1;
        ans = rand()%20 + 1;

        a = b * ans;

        int userAns;

        printf("%d.) What is %d / %d\n", i + 1, a, b);
        scanf("%d", &userAns);

        if (userAns == ans){
            printf("Correct!\n");
            cor++;
        }
        else{
        printf("Malas! The correct answer is %d\n", ans);
        }
     }
return cor;
}


int main(){

 srand(time(NULL));
 int choice;
    do {
        choice = Menu();
        switch (choice) {
        case 1:
        {
            system("cls");
            int score;
            int n=5;
            score = Addition();
            printf("You got %d correct answers out of %d.\n", score, n);
            system("pause");
            break;
        }
        case 2:
        {
            system("cls");
            int score;
            int n=5;
            score = Subtraction();
            printf("You got %d correct answers out of %d.\n", score, n);
            system("pause");
            break;
        }
        case 3:
        {
            system("cls");
            int score;
            int n=5;
            score = Multiplication();
            printf("You got %d correct answers out of %d.\n", score, n);
            system("pause");
            break;
        }
        case 4:
        {
            system("cls");
            int score;
            int n=5;
            score = Division();
            printf("You got %d correct answers out of %d.\n", score, n);
            system("pause");
            break;
        }
        case 5: printf("Exiting program...\n"); break;
        default: printf("Invalid choice!\n"); system("pause");
        }
    } while (choice != 5);
return 0;
}

int Menu() {
    int option;
    system("cls");
    printf("=== Quiz ===\n");
    printf("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit\n");
    printf("Choose [1-5]: ");
    scanf("%d", &option);
    return option;
}
