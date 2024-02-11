/**
 * Determines if the given node represents a comment
 * @param value - any value
 */
export function isComment(value: any): value is Comment {
  return value instanceof Comment;
}
