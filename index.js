// Doubly linked list
class DoublyLinkedList {
  constructor(value) {
    // Inicializa a lista já com um valor
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
}

let myLinkedList = new DoublyLinkedList(10);
