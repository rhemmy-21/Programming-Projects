#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX 5
#define Grade 3

char names[MAX][50];
int grades[MAX][Grade];
int last = 0;

void add();
void del();
void display();
void update();
int isfull();
int isempty();
int locate(char name[]);
int menu();
void toLower(char str[]);

int main()
{
    while(1){
        switch(menu()){
            case 1: add(); break;
            case 2: update(); break;
            case 3: del(); break;
            case 4: display(); break;
            case 5:
                printf("Bye\n");
                exit(0);
            default:
                printf("Choose 1 to 5 only\n");
        }
    }
    return 0;
}

void add(){
    if(isfull()){
        printf("Array is full, cannot add\n");
        return;
    }

    char name[50];
    int g[Grade];

    printf("Enter the name: ");
    scanf(" %[^\n]", name);

    if(locate(name) != -1){
        printf("Student already exists\n");
        return;
    }

    for(int i = 0; i < Grade; i++){
        printf("Enter quiz%d: ", i + 1);
        scanf("%d", &g[i]);
    }

    strcpy(names[last], name);

    for(int i = 0; i < Grade; i++){
        grades[last][i] = g[i];
    }

    last++;
    printf("Student added successfully\n");
}

void del(){
    if(isempty()){
        printf("Array is empty, cannot delete\n");
        return;
    }

    char name[50];
    printf("Enter the name to delete: ");
    scanf(" %[^\n]", name);

    int pos = locate(name);

    if(pos == -1){
        printf("Name not found\n");
        return;
    }

    for(int i = pos; i < last - 1; i++){
        strcpy(names[i], names[i + 1]);

        for(int j = 0; j < Grade; j++){
            grades[i][j] = grades[i + 1][j];
        }
    }

    last--;
    printf("Student deleted successfully\n");
}

void display(){
    if(isempty()){
        printf("No students to display\n");
        return;
    }

    printf("\nStudents List:\n");
    printf("Name\t\tQ1\tQ2\tQ3\tResult\n");

    for(int i = 0; i < last; i++){
        int sum = 0;

        for(int j = 0; j < Grade; j++){
            sum += grades[i][j];
        }

        float avg = sum / 3.0;

        printf("%s\t%d\t%d\t%d\t%s\n",
               names[i],
               grades[i][0],
               grades[i][1],
               grades[i][2],
               (avg >= 50) ? "Passed" : "Failed");
    }
}

void update(){
    if(isempty()){
        printf("No students available.\n");
        return;
    }

    char name[50];
    printf("Enter the name to update grades: ");
    scanf(" %[^\n]", name);

    int pos = locate(name);

    if(pos == -1){
        printf("Student not found\n");
        return;
    }

    int choice;

    do{
        printf("\nUpdate Menu for %s\n", names[pos]);
        printf("1. 1st Grade\n");
        printf("2. 2nd Grade\n");
        printf("3. 3rd Grade\n");
        printf("4. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch(choice){
            case 1:
                printf("Enter new 1st grade: ");
                scanf("%d", &grades[pos][0]);
                printf("1st grade updated successfully\n");
                break;

            case 2:
                printf("Enter new 2nd grade: ");
                scanf("%d", &grades[pos][1]);
                printf("2nd grade updated successfully\n");
                break;

            case 3:
                printf("Enter new 3rd grade: ");
                scanf("%d", &grades[pos][2]);
                printf("3rd grade updated successfully\n");
                break;

            case 4:
                printf("Exiting update menu...\n");
                break;

            default:
                printf("Choose 1 to 4 only\n");
        }

    } while(choice != 4);
}

int isfull(){
    return last == MAX;
}

int isempty(){
    return last == 0;
}

int locate(char name[]){
    char temp1[50], temp2[50];

    strcpy(temp1, name);
    toLower(temp1);

    for(int i = 0; i < last; i++){
        strcpy(temp2, names[i]);
        toLower(temp2);

        if(strcmp(temp1, temp2) == 0)
            return i;
    }
    return -1;
}

void toLower(char str[]){
    for(int i = 0; str[i]; i++){
        str[i] = tolower(str[i]);
    }
}

int menu(){
    int ch;

    printf("\nMENU\n");
    printf("1. Add\n");
    printf("2. Update\n");
    printf("3. Delete\n");
    printf("4. Display\n");
    printf("5. Exit\n");
    printf("Enter choice: ");

    scanf("%d", &ch);
    return ch;
}

