#include <iostream>
using namespace std;

#define MAX 5


class StackArray {
private:
    int arr[MAX];
    int top;

    int isFull();
    int isEmpty();
public:
    //constructor
    StackArray() : top(MAX) {}

    void push(int x);
    void pop();
    void topElement();
    void display();
};

int StackArray::isFull(){
    return (top==0);
}

int StackArray::isEmpty(){
    return (top==MAX);
}

void StackArray::push(int x){
    if (isFull()){
        cout<<"Stack Overflow.\n";
        system("pause");
    }
    else {
        top--;
        arr[top] = x;
        cout<<x<<" has been pushed to the stack.\n";
        system("pause");
    }
}

void StackArray::pop(){
    if (isEmpty()){
        cout<<"Stack is empty.\n";
        system("pause");
    }
    else {
        cout<<arr[top]<<" has been popped from the stack.\n";
        top++;
    }
    system("pause");
}

void StackArray::topElement(){
    if (isEmpty()){
        cout<<"Stack is empty.\n";
        system("pause");
        return;
    }
    cout<<"Top element: "<<arr[top]<<endl;
    system("pause");
}

void StackArray::display(){
    system("cls");
    if (isEmpty()){
        cout<<"Stack is empty.\n";
        system("pause");
        return;
    }
    cout<<"Stack (top to bottom):\n";
    for (int i=top; i<MAX; i++){
        cout<<arr[i]<<endl;
    }
    system("pause");
}


struct Node{
    int data;
    struct Node *next;
    Node(int x): data(x), next(NULL) {}
};

class StackLink {
private:
    Node *top;
public:
    //constructor
    StackLink() : top(NULL) {}
    //destructor
    ~StackLink(){
        Node *p;
        while (top!=NULL){
            p = top;
            top = top->next;
            delete(p);
        }
    }

    void push(int x);
    void pop();
    void topElement();
    void display();
};

void StackLink::push(int x){
    Node *newNode = new Node(x);
    newNode->next = top;
    top = newNode;
    cout<<x<<" has been pushed to the stack.\n";
    system("pause");
}

void StackLink::pop(){
    if (top==NULL){
        cout<<"Stack is empty.\n";
        system("pause");
        return;
    }
    Node *p = top;
    cout<<p->data<<" has been popped from the stack.\n";
    top = top->next;
    delete(p);
    system("pause");
}

void StackLink::topElement(){
    if (top==NULL){
        cout<<"Stack is empty.\n";
        system("pause");
        return;
    }
    cout<<"Top element: "<<top->data<<endl;
    system("pause");
}

void StackLink::display(){
    system("cls");
    if (top==NULL){
        cout<<"Stack is empty.\n";
        system("pause");
        return;
    }
    Node *p = top;
    cout<<"Stack (top to bottom):\n";
    while (p!=NULL){
        cout<<p->data<<endl;
        p=p->next;
    }
    system("pause");
}


int stackMenu();
int menu();
void runArrayStack();
void runLinkStack();

int main(){
    while (true){
        switch(stackMenu()){
        case 1: runArrayStack(); break;
        case 2: runLinkStack(); break;
        case 3: cout<<"\nThank you for using my program...\n";system("pause");exit(0);
        default: cout<<"1 to 3 only.\n";system("pause");
        }
    }
    return 0;
}

int stackMenu(){
    int op;
    system("cls");
    cout<<"STACK MENU\n";
    cout<<"1. Array Implementation\n";
    cout<<"2. Pointer Implementation\n";
    cout<<"3. Exit\n";
    cout<<"\nSelect(1-3): ";
    cin>>op;
    return op;
}

int menu(){
    int op;
    system("cls");
    cout<<"MENU\n";
    cout<<"1. Push\n";
    cout<<"2. Pop\n";
    cout<<"3. Top\n";
    cout<<"4. Display\n";
    cout<<"5. Exit\n";
    cout<<"\nSelect(1-5): ";
    cin>>op;
    return op;
}

void runArrayStack(){
    StackArray s;
    int x;
    while (true){
        switch(menu()){
        case 1: system("cls");cout<<"Push Mode\n";
                cout<<"Input Value: ";cin>>x;
                s.push(x);break;
        case 2: system("cls");cout<<"Pop Mode\n";
                s.pop();break;
        case 3: system("cls");cout<<"Top Mode\n";
                s.topElement();break;
        case 4: s.display();break;
        case 5: return;
        default: cout<<"1 to 5 only.\n";system("pause");
        }
    }
}

void runLinkStack(){
    StackLink s;
    int x;
    while (true){
        switch(menu()){
        case 1: system("cls");cout<<"Push Mode\n";
                cout<<"Input Value: ";cin>>x;
                s.push(x);break;
        case 2: system("cls");cout<<"Pop Mode\n";
                s.pop();break;
        case 3: system("cls");cout<<"Top Mode\n";
                s.topElement();break;
        case 4: s.display();break;
        case 5: return;
        default: cout<<"1 to 5 only.\n";system("pause");
        }
    }
}