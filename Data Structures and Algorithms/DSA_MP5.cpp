#include <iostream>
using namespace std;

#define MAX 5


//====================================================
//  CIRCULAR ARRAY IMPLEMENTATION OF QUEUE
//====================================================

class QueueArray {
private:
    int arr[MAX];
    int front;
    int rear;
    int count;

    int isFull();
    int isEmpty();
public:
    //constructor
    QueueArray() : front(0), rear(-1), count(0) {}

    void enqueue(int x);
    void dequeue();
    void display();
};

int QueueArray::isFull(){
    return (count==MAX);
}

int QueueArray::isEmpty(){
    return (count==0);
}

void QueueArray::enqueue(int x){
    if (isFull()){
        cout<<"Queue Overflow.\n";
        system("pause");
    }
    else {
        rear = (rear+1)%MAX;
        arr[rear] = x;
        count++;
        cout<<x<<" has been enqueued to the queue.\n";
        system("pause");
    }
}

void QueueArray::dequeue(){
    if (isEmpty()){
        cout<<"Queue is empty.\n";
        system("pause");
    }
    else {
        cout<<arr[front]<<" has been dequeued from the queue.\n";
        front = (front+1)%MAX;
        count--;
        system("pause");
    }
}

void QueueArray::display(){
    system("cls");
    if (isEmpty()){
        cout<<"Queue is empty.\n";
        system("pause");
        return;
    }
    cout<<"Queue (front to rear):\n";
    for (int i=0, idx=front; i<count; i++, idx=(idx+1)%MAX){
        cout<<arr[idx]<<endl;
    }
    system("pause");
}


//====================================================
//  LINKED LIST IMPLEMENTATION OF QUEUE
//====================================================

class QueueLink {
private:
    struct Node{
        int data;
        Node *next;
        Node(int x): data(x), next(NULL) {}
    };

    Node *front;
    Node *rear;
public:
    //constructor
    QueueLink() : front(NULL), rear(NULL) {}
    //destructor
    ~QueueLink(){
        Node *p;
        while (front!=NULL){
            p = front;
            front = front->next;
            delete(p);
        }
    }

    void enqueue(int x);
    void dequeue();
    void display();
};

void QueueLink::enqueue(int x){
    Node *newNode = new Node(x);
    if (rear==NULL){
        front = rear = newNode;
    }
    else {
        rear->next = newNode;
        rear = newNode;
    }
    cout<<x<<" has been enqueued to the queue.\n";
    system("pause");
}

void QueueLink::dequeue(){
    if (front==NULL){
        cout<<"Queue is empty.\n";
        system("pause");
        return;
    }
    Node *p = front;
    cout<<p->data<<" has been dequeued from the queue.\n";
    front = front->next;
    if (front==NULL){
        rear = NULL;
    }
    delete(p);
    system("pause");
}

void QueueLink::display(){
    system("cls");
    if (front==NULL){
        cout<<"Queue is empty.\n";
        system("pause");
        return;
    }
    Node *p = front;
    cout<<"Queue (front to rear):\n";
    while (p!=NULL){
        cout<<p->data<<endl;
        p=p->next;
    }
    system("pause");
}


//====================================================
//  MENU / DRIVER FUNCTIONS
//====================================================

int queueMenu();
int menu();
void runArrayQueue();
void runLinkQueue();

int main(){
    while (true){
        switch(queueMenu()){
        case 1: runArrayQueue(); break;
        case 2: runLinkQueue(); break;
        case 3: cout<<"\nThank you for using my program...\n";system("pause");exit(0);
        default: cout<<"1 to 3 only.\n";system("pause");
        }
    }
    return 0;
}

int queueMenu(){
    int op;
    system("cls");
    cout<<"QUEUE MENU\n";
    cout<<"1. Circular Array Implementation\n";
    cout<<"2. Pointer (Linked List) Implementation\n";
    cout<<"3. Exit\n";
    cout<<"\nSelect(1-3): ";
    cin>>op;
    return op;
}

int menu(){
    int op;
    system("cls");
    cout<<"MENU\n";
    cout<<"1. Enqueue\n";
    cout<<"2. Dequeue\n";
    cout<<"3. Display\n";
    cout<<"4. Exit\n";
    cout<<"\nSelect(1-4): ";
    cin>>op;
    return op;
}

void runArrayQueue(){
    QueueArray q;
    int x;
    while (true){
        switch(menu()){
        case 1: system("cls");cout<<"Enqueue Mode\n";
                cout<<"Input Value: ";cin>>x;
                q.enqueue(x);break;
        case 2: system("cls");cout<<"Dequeue Mode\n";
                q.dequeue();break;
        case 3: q.display();break;
        case 4: return;
        default: cout<<"1 to 4 only.\n";system("pause");
        }
    }
}

void runLinkQueue(){
    QueueLink q;
    int x;
    while (true){
        switch(menu()){
        case 1: system("cls");cout<<"Enqueue Mode\n";
                cout<<"Input Value: ";cin>>x;
                q.enqueue(x);break;
        case 2: system("cls");cout<<"Dequeue Mode\n";
                q.dequeue();break;
        case 3: q.display();break;
        case 4: return;
        default: cout<<"1 to 4 only.\n";system("pause");
        }
    }
}