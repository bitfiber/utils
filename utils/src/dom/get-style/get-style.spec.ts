/**
 * @jest-environment jsdom
 */

import {getStyle} from '../';

describe('@bitfiber/utils/dom/getStyle', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div style="color: red; font-size: 16px;">
        <p id="testElement" style="width: 100px; height: 5px;">Hello, world!</p>
      </div>
    `;
  });

  test('Returns an computed style for an element', () => {
    const element = <HTMLElement>document.getElementById('testElement');
    const style = getStyle(element, 'width');
    expect(style).toBe('100px');
  });

  test('Returns an empty string for an element with no style', () => {
    const element = document.createElement('div');
    const style = getStyle(element, 'width');
    expect(style).toBe('');
  });
});
