/**
 * @jest-environment jsdom
 */

import {getAllStyles} from '../';

describe('@bitfiber/utils/dom/getAllStyles', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div style="color: red; font-size: 16px;">
        <p id="testElement" style="width: 100px; height: 5px;">Hello, world!</p>
      </div>
    `;
  });

  test('Returns an object with computed styles for an element', () => {
    const element = <HTMLElement>document.getElementById('testElement');
    const styles = getAllStyles(element);
    expect(styles).toBeDefined();
    expect(typeof styles).toBe('object');
    expect(styles.display).toBe('block');
    expect(styles.visibility).toBe('visible');
    expect(styles.width).toBe('100px');
    expect(styles.height).toBe('5px');
  });

  test('Returns an empty object for an element with no styles', () => {
    const element = document.createElement('div');
    const styles = getAllStyles(element);
    expect(styles).toBeDefined();
    expect(typeof styles).toBe('object');
    expect(styles.display).toBe('block');
    expect(styles.visibility).toBe('visible');
  });
});
