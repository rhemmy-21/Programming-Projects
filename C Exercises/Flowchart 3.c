#include <stdio.h>

int main() {
    float annualFee;
    int monthsLeft;
    float monthlyFee;
    float discountPerMonth;
    float totalRefund;

    // Input
    printf("Enter annual subscript1ion fee: ");
    scanf("%f", &annualFee);

    printf("Enter number of months remaining: ");
    scanf("%d", &monthsLeft);

    // Compute original monthly fee
    monthlyFee = annualFee / 12;

    // 5% reduction per month
    discountPerMonth = monthlyFee * 0.05;

    // Total refund
    totalRefund = discountPerMonth * monthsLeft;

    // Output
    printf("\nMonthly Fee: %.2f", monthlyFee);
    printf("\nDiscount per Month: %.2f", discountPerMonth);
    printf("\nTotal Refund: %.2f\n", totalRefund);

    return 0;
}
