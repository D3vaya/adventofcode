export class BoxNode {
  value: string;
  next: BoxNode | null;

  constructor(value: string) {
    this.value = value;
    this.next = null; // puntero al siguiente nodo
  }
}

export class BoxStack {
  length: number; // longitud de pila
  top: BoxNode | null; // nodo que se encuentra arriba
  bottom: BoxNode | null; // nodo que se encuentra abajo

  constructor(initValues: string[] | null) {
    this.length = 0;
    this.top = null;
    this.bottom = null;
    if (initValues) {
      initValues?.map((v) => this.push(v));
    }
  }

  peak() {
    return this.top;
  }

  push(value: string) {
    const newBox = new BoxNode(value);
    if (this.length === 0) {
      this.top = newBox;
      this.bottom = newBox;
    } else {
      const pointer = this.top;
      this.top = newBox;
      this.top.next = pointer;
    }
    this.length++;

    return this;
  }

  remove() {
    if (this.length > 0) {
      this.top = this.top?.next!;
      this.length--;
    }
    return this;
  }

}
