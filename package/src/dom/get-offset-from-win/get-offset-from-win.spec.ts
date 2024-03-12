import {getDocument, getOffsetFromWin} from '../';

describe('@bitfiber/utils/dom/getOffsetFromWin', () => {
  it('Test', () => {
    const doc = getDocument();
    const div = doc.createElement('div');
    expect(getOffsetFromWin(div)).toEqual({
      top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0, x: 0, y: 0,
    });
  });
});
