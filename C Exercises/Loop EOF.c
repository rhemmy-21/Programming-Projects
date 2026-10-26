#include <stdio.h>
int main (void){

   int number,  total=0, result;
   int poscnt = 0, negcnt = 0;

      printf("Enter numbers: <EOF> to stop : ");
      result = scanf("%d", &number);

      while(result !=EOF)
      {
        total += number;

        if(number>0){
            poscnt++;
        }

        else if(number<0){
            negcnt++;
        }

        printf("Total: %d\n", total);
        result = scanf("%d", &number);

      }
    printf("Positive count: %d\n", poscnt);
    printf("Negative count: %d\n", negcnt);


return 0;
}
