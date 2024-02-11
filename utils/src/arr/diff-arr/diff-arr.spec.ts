import {diffArr} from '../';

describe('@bitfiber/utils/arr/diffArr', () => {
  it('Equal', () => {
    expect(diffArr(['id1', 'id2', 'id3'], ['id1', 'id2', 'id3']))
      .toEqual({
        only1: [],
        only2: [],
        equal: ['id1', 'id2', 'id3'],
        isEqual: true,
      });

    expect(diffArr(['id1', 'id3', 'id2'], ['id1', 'id2', 'id3']))
      .toEqual({
        only1: [],
        only2: [],
        equal: ['id1', 'id3', 'id2'],
        isEqual: true,
      });
  });

  it('Not equal', () => {
    expect(diffArr(['id1', 'id2', 'id3'], ['id1', 'id2', 'id4']))
      .toEqual({
        only1: ['id3'],
        only2: ['id4'],
        equal: ['id1', 'id2'],
        isEqual: false,
      });
  });
});
