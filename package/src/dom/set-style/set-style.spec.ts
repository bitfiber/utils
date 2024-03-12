import {getStyle, setStyle} from '../';

describe('@bitfiber/utils/dom/setStyle', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div style="color: red; font-size: 16px;">
        <p id="testElement" style="width: 100px; height: 5px;">Hello, world!</p>
      </div>
    `;
  });

  test('Sets a new style value for an element', () => {
    const element = <HTMLElement>document.getElementById('testElement');
    const prevStyle = setStyle(element, 'width', '200px');
    const style = getStyle(element, 'width');
    expect(prevStyle).toBe('100px');
    expect(style).toBe('200px');
  });
});
