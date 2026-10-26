#include <windows.h>
#define NOMINMAX
#undef right
#undef left
#undef top
#undef bottom
#include <graphics.h>
#include <conio.h>

int main() {
    int gd = DETECT, gm;
    initgraph(&gd, &gm, "");

    rectangle(100, 100, 300, 200);
    getch();

    closegraph();
    return 0;
}
