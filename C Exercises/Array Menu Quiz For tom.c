#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 100

// ===== Function prototypes =====
void prime();
void even();
void odd();
void fibonacci();
void GCD();
void add();
void display();
void todelete();
void toupdate();
void computeGrades(int i);
int isfull();
int isempty();
int locate(char target[]);
int menu();
void clearInputBuffer();

// ===== Arrays =====
char name[MAX][21];
int s1[MAX], s2[MAX], s3[MAX];
int total[MAX], ave[MAX];
int remarks[MAX];
int count = 0;

// ===== Clear input buffer =====
void clearInputBuffer() {
    int c;
    while ((c = getchar()) != '\n' && c != EOF);
}

// ===== Compute grades =====
void computeGrades(int i) {
    total[i] = s1[i] + s2[i] + s3[i];
    ave[i] = total[i] / 3;
    remarks[i] = (ave[i] >= 75) ? 1 : 0;
}

// ===== Add record =====
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

    computeGrades(count);

    count++;

    printf("Record Added Successfully.\n");
    system("pause");
}

// ===== Display =====
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

// ===== Delete =====
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

// ===== Update =====
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

    printf("\nCurrent Record:\n");
    printf("Name: %s\n", name[pos]);
    printf("Score 1: %d\n", s1[pos]);
    printf("Score 2: %d\n", s2[pos]);
    printf("Score 3: %d\n", s3[pos]);

    printf("\nEnter new score 1: ");
    scanf("%d", &s1[pos]);
    clearInputBuffer();

    printf("Enter new score 2: ");
    scanf("%d", &s2[pos]);
    clearInputBuffer();

    printf("Enter new score 3: ");
    scanf("%d", &s3[pos]);
    clearInputBuffer();

    computeGrades(pos);

    printf("\nRecord updated successfully!\n");
    system("pause");
}

// ===== Utility =====
int isfull() { return count == MAX; }
int isempty() { return count == 0; }

int locate(char target[]) {
    for (int i = 0; i < count; i++)
        if (strcmp(name[i], target) == 0)
            return i;
    return -1;
}

// ===== Number Functions =====
void even() {
    int num;
    system("cls");

    printf("Enter a number: ");
    scanf("%d", &num);
    clearInputBuffer();

    printf("%d is %s even.\n", num, (num % 2 == 0) ? "" : "not");
    system("pause");
}

void odd() {
    int num;
    system("cls");

    printf("Enter a number: ");
    scanf("%d", &num);
    clearInputBuffer();

    printf("%d is %s odd.\n", num, (num % 2 != 0) ? "" : "not");
    system("pause");
}

void GCD() {
    int a, b, temp;
    system("cls");

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    clearInputBuffer();

    int x = a, y = b;

    while (b != 0) {
        temp = b;
        b = a % b;
        a = temp;
    }

    printf("GCD of %d and %d is %d\n", x, y, a);
    system("pause");
}

void fibonacci() {
    int n, a = 0, b = 1, next;
    system("cls");

    printf("Enter number of terms: ");
    scanf("%d", &n);
    clearInputBuffer();

    for (int i = 0; i < n; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }

    printf("\n");
    system("pause");
}

void prime() {
    int n, i, isprime = 1;
    system("cls");

    printf("Enter a number: ");
    scanf("%d", &n);
    clearInputBuffer();

    if (n <= 1) isprime = 0;

    for (i = 2; i * i <= n && isprime; i++)
        if (n % i == 0) isprime = 0;

    printf("%d is %s a prime number.\n", n, isprime ? "" : "not");
    system("pause");
}

// ===== Menu =====
int menu() {
    int option;

    system("cls");
    printf("=== Menu ===\n");
    printf("1. Even\n2. Odd\n3. GCD\n4. Fibonacci\n5. Prime\n");
    printf("6. Add\n7. Display\n8. Delete\n9. Exit\n10. Update\n");
    printf("Choose [1-10]: ");

    scanf("%d", &option);
    clearInputBuffer();

    return option;
}

// ===== Main =====
int main() {
    int choice;

    do {
        choice = menu();

        switch (choice) {
        case 1: even(); break;
        case 2: odd(); break;
        case 3: GCD(); break;
        case 4: fibonacci(); break;
        case 5: prime(); break;
        case 6: add(); break;
        case 7: display(); break;
        case 8: todelete(); break;
        case 10: toupdate(); break;
        case 9: printf("Exiting...\n"); break;
        default: printf("Invalid choice!\n"); system("pause");
        }

    } while (choice != 9);

    return 0;
}
