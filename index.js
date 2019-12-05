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
  // Adicionar valor ao fim da lista
  append(value) {
    // Cria novo elemento (nó)
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    console.log(newNode)
    newNode.prev = this.tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

let myLinkedList = new DoublyLinkedList(10);
