#include<stdio.h>

int main(){

int start = 9, n, i;

for (n = start; n >= 1; n--) {
for (i = 1; i <= n; i++) {
    printf("%d", i);
if (i < n) printf(" ");
}
printf("\n");
}
return 0;
}
