#include <stdio.h>

int main() {
    int choice;
    float money, change;

    // Product prices
    float price1 = 15.0; // Soda
    float price2 = 10.0; // Chips
    float price3 = 12.5; // Chocolate

    printf("=== VENDING MACHINE ===\n");
    printf("1. Soda      - PHP %.2f\n", price1);
    printf("2. Chips     - PHP %.2f\n", price2);
    printf("3. Chocolate - PHP %.2f\n", price3);

    printf("\nEnter your choice (1-3): ");
    scanf("%d", &choice);

    switch(choice) {
        case 1:
            printf("You selected Soda. Price: PHP %.2f\n", price1);
            printf("Insert money: ");
            scanf("%f", &money);
            if (money >= price1) {
                change = money - price1;
                printf("Dispensing Soda...\n");
                if (change > 0)
                    printf("Your change: PHP %.2f\n", change);
            } else {
                printf("Not enough money. Transaction canceled.\n");
            }
            break;

        case 2:
            printf("You selected Chips. Price: PHP %.2f\n", price2);
            printf("Insert money: ");
            scanf("%f", &money);
            if (money >= price2) {
                change = money - price2;
                printf("Dispensing Chips...\n");
                if (change > 0)
                    printf("Your change: PHP %.2f\n", change);
            } else {
                printf("Not enough money. Transaction canceled.\n");
            }
            break;

        case 3:
            printf("You selected Chocolate. Price: PHP %.2f\n", price3);
            printf("Insert money: ");
            scanf("%f", &money);
            if (money >= price3) {
                change = money - price3;
                printf("Dispensing Chocolate...\n");
                if (change > 0)
                    printf("Your change: PHP %.2f\n", change);
            } else {
                printf("Not enough money. Transaction canceled.\n");
            }
            break;

        default:
            printf("Invalid choice.\n");
    }

    printf("Thank you for using the vending machine!\n");
    return 0;
}
