#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define max 5

/* ===== GLOBAL VARIABLES ===== */
char name[max][21];
int g1[max], g2[max], g3[max];
int total[max], ave[max];
int remarks[max];      // 1 = PASSED, 0 = FAILED
int count = 0;

/* ===== FUNCTION PROTOTYPES ===== */
void show(void);
void add(void);
void todelete(void);
int isfull(void);
int isempty(void);
int locate(char target[21]);

/* ===== FUNCTIONS ===== */

void show(void)
{
    system("cls");
    if (isempty())
    {
        printf("List Empty\n");
        system("pause");
        return;
    }

    printf("LIST OF GRADES\n\n");
    for (int i = 0; i < count; i++)
    {
        printf("%d). NAME: %-10s G1: %-3d G2: %-3d G3: %-3d TOTAL: %-3d AVE: %-3d REMARKS: %s\n",
               i + 1, name[i], g1[i], g2[i], g3[i],
               total[i], ave[i], remarks[i] ? "PASSED" : "FAILED");
    }
    system("pause");
}

void add(void)
{
    system("cls");
    if (isfull())
    {
        printf("LIST IS FULL\n");
        system("pause");
        return;
    }

    char tempName[21];

    printf("Enter Name: ");
    scanf(" %20[^\n]", tempName);

    if (locate(tempName) != -1)
    {
        printf("Name already exists. Duplicate not allowed.\n");
        system("pause");
        return;
    }

    strcpy(name[count], tempName);

    printf("Enter Grade 1: ");
    scanf("%d", &g1[count]);
    printf("Enter Grade 2: ");
    scanf("%d", &g2[count]);
    printf("Enter Grade 3: ");
    scanf("%d", &g3[count]);

    total[count] = g1[count] + g2[count] + g3[count];
    ave[count] = total[count] / 3;

    remarks[count] = (ave[count] >= 75) ? 1 : 0;

    count++;
    printf("Record Added Successfully\n");
    system("pause");
}

void todelete(void)
{
    system("cls");
    if (isempty())
    {
        printf("Nothing to delete\n");
        system("pause");
        return;
    }

    char target[21];
    show();

    printf("\nEnter name to delete: ");
    scanf(" %20[^\n]", target);

    int pos = locate(target);

    if (pos == -1)
    {
        printf("Name not found\n");
        system("pause");
        return;
    }

    for (int i = pos; i < count - 1; i++)
    {
        strcpy(name[i], name[i + 1]);
        g1[i] = g1[i + 1];
        g2[i] = g2[i + 1];
        g3[i] = g3[i + 1];
        total[i] = total[i + 1];
        ave[i] = ave[i + 1];
        remarks[i] = remarks[i + 1];
    }

    count--;
    printf("Deleted Successfully\n");
    system("pause");
}

/* ===== UTILITY FUNCTIONS ===== */

int isfull(void)
{
    return count == max;
}

int isempty(void)
{
    return count == 0;
}

int locate(char target[21])
{
    for (int i = 0; i < count; i++)
    {
        if (strcmp(name[i], target) == 0)
            return i;
    }
    return -1;
}

/* ===== MAIN ===== */

int main(void)
{
    int choice;

    while (1)
    {
        system("cls");
        printf("MENU\n");
        printf("1) Show\n");
        printf("2) Add\n");
        printf("3) Delete\n");
        printf("4) Exit\n");
        printf("Choose: ");
        scanf("%d", &choice);
        getchar();

        switch (choice)
        {
        case 1:
            show();
            break;
        case 2:
            add();
            break;
        case 3:
            todelete();
            break;
        case 4:
            return 0;
        default:
            printf("Invalid choice\n");
            system("pause");
        }
    }
}
