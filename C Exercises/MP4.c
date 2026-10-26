#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 100

// ==============================
// GRADING SYSTEM ARRAYS
// ==============================
char name[MAX][21];
int s1[MAX], s2[MAX], s3[MAX];
int total[MAX], ave[MAX];
int remarks[MAX];
int count = 0;

// ==============================
// FUNCTION PROTOTYPES
// ==============================
void add();
void display();
void todelete();
void toupdate();
void computeGrades(int i); // separate from arrays
int isfull();
int isempty();
int locate(char target[]);
void clearInputBuffer();

// ==============================
// CLEAR INPUT BUFFER
// ==============================
void clearInputBuffer() {
    int c;
    while ((c = getchar()) != '\n' && c != EOF);
}

// ==============================
// COMPUTE GRADES FUNCTION
// ==============================
void computeGrades(int i) {
    total[i] = s1[i] + s2[i] + s3[i];
    ave[i] = total[i] / 3;
    remarks[i] = (ave[i] >= 75) ? 1 : 0;
}

// ==============================
// ADD RECORD
// ==============================
void add() {
    system("cls");

    if (isfull()) {
        printf("The array is full.\n");
        system("pause");
        return;
    }

    char tempname[21];

    printf("Enter a name: ");
    scanf(" %20[^\n]", tempname);
    clearInputBuffer();

    if (locate(tempname) != -1) {
        printf("The name already exists!\n");
        system("pause");
        return;
    }

    strcpy(name[count], tempname);

    printf("Enter score 1: ");
    scanf("%d", &s1[count]);
    clearInputBuffer();

    printf("Enter score 2: ");
    scanf("%d", &s2[count]);
    clearInputBuffer();

    printf("Enter score 3: ");
    scanf("%d", &s3[count]);
    clearInputBuffer();

    // Call computeGrades separately, NOT part of array
    computeGrades(count);

    count++;

    printf("Record Added Successfully.\n");
    system("pause");
}

// ==============================
// DISPLAY RECORDS
// ==============================
void display() {
    system("cls");

    if (isempty()) {
        printf("Empty!\n");
        system("pause");
        return;
    }

    printf("=== LIST OF GRADES ===\n");

    for (int i = 0; i < count; i++) {
        printf("%d.) Name: %-10s S1:%3d S2:%3d S3:%3d Total:%3d Ave:%3d Remarks: %s\n",
               i + 1, name[i], s1[i], s2[i], s3[i],
               total[i], ave[i],
               remarks[i] ? "PASSED" : "FAILED");
    }

    system("pause");
}

// ==============================
// DELETE RECORD
// ==============================
void todelete() {
    system("cls");

    if (isempty()) {
        printf("Nothing to delete!\n");
        system("pause");
        return;
    }

    char target[21];

    display();

    printf("Enter name to delete: ");
    scanf(" %20[^\n]", target);
    clearInputBuffer();

    int pos = locate(target);

    if (pos == -1) {
        printf("Name not found.\n");
        system("pause");
        return;
    }

    for (int i = pos; i < count - 1; i++) {
        strcpy(name[i], name[i + 1]);
        s1[i] = s1[i + 1];
        s2[i] = s2[i + 1];
        s3[i] = s3[i + 1];
        total[i] = total[i + 1];
        ave[i] = ave[i + 1];
        remarks[i] = remarks[i + 1];
    }

    count--;

    printf("Deleted Successfully\n");
    system("pause");
}

// ==============================
// UPDATE RECORD
// ==============================
void toupdate() {
    system("cls");

    if (isempty()) {
        printf("No records to update.\n");
        system("pause");
        return;
    }

    char target[21];

    display();

    printf("\nEnter name to update: ");
    scanf(" %20[^\n]", target);
    clearInputBuffer();

    int pos = locate(target);

    if (pos == -1) {
        printf("Name not found!\n");
        system("pause");
        return;
    }

    printf("\nEnter new score 1: ");
    scanf("%d", &s1[pos]);
    clearInputBuffer();

    printf("Enter new score 2: ");
    scanf("%d", &s2[pos]);
    clearInputBuffer();

    printf("Enter new score 3: ");
    scanf("%d", &s3[pos]);
    clearInputBuffer();

    // Compute grades separately
    computeGrades(pos);

    printf("\nRecord updated successfully!\n");
    system("pause");
}

// ==============================
// HELPER FUNCTIONS
// ==============================
int isfull() { return count == MAX; }
int isempty() { return count == 0; }

int locate(char target[]) {
    for (int i = 0; i < count; i++)
        if (strcmp(name[i], target) == 0)
            return i;
    return -1;
}

// ==============================
// GRADING MENU
// ==============================
int gradingMenu() {
    int option;
    system("cls");
    printf("=== GRADING SYSTEM ===\n");
    printf("1. Add\n2. Display\n3. Delete\n4. Update\n5. Back to Main Menu\n");
    printf("Choose [1-5]: ");
    scanf("%d", &option);
    clearInputBuffer();
    return option;
}

// ==============================
// GRADING DRIVER
// ==============================
void gradingSystem() {
    int choice;
    do {
        choice = gradingMenu();
        switch (choice) {
        case 1: add(); break;
        case 2: display(); break;
        case 3: todelete(); break;
        case 4: toupdate(); break;
        case 5: break;
        default: printf("Invalid choice!\n"); system("pause");
        }
    } while (choice != 5);
}

