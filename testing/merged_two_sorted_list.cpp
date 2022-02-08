//testing basics of linked list in c++
//currently failing

#include <iostream>

struct Node
{
    int data;
    Node *next;
};

Node *mergeTwoLists(Node *list1, Node *list2)
{
    if (!list1 || !list2)
    {
        return list1 ? list1 : list2;
    }
    Node *head = new Node();
    Node *tmp = head;
    while (list1->next && list2->next)
    {
        if ((list1->data) >= (list2->data))
        {
            tmp->next = list2;
            list2 = list2->next;
        }
        else
        {
            tmp->next = list1;
            list1 = list1->next;
        }
    }
    if (list1)
    {
        tmp->next = list1;
        list1 = list1->next;
    }
    else
    {
        if (list2)
        {
            tmp->next = list2;
            list2 = list2->next;
        }
    }
    return head->next;
}

void printList(Node *n)
{
    while (n != NULL)
    {
        std::cout << n->data << " ";
        n = n->next;
    }
}

int main()
{
    Node *head = NULL;
    Node *second = NULL;
    Node *third = NULL;

    // allocate 3 nodes in the heap
    head = new Node();
    second = new Node();
    third = new Node();

    head->data = 1;      // assign data in first node
    head->next = second; // Link first node with second

    second->data = 2; // assign data to second node
    second->next = third;

    third->data = 3; // assign data to third node
    third->next = NULL;

    Node *head1 = NULL;
    Node *second1 = NULL;
    Node *third1 = NULL;

    // allocate 3 nodes in the heap
    head1 = new Node();
    second1 = new Node();
    third1 = new Node();

    head1->data = 4;       // assign data in first node
    head1->next = second1; // Link first node with second

    second1->data = 5; // assign data to second node
    second1->next = third1;

    third1->data = 6; // assign data to third node
    third1->next = NULL;

    Node *results = mergeTwoLists(head, head1);
    printList(head);
    printList(head1);
    std::cout << '\n';
    printList(results);

    return 0;
}