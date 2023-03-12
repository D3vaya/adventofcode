import { BoxNode } from "./stack";

export class BoxQueue {
  length: number = 0;
  first: BoxNode | null;
  last?: BoxNode | null;

  constructor(initValues?: string[]) {
    this.first = null;
    this.last = null;
    if (initValues) {
      initValues?.map((v) => this.enQueue(v));
    }
  }

  peak() {
    return this.first;
  }

  enQueue(value: string) {
    const newNode = new BoxNode(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    if (this.length === 1) {
      const pointer = this.first;
      
      // this.first = newNode;
      // this.last = pointer
      //this.last = newNode;
      //console.log('[LOG] 🚧 ', value)
      //this.first = newNode;
      // this.last = this.last;
    }
    if (this.length >= 1) {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  deQueue() {
    if(this.length === 0) {
      console.error('El Queue está vacío, no hay elementos para eliminar');
    } else if(this.length === 1) {
      const deleteNode = this.first;
      this.first = deleteNode!.next;
      this.last = null;
      this.length--;
    } else {
      const deleteNode = this.first;
      this.first = deleteNode!.next;
      //this.last = null;
      this.length--;
    }
    return this;
  }

  remove() {
    if (this.length > 0) {
      this.last = this.last?.next!;
      this.length--;
    }
    return this;
  }

  push(value: string) {
    const newBox = new BoxNode(value);
    if (this.length === 0) {
      this.first = newBox;
      this.last = newBox;
    } else {
      const pointer = this.first;
      this.first = newBox;
      this.first.next = pointer;
    }
    this.length++;

    return this;
  }
}
