#include<stdio.h>

#define SIZE 5

int comparethearray(int a[], int b[], int i)
{
    for(i=0; i<SIZE; i++)
    {
        if (a[i]!=b[i])
        {
            return 0;
}

return 1;

    }
}

int main(){

    int A[SIZE], B[SIZE], i;

    for(i=0; i<SIZE; i++)
    {
    printf("Enter the integers for array A:\n");
    scanf("%d", &A[i]);
    }

    for(i=0; i<SIZE; i++)
    {
    printf("Enter the integers for array B:\n");
    scanf("%d", &B[i]);
    }


    printf("\nArray A\t\t Array B\n");
    for(i=0; i<SIZE; i++)
    {
     printf("\n%d\t\t%d\n", A[i], B[i]);
    }

if (comparethearray(A, B, i)){
    printf("Equal");
}

else{
    printf("Not Equal");

}
return 0;
}



