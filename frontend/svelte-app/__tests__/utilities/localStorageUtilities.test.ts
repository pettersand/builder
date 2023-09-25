import { setLocalStorageItem, getLocalStorageItem } from "../../src/utilities/localStorageUtilities";

describe('localStorageUtilities', () => {
  // Clear all instances and calls to constructor and all methods:
  const mockSetItem = jest.fn();
  const mockGetItem = jest.fn();

  // Mocking the localStorage
  global.localStorage.__proto__.setItem = mockSetItem;
  global.localStorage.__proto__.getItem = mockGetItem;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('setLocalStorageItem sets item in localStorage', () => {
    setLocalStorageItem('key', 'value');
    expect(mockSetItem).toHaveBeenCalledWith('key', 'value');
  });

  test('getLocalStorageItem gets item from localStorage', () => {
    mockGetItem.mockReturnValueOnce('value');
    const result = getLocalStorageItem('key', 'default');
    expect(result).toBe('value');
  });

  test('getLocalStorageItem returns default value if key is not in localStorage', () => {
    mockGetItem.mockReturnValueOnce(null);
    const result = getLocalStorageItem('key', 'default');
    expect(result).toBe('default');
  });
});
