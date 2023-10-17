// How to create and display a Singly Linked List in JavaScript.



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    add(newNode) {
        if (!this.head) {
            this.head = newNode;
        } else {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = newNode;
        }
    }

    displayList() {
        let node = this.head;
        let str = "";
        while (node) {
            str += `${node.data} -> `;
            node = node.next;
        }
        str += "NULL";
        console.log(str);
    }
}

const numList = new SinglyLinkedList();
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
numList.displayList();

