/**
 * Represents additional error options the BfError class
 */
export interface BfErrorOptions {
  code?: string;
  data?: any;
}

/**
 * Extends the Error class and adds additional parameters: date, code, data
 */
export class BfError extends Error {
  /**
   * Creation date
   */
  readonly date = new Date();

  /**
   * Unique error code
   */
  readonly code?: string;

  /**
   * Any additional data for error handling
   */
  readonly data?: any;

  constructor(massage?: string, options?: BfErrorOptions) {
    super(massage);
    this.name = 'BfError';
    this.code = options?.code;
    this.data = options?.data;
  }
}
