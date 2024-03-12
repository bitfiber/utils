import {getWindow} from '../';

describe('@bitfiber/utils/dom/getWindow', () => {
  it('Returns the global window object in a browser environment', () => {
    const win = getWindow();
    expect(win.window === win).toBe(true);
  });
});
