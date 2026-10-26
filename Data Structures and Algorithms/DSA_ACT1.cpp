#include <iostream>
#include <string.h>
#include <fstream>
#include <sstream>
#include <limits>
using namespace std;

#define MAX 3

struct Student
{
    string Name;
    float Grade;
};

class Record
{
private:
    Student student[MAX];
    int last = -1;

    bool isfull();
    bool isempty();

public:
    void addstude(Student x);
    void display();
    void save();
    void load();
    void Delete(string name);
    void Locate(string name);
};


string trim(string str)
{
    size_t start = str.find_first_not_of(" \t\r\n");
    size_t end = str.find_last_not_of(" \t\r\n");

    if (start == string::npos)
        return "";

    return str.substr(start, end - start + 1);
}

bool Record::isfull()
{
    return last == MAX - 1;
}

bool Record::isempty()
{
    return last == -1;
}

void Record::Locate(string name)
{
    if (isempty())
    {
        cout << "Student list is empty" << endl;
        return;
    }

    name = trim(name);

    for (int i = 0; i <= last; i++)
    {
        if (trim(student[i].Name) == name)
        {
            cout << "\nStudent found!" << endl;
            cout << "Name: " << student[i].Name << endl;
            cout << "Grade: " << student[i].Grade << endl;
            cout << "Status: "
                 << (student[i].Grade >= 75 ? "PASSED" : "FAILED")
                 << endl;

            return;
        }
    }

    cout << "Student \"" << name << "\" not found." << endl;
}

void Record::Delete(string name)
{
    if (isempty())
    {
        cout << "Student list is empty" << endl;
        return;
    }

    name = trim(name);

    int index = -1;

    // Find the student
    for (int i = 0; i <= last; i++)
    {
        if (trim(student[i].Name) == name)
        {
            index = i;
            break;
        }
    }

    // Student was not found
    if (index == -1)
    {
        cout << "Student \"" << name << "\" not found." << endl;
        return;
    }

    // Shift the students after the deleted student
    // one position to the left
    for (int i = index; i < last; i++)
    {
        student[i] = student[i + 1];
    }

    last--;

    cout << "Student \"" << name << "\" deleted." << endl;
}

void Record::addstude(Student x)
{
    if (isfull())
    {
        cout << "Student list is full" << endl;
        return;
    }

    last++;
    student[last] = x;

    cout << "Student added successfully!" << endl;
}

void Record::display()
{
    cout << "\nSTUDENT RECORD\n" << endl;

    if (isempty())
    {
        cout << "Student list is empty." << endl;
        return;
    }

    for (int i = 0; i <= last; i++)
    {
        cout << "Name: " << student[i].Name << endl;
        cout << "Grade: " << student[i].Grade << endl;
        cout << "Status: "
             << (student[i].Grade >= 75 ? "PASSED" : "FAILED")
             << endl;
        cout << endl;
    }
}

void Record::save()
{
    ofstream fp("students.csv");

    if (!fp)
    {
        cout << "Error opening file!" << endl;
        return;
    }

    fp << "Name,Grade,Status" << endl;

    for (int i = 0; i <= last; i++)
    {
        fp << student[i].Name << ","
           << student[i].Grade << ","
           << (student[i].Grade >= 75 ? "PASSED" : "FAILED")
           << endl;
    }

    fp.close();

    cout << "Records saved to students.csv" << endl;
}

void Record::load()
{
    ifstream fp("students.csv");

    if (!fp)
    {
        cout << "Error opening file!" << endl;
        return;
    }

    string line;

    // Skip the header
    getline(fp, line);

    // Clear the current records
    last = -1;

    while (getline(fp, line) && !isfull())
    {
        stringstream ss(line);

        string name;
        string grade;
        string status;

        // Get Name
        getline(ss, name, ',');

        // Get Grade
        getline(ss, grade, ',');

        // Get Status
        getline(ss, status);

        // Ignore empty lines
        if (name.empty() || grade.empty())
        {
            continue;
        }

        last++;

        student[last].Name = trim(name);
        student[last].Grade = stof(grade);
    }

    fp.close();

    cout << "Records loaded from students.csv" << endl;
}

int main()
{
    Record r;
    Student s;
    int choice;

    do
    {
        cout << "\n___MENU___\n";
        cout << "1. Add Student\n";
        cout << "2. Display Record\n";
        cout << "3. Save to CSV\n";
        cout << "4. Load from CSV\n";
        cout << "5. Delete Student\n";
        cout << "6. Locate Student\n";
        cout << "7. Exit\n";

        cout << "Enter choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            cout << "Input name: ";

            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            getline(cin, s.Name);

            cout << "Input grade: ";
            cin >> s.Grade;

            r.addstude(s);
            break;

        case 2:
            r.display();
            break;

        case 3:
            r.save();
            break;

        case 4:
            r.load();
            break;

        case 5:
        {
            string delName;

            cout << "Enter name to delete: ";

            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            getline(cin, delName);

            r.Delete(delName);
            break;
        }

        case 6:
        {
            string locName;

            cout << "Enter name to locate: ";

            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            getline(cin, locName);

            r.Locate(locName);
            break;
        }

        case 7:
            cout << "Exiting program..." << endl;
            break;

        default:
            cout << "Invalid input!" << endl;
        }

    } while (choice != 7);

    return 0;
}