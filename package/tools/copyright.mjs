import {readdirSync, lstatSync, writeFileSync, readFileSync} from 'fs';
import {extname} from 'path';

const distFolder = './dist/';
const currentYear = new Date().getFullYear();
const copyright = `Copyright (c) 2023${currentYear === 2023 ? ''
  : `-${currentYear}`} Zmanovskyi Oleksandr. All rights reserved.`;
const licenseUrl = 'https://github.com/bitfiber/utils/blob/main/LICENSE.txt';

const jsCopyrightText = `/*
 * @license
 * ${copyright}
 * This source code is released under the Apache 2.0 License: ${licenseUrl}
 */`;

addCopyrightToFiles(distFolder);

function addCopyrightToFiles(folder) {
  readdirSync(folder).forEach(item => {
    const itemPath = folder + item;
    if (lstatSync(itemPath).isDirectory()) {
      addCopyrightToFiles(`${itemPath}/`);
    } else if (extname(item) === '.js') {
      addCopyrightToStartOfFile(itemPath, jsCopyrightText);
    }
  });
}

function addCopyrightToStartOfFile(path, copyrightText) {
  if (!path) {
    throw new Error('File path is required');
  }

  writeFileSync(path, `${copyrightText}
${readFileSync(path).toString()}
`);
}
