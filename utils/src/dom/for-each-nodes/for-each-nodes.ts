import {INTERRUPT} from '../../';

/**
 * Iterates through all child nodes of the parent node to the full depth of the tree and calls a handler for each node.
 * If the handler returns INTERRUPT, the loop will be interrupted
 * @param parent - a parent node
 * @param handler - function called for each node (Text, Comment, Element)
 */
export function forEachNodes(parent: Node, handler: (child: Node, index: number, parent: Node) => any): void {
  parent.childNodes.forEach((child, i) => {
    if (handler(child, i, parent) !== INTERRUPT) {
      forEachNodes(child, handler);
    }
  });
}
