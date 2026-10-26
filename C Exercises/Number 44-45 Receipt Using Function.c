#include <stdio.h>

#define LABOR_RATE 0.35
#define TAX_RATE 0.085

// Function prototypes
void getInput(int *len, int *wid, int *disc, float *pricePerSqFt);
void computeInstallCost(int len, int wid, float pricePerSqFt,
                        int *sqFt, float *matCost, float *workCost, float *installCost);
void computeSubtotal(float installCost, int disc, float *discAmt, float *subTotal);
void computeFinalTotal(float subTotal, float *salesTax, float *grandTotal);
void displayMeasurements(int len, int wid, int sqFt);
void displayCharges(float pricePerSqFt, float matCost, float workCost, float installCost,
                    int disc, float discAmt, float subTotal, float salesTax, float grandTotal);

int main() {
    int len, wid, disc, sqFt;
    float pricePerSqFt, matCost, workCost, installCost;
    float discAmt, subTotal, salesTax, grandTotal;

    // Step a: Read input data
    getInput(&len, &wid, &disc, &pricePerSqFt);

    // Step b: Perform calculations
    computeInstallCost(len, wid, pricePerSqFt, &sqFt, &matCost, &workCost, &installCost);
    computeSubtotal(installCost, disc, &discAmt, &subTotal);
    computeFinalTotal(subTotal, &salesTax, &grandTotal);

    // Step c: Display results
    displayMeasurements(len, wid, sqFt);
    displayCharges(pricePerSqFt, matCost, workCost, installCost, disc, discAmt, subTotal, salesTax, grandTotal);

    return 0;
}

// ---------------- Function Definitions ----------------

// Reads the room dimensions, discount, and price
void getInput(int *len, int *wid, int *disc, float *pricePerSqFt) {
    printf("Length of room (feet)? ");
    scanf("%d", len);
    printf("Width of room (feet)? ");
    scanf("%d", wid);
    printf("Customer discount (percent)? ");
    scanf("%d", disc);
    printf("Cost per square foot (xxx.xx)? ");
    scanf("%f", pricePerSqFt);
}

// Computes total area, material cost, labor cost, and installation cost
void computeInstallCost(int len, int wid, float pricePerSqFt,
                        int *sqFt, float *matCost, float *workCost, float *installCost) {
    *sqFt = len * wid;
    *matCost = *sqFt * pricePerSqFt;
    *workCost = *sqFt * LABOR_RATE;
    *installCost = *matCost + *workCost;
}

// Computes discount and subtotal
void computeSubtotal(float installCost, int disc, float *discAmt, float *subTotal) {
    *discAmt = installCost * disc / 100.0;
    *subTotal = installCost - *discAmt;
}

// Computes tax and total
void computeFinalTotal(float subTotal, float *salesTax, float *grandTotal) {
    *salesTax = subTotal * TAX_RATE;
    *grandTotal = subTotal + *salesTax;
}

// Prints the measurement section
void displayMeasurements(int len, int wid, int sqFt) {
    printf("\n\n\t\tMEASUREMENT\n");
    printf("Length\t\t\t\t%4d ft\n", len);
    printf("Width\t\t\t\t%4d ft\n", wid);
    printf("Area\t\t\t\t%4d square ft\n", sqFt);
}

// Prints the billing details
void displayCharges(float pricePerSqFt, float matCost, float workCost, float installCost,
                    int disc, float discAmt, float subTotal, float salesTax, float grandTotal) {
    printf("\n\n\t\t  CHARGES\n\n");

    printf("DESCRIPTION\tCOST/SQ.FT.\tCHARGE\n");
    printf("-----------\t-----------\t-----------\n");
    printf("Carpet\t\t$%7.2f\t$%9.2f\n", pricePerSqFt, matCost);
    printf("Labor\t\t$%7.2f\t$%9.2f\n", LABOR_RATE, workCost);
    printf("\t\t\t\t-----------\n");
    printf("INSTALLED PRICE\t\t\t$%9.2f\n", installCost);
    printf("Discount\t     %2d%%\t$%9.2f\n", disc, discAmt);
    printf("\t\t\t\t-----------\n");
    printf("SUBTOTAL\t\t\t$%9.2f\n", subTotal);
    printf("Tax\t\t\t\t$%9.2f\n", salesTax);
    printf("TOTAL\t\t\t\t$%9.2f\n", grandTotal);

}
