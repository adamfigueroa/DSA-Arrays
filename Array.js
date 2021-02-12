const Memory = require('./memory');
let memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.settings(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

// Question 2
// function main(){

//     Array.SIZE_RATIO = 3;

//     // Create an instance of the Array class
//     let arr = new Array();

//     // Add an item to the array
//     arr.push(3);

//     console.log(arr);
// }

// What is the length, capacity and memory address of your array?

// Length is 1, Capacity is 3 and the memory address is 0

// Add the following in the main function and then print the array:

//     ...
//     arr.push(5);
//     arr.push(15);
//     arr.push(19);
//     arr.push(45);
//     arr.push(10);

// What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.

// Length is 6, Capacity is 12, pointer is 3

// ---------------------------------------------------------------------
// Question 3
// Exploring the pop() method
// Add the following in the main function and then print the array:

//   ...
//   arr.pop();
//   arr.pop();
//   arr.pop();

// What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.

// Length is 3 after 3 addresses being removed, Capacity stays at 12, pointer stays at 3

// ----------------------------------------------------------------------

// Question 4
// Understanding more about how arrays work
// Print the 1st item in the array arr.

// Empty the array and add just 1 item: arr.push("tauhida");

// Print this 1 item that you just added. What is the result? Can you explain your result?
// my result is NaN, this is because the array is only supposed to store float values.

// What is the purpose of the _resize() function in your Array class?

// the purpose of _resize is to allocate enough memory for the array

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);

  console.log(arr);
  console.log(arr.get(0));
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  console.log(arr);
  console.log(arr.get(0));

  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  console.log(arr.get(0));

  for (let i = arr.length - 1; i >= 0; i--) {
    arr.remove(i);
  }
  arr.push('tauhida');
  console.log(arr.get(0));
}
main();
