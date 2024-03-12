import {getDocument} from '../';

describe('@bitfiber/utils/dom/getDocument', () => {
  it('Returns the global document object in a browser environment', () => {
    const doc = getDocument();

    // @ts-ignore
    expect(doc.defaultView.window === doc.defaultView).toBe(true);
  });
});
