import {getDocument, getNonStaticParent, hasName} from '../';

describe('@bitfiber/utils/dom/getNonStaticParent', () => {
  it('Returns body if it has no a non-static parent', () => {
    const doc = getDocument();
    const div = doc.createElement('div');
    const element = getNonStaticParent(div);
    expect(hasName(element, 'body')).toBeTruthy();
  });
});
