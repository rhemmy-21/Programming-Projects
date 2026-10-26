#include<stdio.h>

int main(){

int TV, VCR, RC, CD, TR;
float sub_total, tax, total;
float total_priceTV, total_priceVCR, total_priceRC, total_priceCD, total_priceTR;

printf("How Many TVs Were Sold? ");
scanf("%d", &TV);

printf("How Many VCRs Were Sold? ");
scanf("%d", &VCR);

printf("How Many Remote Controllers Were Sold? ");
scanf("%d", &RC);

printf("How Many CDs Were Sold? ");
scanf("%d", &CD);

printf("How Many Tape Recorders Were Sold? ");
scanf("%d", &TR);

total_priceTV = TV * 400.00;
total_priceVCR = VCR * 220.00;
total_priceRC = RC * 35.20;
total_priceCD = CD * 300.00;
total_priceTR = TR * 150.00;

sub_total = total_priceTV + total_priceVCR + total_priceRC + total_priceCD + total_priceTR;
tax = sub_total * 0.12;
total = sub_total + tax;

printf("-------------------------------------------------------------------\n");
printf("\tQTY \tDESCRIPTION \tUNIT PRICE \tTOTAL PRICE\n");
printf("\t--- \t----------- \t---------- \t-----------\n");
printf("\t%d \tTV \t\t    400.00 \t     %.2f\n", TV, total_priceTV);
printf("\t%d \tVCR \t\t    220.00 \t     %.2f\n", VCR, total_priceVCR);
printf("\t%d \tRemote Control \t     35.20 \t     %.2f\n", RC, total_priceRC);
printf("\t%d \tCD \t\t    300.00 \t     %.2f\n", CD, total_priceCD);
printf("\t%d \tTape Recorder \t    150.00 \t     %.2f\n", TR, total_priceTR);
printf("\t   \t\t              \t\t   --------\n");
printf("\t\t\t\tSUBTOTAL:\t   %.2f\n", sub_total);
printf("\t\t\t\tTAX:\t\t   %.2f\n", tax);
printf("\t\t\t\tTOTAL:\t\t   %.2f\n", total);
printf("-------------------------------------------------------------------\n");

return 0;
}
