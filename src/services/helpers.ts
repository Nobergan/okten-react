// Generic helper function to get and parse data from localStorage
export const retriveLocalStorage = <T>(key: string) => {
  // Get string value by key
  const object = localStorage.getItem(key) || '';

  // If no value found, return empty object casted to type T
  if (!object) {
    return {} as T;
  }

  // Parse JSON string to object
  const parse = JSON.parse(object);

  // Return parsed object as type T
  return parse as T;
};
