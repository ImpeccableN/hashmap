export function createNode(key = null, value = null, nextNode = null) {
  return { key, value, nextNode };
}