#include <iostream>
#include <iomanip>
using namespace std;

string name[100];
int age[100], q1[100], q2[100], q3[100];
int count = 0;

// SHOW
void show() {
    if (count == 0) {
        cout << "No records.\n";
        return;
    }

    for (int i = 0; i < count; i++) {
        float ave = (q1[i] + q2[i] + q3[i]) / 3.0;
        cout << i + 1 << ". " << name[i]
             << " | Ave: " << fixed << setprecision(2) << ave
             << " | " << (ave >= 75 ? "PASSED" : "FAILED") << endl;
    }
}

// ADD
void add() {
    if (count >= 100) {
        cout << "List full!\n";
        return;
    }

    cin.ignore();
    cout << "Enter Name: ";
    getline(cin, name[count]);

    cout << "Enter Age: ";
    cin >> age[count];

    cout << "Enter Quiz 1: ";
    cin >> q1[count];

    cout << "Enter Quiz 2: ";
    cin >> q2[count];

    cout << "Enter Quiz 3: ";
    cin >> q3[count];

    count++;
    cout << "Added successfully!\n";
}

// DELETE
void removeStudent() {
    if (count == 0) {
        cout << "Nothing to delete.\n";
        return;
    }

    int num;
    show();
    cout << "Enter number to delete: ";
    cin >> num;

    if (num < 1 || num > count) {
        cout << "Invalid choice.\n";
        return;
    }

    for (int i = num - 1; i < count - 1; i++) {
        name[i] = name[i + 1];
        age[i] = age[i + 1];
        q1[i] = q1[i + 1];
        q2[i] = q2[i + 1];
        q3[i] = q3[i + 1];
    }

    count--;
    cout << "Deleted successfully!\n";
}

// UPDATE
void update() {
    if (count == 0) {
        cout << "No records to update.\n";
        return;
    }

    int num;
    show();
    cout << "Enter number to update: ";
    cin >> num;

    if (num < 1 || num > count) {
        cout << "Invalid choice.\n";
        return;
    }

    int i = num - 1;

    cout << "Updating " << name[i] << endl;

    cout << "Enter new Quiz 1: ";
    cin >> q1[i];

    cout << "Enter new Quiz 2: ";
    cin >> q2[i];

    cout << "Enter new Quiz 3: ";
    cin >> q3[i];

    cout << "Updated successfully!\n";
}

// MAIN MENU
int main() {
    int choice;

    do {
        cout << "\n==MENU==\n";
        cout << "1. Add\n2. Display\n3. Delete\n4. Update\n5. Exit\n";
        cout << "Enter choice: ";
        cin >> choice;

        switch (choice) {
            case 1: add(); break;
            case 2: show(); break;
            case 3: removeStudent(); break;
            case 4: update(); break;
            case 5: cout << "Goodbye!\n"; break;
            default: cout << "Invalid choice.\n";
        }

    } while (choice != 5);

    return 0;
}
