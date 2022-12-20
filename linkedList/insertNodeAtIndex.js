// Inserting and removing
// Inserting and removing items from linked lists is made easier by all the previous methods we’ve just written. We’ll need to follow these steps:

// Check if the index exists in the linked list (return false if not).
// If removing/adding at the beginning or end of the list, use the already written methods (no more worrying about the tail/head!).
// Get the nodes before and after the inserted/removed node and assign their pointers properly.



class node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

// let list=new node(5)

// list.next=new node(6)

// list.next.next=new node(8)

// console.log(list)

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newely = new node(val)
        if (!this.head) {
            this.head = newely
            this.tail = newely
        }
        else {
            this.tail.next = newely
            this.tail = newely
        }
        this.length++;
    }
    traverse() {
        let cur = this.head
        while (cur) {
            console.log(cur.val)
            cur = cur.next
        }
    }
    pop() {
        let cur = this.head

        if (this.length == 1) {
            this.head = null
            this.tail = null
            this.length--;
            return cur.val

        }
        while (cur.next.next != null) {
            cur = cur.next
        }
        let out = cur.next
        cur.next = null
        this.tail = cur
        this.length--;
        return out.val
    }
    unshift(val) {
        if (!val) return;
        let newely = new node(val)
        if (this.head == null) {
            this.head = newely
            this.tail = newely
        }
        else {

            newely.next = this.head
            this.head = newely

        }
        this.length++
    }

    shift() {
        if (this.length == 0) return undefined
        if (this.head !== null && this.length > 1) {
            let cur = this.head
            this.head = cur.next
            this.length--
            return cur.val
        }
        else {
            let cur = this.head
            this.head = null
            this.tail = null
            this.length = 0
            return cur.val
        }
    }
    getNodeAtIndex(index) {
        if (index >= this.length || index < 0) return null
        let currentVal = this.head
        let currentIndex = 0
        while (currentIndex != index) {
            currentVal = currentVal.next
            currentIndex++
        }
        return currentVal
    }

    insert(val, index) {
        if (index == 0) return this.unshift(val)
        if (index == this.length-1) return this.push(val)


        if (index >= this.length || index < 0) return null
        let newNode = new node(val)
        let after = this.getNodeAtIndex(index)
        let before = this.getNodeAtIndex(index - 1)
        newNode.next = after
        before.next = newNode
        this.length++
        return this
    }
    remove(index) {
        if (index == undefined) return null
        else if (index == 0) this.shift()
        else if (index == this.length-1) this.pop()


        else if (index >= this.length || index < 0) return null
        else {
            let after = this.getNodeAtIndex(index + 1)
            let before = this.getNodeAtIndex(index - 1)

            before.next = after
            this.length--
        }


    }
}


var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")
// list.push("Ashish")
// list.push("Tripathi")
// list.traverse()
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())

list.unshift("hii")
list.unshift("hii2")
list.unshift("hii3")
list.unshift("hii4")
list.unshift("hii5")
// list.traverse()

// console.log(" "+list.shift())
// console.log(" "+list.shift())
// console.log(" "+list.shift())
// console.log(" "+list.shift())
// console.log(" "+list.shift())
// console.log(" "+list.shift())

// console.log(list.insert(5, 5))
list.remove(5)
list.traverse()
console.log(list)
