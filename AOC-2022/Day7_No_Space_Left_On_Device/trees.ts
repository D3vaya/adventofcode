/**
 *      10
 *     /  \
 *   4     20
 *  / \   /  \
 * 2   8 17  170
 */

export class ThreeNode {
  value: number;
  left: ThreeNode | null;
  right: ThreeNode | null;

  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

export class Tree {
  root: ThreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new ThreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  search(value: number, tree = this.root): ThreeNode | void {
    if (!this.root) return console.error("The Binary Search Tree is empty");
    if (!tree) return console.error("The node is not in the tree");

    if (value < tree.value) {
      return this.search(value, tree.left);
    } else if (value > tree.value) {
      return this.search(value, tree.right);
    } else {
      console.log("The value has been finded in the Tree");
      return tree;
    }
  }
  
}
