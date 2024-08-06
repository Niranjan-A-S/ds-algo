// //LIFO

// class Stack {
//     constructor() {
//         this.items = [];
//         this.size = 0;
//     }

//     push(value) {
//         this.items.unshift({ value, index: this.size + 1 });
//         this.size++;
//         return this;
//     }

//     pop() {
//         const item = this.items.shift();
//         this.size--;
//         return item?.value;
//     }
//     find(index) {
//         return this.items.find((item) => index === item.index).value
//     }

//     display() {
//         for (const { index, value } of this.items) {
//             console.log(`${index}: ${value}`);
//         }
//     }
// }

// const stack = new Stack();
// // console.log(stack.pop());
// stack.push('First').push('Second');
// stack.display();

//Other implementation

class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    //Add element to stack
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count} position`)
        this.count++;
    }

    //Return and Remove element from stack
    //Return undefined if stack is empty

    pop() {
        if (this.count) {
            const element = this.items[this.count - 1];
            this.items.splice(this.count - 1);
            this.count--;
            console.log(`${element} removed from top`)
            return element;
        }
    }

    peek() {
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    clear() {
        this.items = [];
        this.count = 0;
    }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
stack.pop();

console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack)

