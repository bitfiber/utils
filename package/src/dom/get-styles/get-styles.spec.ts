import {getStyles} from '../';

describe('@bitfiber/utils/dom/getStyles', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div style="color: red; font-size: 16px;">
        <p id="testElement" style="width: 100px; height: 5px;">Hello, world!</p>
      </div>
    `;
  });

  test('Returns certain computed styles for an element', () => {
    const element = <HTMLElement>document.getElementById('testElement');
    const styles = getStyles(element, 'width', 'height');
    expect(styles)
      .toEqual({
        width: '100px', height: '5px',
      });
  });

  test('Returns an object with empty styles for an element with no styles', () => {
    const element = document.createElement('div');
    const styles = getStyles(element, 'width');
    expect(styles).toEqual({width: ''});
  });
});
