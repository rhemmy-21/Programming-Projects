#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {

    int i, num, lowest;

    srand(time(NULL));

    printf("20 Random Numbers (1-100):\n");

    for(i = 1; i <= 20; i++) {

        num = rand() % 100 + 1;
        printf("%d ", num);

        if(i == 1) {
            lowest = num;   // first number becomes the lowest initially
        }
        else if(num < lowest) {
            lowest = num;   // update if a smaller number appears
        }
    }

    printf("\n\nLowest number: %d", lowest);

    return 0;
}
