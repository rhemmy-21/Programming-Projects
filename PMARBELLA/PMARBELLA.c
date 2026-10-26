#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *file1, *file2;
    char name[50];
    float g1, g2, g3, average;

    // Open file1.txt for reading
    file1 = fopen("file1.txt", "r");
    if (file1 == NULL) {
        printf("Error: file1.txt not found!\n");
        return 1;
    }

    // Open file2.txt for writing (passed students)
    file2 = fopen("file2.txt", "w");
    if (file2 == NULL) {
        printf("Error: Cannot open file2.txt\n");
        fclose(file1);
        return 1;
    }

    // Read file1 line by line
    while (fscanf(file1, "%s %f %f %f",
                  name, &g1, &g2, &g3) != EOF) {

        average = (g1 + g2 + g3) / 3;

        if (average >= 75) {
            fprintf(file2, "%s %.1f, %.1f, %.1f\n",
                    name, g1, g2, g3);
        }
    }

    fclose(file1);
    fclose(file2);

    printf("Processing complete. Check file2.txt\n");

    return 0;
}




