import {random} from '../random/random';

/*
 * Counter for the getUniqueStrId function
 */
let counter = 0;

/*
 * Salt for the getUniqueStrId function
 */
const salt = random(7);

/**
 * Returns a unique string identifier for the current session
 */
export function getUniqueStrId(): string {
  return `${salt}${++counter}`;
}
