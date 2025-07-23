import { createNode } from "./node.js"

export function createLinkedList() {
  let headNode = null;
  let tailNode = null;

  const append = (value) => {
    const newNode = createNode(value);
    if (headNode === null) {
      headNode = newNode;
      tailNode = newNode;
    } else {
      tail().nextNode = newNode;
      tailNode = newNode;
    }
  };

  const prepend = (value) => {
    const newNode = createNode(value);
    if (headNode !== null) {
      newNode.nextNode = headNode;
      headNode = newNode;
    }
  };

  const size = (crtNode = headNode, i = 0) => {
    if (crtNode === null) {
      return i;
    } else {
      return size(crtNode.nextNode, i + 1);
    }
  };

  const head = () => headNode;

  const tail = () => tailNode;

  const at = (index, crtNode = headNode) => {
    if (crtNode === null) {
      return null;
    } else if (index === 0) {
      return crtNode;
    } else {
      return at(index - 1, crtNode.nextNode);
    }
  };

  const pop = (crtNode = headNode) => {
    if (crtNode === null) {
      return null;
    } else if (crtNode.nextNode === tailNode) {
      crtNode.nextNode = null;
      tailNode = crtNode;
    } else {
      pop(crtNode.nextNode);
    }
  };

  const contains = (value, crtNode = headNode) => {
    if (crtNode.value === value) return true;
    else if (crtNode === tailNode && crtNode.value !== value) return false;
    else {
      return contains(value, crtNode.nextNode);
    }
  };

  const find = (value, index = 0, crtNode = headNode) => {
    if (crtNode.value === value) return index;
    else if (crtNode === tailNode && crtNode.value !== value) return null;
    else {
      return find(value, index + 1, crtNode.nextNode);
    }
  };

  const toString = (crtNode = headNode, string = "") => {
    if (crtNode === null) {
      return string + "null";
    } else {
      const tempString = string + "( " + crtNode.value + " ) - > ";
      return toString(crtNode.nextNode, tempString);
    }
  };

  const insertAt = (value, index, crtNode = headNode) => {
    if (index === 0 && headNode === null) {
      let newNode = createNode(value);
      headNode = newNode;
    } else if (index === 0) {
      let newNode = createNode(value, headNode);
      headNode = newNode;
    } else if (at(index - 1) === null) {
      return;
    } else if (at(index - 1).nextNode === null) {
      let newNode = createNode(value);
      at(index - 1).nextNode = newNode;
    } else {
      let newNode = createNode(value, at(index));
      at(index - 1).nextNode = newNode;
    }
  };


  return {
    head,
    append,
    prepend,
    size,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt
  };
}

