#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int lotto[6];
    int i, j, num, duplicate;

    srand(time(NULL));

    for (i = 0; i < 6; i++) {
        do {
            duplicate = 0;
            num = rand() % 45 + 1; // random number from 1 to 45

            for (j = 0; j < i; j++) {
                if (lotto[j] == num) {
                    duplicate = 1;
                    break;
                }
            }

        } while (duplicate);

        lotto[i] = num;
    }

    printf("Lotto Numbers (1-45):\n");
    for (i = 0; i < 6; i++) {
        printf("%d ", lotto[i]);
    }

    return 0;
}
