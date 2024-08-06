// //!Queue
// // The queue data structure is a linear data structure that follows a particular order in which the operations are performed. The order is First In First Out (FIFO).


// //*Use Cases
// /**
//  * Printers
//  * CPU task scheduling
//  * Callback queue in JS runtime
//  */

// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     //add an element to the queue
//     enqueue(element) {
//         this.items.push(element);
//     }

//     //remove an element from the queue
//     dequeue() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         this.count--;
//         return this.items.shift();
//     }

//     //check if the queue is empty
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     //return the first item in the queue
//     peek() {
//         return this.isEmpty() ? null : this.items[0];
//     }

//     print() {
//         console.log(this.items.toString());
//     }
// }

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(30);
// queue.enqueue(20);
// queue.dequeue();
// console.log(queue.peek());
// queue.print();

//More optimized implementation

class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;//This is the last  item pointer
        this.front = 0;//This is the first item
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.peek());
console.log(queue.size());
queue.isEmpty();
queue.print();
queue.dequeue();
console.log(queue.peek());
console.log(queue.size());
queue.print();


//Circular Queue
// The size of the queue is fixed. A single block of memory is used as if the first element is connected to the last element

//Circular Queue Usage
/**
 * Clock
 * Streaming Data
 * Traffic Lights
 */

function* test() {
}