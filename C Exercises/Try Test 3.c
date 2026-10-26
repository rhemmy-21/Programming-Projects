#include<stdio.h>

int main(){

    int choice;
    float money, change;

    float price1 = 1.2;
    float price2 = 3.4;
    float price3 = 2.4;

while (1){
    printf("*****Vending Machine*****\n");
    printf("1. Chocolate Milk ------ Price:$1.2\n", price1);
    printf("2. Doritos------ Price:$3.4\n", price2);
    printf("3. Mountain Dew------ Price:$2.4\n", price3);
    printf("4. Exit\n");

printf("\nEnter your choice (1-4):");
scanf("%d", &choice);

if(choice == 4){
    printf("Thank you for using this vending machine!\n");
    break;
}


switch(choice){

    case 1:
        printf("You selected Chocolate Milk. Price: %.2f\n", price1);
        printf("Insert money: ");
        scanf("%.2f",&money);
    if(money >= price1){
        change = money - price1;
        printf("Dispensing Chocolate Milk...\n");
        if(change > 0);
            printf("Your change: %f.2\n", change);
    }
        else{
            printf("Insufficient money. Transaction canceled.\n");
        }
    break;


     case 2:
        printf("You selected Doritos. Price: %.2f\n", price2);
        printf("Insert money:");
        scanf("%.2f", &money);
    if(money >= price2){
        change = money - price2;
        printf("Dispensing Doritos...\n");
        if(change > 0);
            printf("Your change: %f.2\n", change);
    }
        else{
            printf("Insufficient money. Transaction canceled.\n");
        }
    break;

    case 3:
        printf("You selected Mountain Dew. Price: %.2f\n", price3);
        printf("Insert money:");
        scanf("%.2f",&money);
    if(money >= price3){
        change = money - price3;
        printf("Dispensing Mountain Dew...\n");
        if(change > 0);
            printf("Your change: %f.2\n", change);
    }
        else{
            printf("Insufficient money. Transaction canceled.\n");
        }
    break;

default:
    printf("Invalid choice. Please try again.\n");

    }

}
return 0;

}





