import {getHtml, hasName} from '../';

describe('@bitfiber/utils/dom/getHtml', () => {
  it('Has a tag name html', () => {
    const html = getHtml();
    expect(hasName(html, 'html')).toBeTruthy();
  });
});
