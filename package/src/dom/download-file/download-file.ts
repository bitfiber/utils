import {BfError} from '../../common';
import {getBody, getDocument, getWindow} from '../';

/**
 * Creates an offer to download a file from URL in the browser.
 * Returns a promise that returns a blob if the download is successful
 * @param url - file URL
 * @param fetchOptions - fetch options
 */
export async function downloadFile(url: string, fetchOptions?: RequestInit): Promise<Blob> {
  const res = await fetch(url, fetchOptions);
  if (res.ok) {
    const blob = await res.blob();
    const doc = getDocument();
    const win = getWindow();
    const body = getBody();
    const url = win.URL.createObjectURL(blob);
    const link = doc.createElement('a');
    link.href = url;
    link.download = 'downloaded_file';
    body.appendChild(link);
    link.click();
    body.removeChild(link);
    return blob;
  } else {
    return Promise.reject(new BfError(
      'Network response was not ok',
      {code: 'bf_utils_dom_downloadFile_1'},
    ));
  }
}
