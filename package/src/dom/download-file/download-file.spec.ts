import {downloadFile, getWindow} from '../';

describe('@bitfiber/utils/dom/downloadFile', () => {
  it('Fetches successfully data from an API', async () => {
    const win = getWindow();
    const mockData = new Blob();
    const mockBlobPromise = Promise.resolve(mockData);
    const mockFetchPromise = Promise.resolve<Response>(<any>{
      ok: true, blob: () => mockBlobPromise,
    });

    win.fetch = jest.fn(() => mockFetchPromise);
    win.URL.createObjectURL = jest.fn(() => 'mock-url');

    const data = await downloadFile('https://example.com/file/name', {});

    expect(win.fetch).toHaveBeenCalledTimes(1);
    expect(win.fetch).toHaveBeenCalledWith('https://example.com/file/name', {});
    expect(data).toEqual(mockData);
    (<any>win).fetch.mockRestore(); // Clean up the mock
  });

  it('Handles errors when fetching data', async () => {
    const win = getWindow();
    const mockFetchPromise = Promise.resolve<Response>(<any>{
      ok: false, status: 404, statusText: 'Not Found',
    });

    win.fetch = jest.fn(() => mockFetchPromise);
    win.URL.createObjectURL = jest.fn(() => 'mock-url');

    await expect(downloadFile('https://example.com/file/name')).rejects.toThrow(
      'Network response was not ok',
    );

    expect(win.fetch).toHaveBeenCalledTimes(1);
    (<any>win).fetch.mockRestore(); // Clean up the mock
  });
});
