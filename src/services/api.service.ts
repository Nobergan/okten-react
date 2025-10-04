const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const getAll = async <T>(endpoint: string) => {
  const responseResult = await fetch(`${baseUrl}${endpoint}`).then(
    (response: Response) => response.json()
  );
  return responseResult as T;
};
