#include<stdio.h>
#include<ctype.h>

int main(){

char letter;

printf("Enter a letter from a to z: ");
scanf("%c", &letter);

letter = tolower(letter);

if(letter < 'a' || letter > 'z'){
    printf("That is not a letter.\n");
return 0;
}

switch(letter){

case 'a':
case 'e':
case 'i':
case 'o':
case 'u':

    printf("'%c' is a vowel.\n ", letter);
    break;

    default:
    printf("'%c' is a consonant.\n ", letter);
}
return 0;
}
