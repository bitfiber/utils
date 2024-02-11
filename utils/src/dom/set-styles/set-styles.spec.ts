/**
 * @jest-environment jsdom
 */

import {getStyles, setStyles} from '../';

describe('@bitfiber/utils/dom/setStyles', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div style="color: red; font-size: 16px;">
        <p id="testElement" style="width: 100px; height: 5px;">Hello, world!</p>
      </div>
    `;
  });

  test('Sets a new styles for an element', () => {
    const element = <HTMLElement>document.getElementById('testElement');
    const prevStyles = setStyles(element, {
      width: '200px',
      height: '10px',
    });
    const styles = getStyles(element, 'width', 'height');
    expect(prevStyles)
      .toEqual({
        width: '100px',
        height: '5px',
      });
    expect(styles)
      .toEqual({
        width: '200px',
        height: '10px',
      });
  });
});
