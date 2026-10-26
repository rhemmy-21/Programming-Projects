#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int arr[20];
    int i, j, num, duplicate;
    int smallest;

    srand(time(0)); // seed for random numbers

    for(i = 0; i < 20; i++) {
        do {
            num = rand() % 100 + 1; // random number from 1 to 100
            duplicate = 0;

            // check if number already exists
            for(j = 0; j < i; j++) {
                if(arr[j] == num) {
                    duplicate = 1;
                    break;
                }
            }

        } while(duplicate);

        arr[i] = num;
    }

    // print the array
    printf("Array elements:\n");
    for(i = 0; i < 20; i++) {
        printf("%d ", arr[i]);
    }

    // find smallest number
    smallest = arr[0];
    for(i = 1; i < 20; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    printf("\nSmallest number: %d\n", smallest);

    return 0;
}
