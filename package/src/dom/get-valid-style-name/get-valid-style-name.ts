import {BfError, Index} from '../../common';
import {withCapital, toCamelCase} from '../../str';
import {getDocument} from '../';

let defaultStyles: CSSStyleDeclaration;
const vendorPrefixes = ['Webkit', 'Moz'];
const validStyleNames: Index<string> = {float: 'cssFloat'};

/**
 * Attempts to convert the name to a valid style name.
 * Returns a valid style name or throws an exception if a valid name is not found
 * @param name - any name
 */
export function getValidStyleName(name: string): string {
  if (!defaultStyles) {
    const doc = getDocument();
    defaultStyles = doc.createElement('div').style;
  }

  if (name in validStyleNames) {
    return validStyleNames[name];
  } else {
    const camelName = toCamelCase(name);

    if (camelName in defaultStyles) {
      validStyleNames[name] = camelName;
    } else {
      const baseName = withCapital(camelName);

      for (const prefix of vendorPrefixes) {
        const fullName = prefix + baseName;
        if (fullName in defaultStyles) {
          validStyleNames[name] = fullName;
          break;
        }
      }

      if (!(name in validStyleNames)) {
        throw new BfError('Incorrect style name', {code: 'bf_utils_dom_getValidStyleName_1'});
      }
    }

    return validStyleNames[name];
  }
}
