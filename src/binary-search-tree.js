const { NotImplementedError } = require('../extensions/index.js');
const {Node} = require("../extensions/list-tree");

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }

  add(data) {
    this.rootElement = addElement(this.rootElement, data);

    function addElement(node, value) {
      if (node === null) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addElement(node.left, value);
      }
      if (value > node.data) {
          node.right = addElement(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    return searchElement(this.rootElement, data);

    function searchElement(node, value) {
      if (node === null) {
        return false;
      }

      if (value < node.data) {
        return searchElement(node.left, value);
      }

      if (value > node.data) {
        return searchElement(node.right, value);
      }

      return true;
    }
  }

  find(data) {
    return searchNode(this.rootElement, data);

    function searchNode(node, value) {
      if (node === null) {
        return null;
      }

      if (value < node.data) {
        return searchNode(node.left, value);
      }

      if (value > node.data) {
        return searchNode(node.right, value);
      }

      return node;
    }
  }

  remove(data) {
    this.rootElement = removeElement(this.rootElement, data);

    function removeElement(node, value) {
      if (node === null) {
        return null;
      }

      if (value < node.data) {
        node.left = removeElement(node.left, value);
        return node;
      }
      if (value > node.data) {
        node.right = removeElement(node.right, value);
        return node;
      }

      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      let minFromRight = node.right;
      while(minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;
      node.right = removeElement(node.right, minFromRight.data);

      return node;
    }
  }



  min() {
    if (this.rootElement === null) {
      return;
    }
    let node = this.rootElement;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (this.rootElement === null) {
      return;
    }
    let node = this.rootElement;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};