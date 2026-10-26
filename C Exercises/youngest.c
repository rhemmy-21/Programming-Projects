#include <stdio.h>
#include <string.h>

int main() {
    char name[5][50];
    int age[5];
    int i, youngestIndex = 0;

    // Input names and ages
    for(i = 0; i < 5; i++) {
        printf("Enter name %d: ", i + 1);
        scanf("%s", name[i]);

        printf("Enter age of %s: ", name[i]);
        scanf("%d", &age[i]);
    }

    // Find the youngest
    for(i = 1; i < 5; i++) {
        if(age[i] < age[youngestIndex]) {
            youngestIndex = i;
        }
    }

    // Output youngest person
    printf("\nYoungest Person: %s\n", name[youngestIndex]);
    printf("Age: %d\n", age[youngestIndex]);

    return 0;
}
