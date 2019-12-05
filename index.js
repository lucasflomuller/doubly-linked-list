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
  // Adiciona valor no inicia da lista
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    newNode.next = this.head;
    this.head.prev = newNode
    this.head = newNode;
    this.length++;
    return this;
  }
  // Retorna a lista em um array
  toArray() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  // Inserir em determinado local na lista
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null
    }

    // Salva o valor do index e o seguinte
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;

    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;

    this.length++;
    console.log(this)
    return this.toArray();
  }
  // Caminha até o index desejado
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new DoublyLinkedList(10);

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
