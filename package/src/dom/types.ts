/**
 * Represents an object with two properties top and left
 */
export interface TopLeft {
  top: number;
  left: number;
}

/**
 * Represents the response type for the following functions:
 * getOffsetFromWin, getOffsetFromDoc and getOffsetFromParent
 */
export interface Offset {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}
