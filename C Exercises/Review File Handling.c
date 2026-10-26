#include <stdio.h>
#include <stdlib.h>

void writeData();
void displayData ();

int main(){

writeData();
displayData ();

return 0;
}

void writeData(){

    FILE *fp;
    int i, n, age;
    char name[50];

    fp = fopen("students.txt", "w");

    if (fp == NULL){
        printf("Error in finding file! \n");
        exit(1);
    }

    printf("How many students do you want to store? ");
    scanf("%d",&n );

    for(i=1;i<=n;i++){

        printf("Enter the name of student %d: ", i);
        scanf(" %[^\n]", name);

        printf("Enter the age of the student %d: ", i);
        scanf("%d", &age);

        if(age >= 18){
            fprintf(fp, "Name: %s | Age: %d | ADULT\n", name, age);
        }
        else{
            fprintf(fp, "Name: %s | Age: %d | MINOR\n", name, age);
        }

    }

fclose(fp);

}

void displayData(){

FILE *fp;
char ch;

fp = fopen("students.txt", "r");

  if (fp == NULL){
        printf("Error in finding file! \n");
        exit(1);
    }

    printf("\n---Student Records---\n");

    while((ch = fgetc(fp))!= EOF){
        printf("%c",ch);
    }

fclose(fp);
}
