#include <stdio.h>

float computeCharge(char vType, int hr)
{
    float ch;

    if (vType == 'c' || vType == 'C')
    {
        ch = 2 * hr;
    }
    else if (vType == 'b' || vType == 'B')
    {
        ch = 3 * hr;
    }
    else if (vType == 't' || vType == 'T')
    {
        ch = 4 * hr;
    }
    else
    {
        ch = 0;
    }

    return ch;
}

int main(void)
{
    char type, choice;
    int hrs;
    float result;
 do{
    printf("Enter vehicle type (c for car, b for bus, t for truck): ");
    scanf(" %c", &type);
    printf("Enter number of hours: ");
    scanf("%d", &hrs);

    result = computeCharge(type, hrs);

    if (result != 0){

        printf("Parking charge = $%.2f\n", result);
    }
    else{

        printf("Invalid vehicle type entered!\n");
    }
        printf("Do you wish to continue? (y/n): \n");
        scanf(" %c", &choice);

} while (choice == 'y' || choice == 'Y');

    printf("Program ended.\n");

    return 0;
}
