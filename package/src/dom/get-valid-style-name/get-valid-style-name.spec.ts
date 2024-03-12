import {getValidStyleName} from '../';

describe('@bitfiber/utils/dom/getValidStyleName', () => {
  it('Test', () => {
    expect(getValidStyleName('borderRadius')).toBe('borderRadius');
    expect(getValidStyleName('border radius')).toBe('borderRadius');
    expect(getValidStyleName('border_radius')).toBe('borderRadius');
    expect(getValidStyleName('border-radius')).toBe('borderRadius');
    expect(getValidStyleName('float')).toBe('cssFloat');
  });
});
