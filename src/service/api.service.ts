import type DummyProductsResponse from '../models/DummyProductsResponse.ts';

const dummyProductsEndpoint = import.meta.env.VITE_BASE_DUMMY_URL + '/products';

const getDummyProducts = async () => {
  const response: DummyProductsResponse = await fetch(
    dummyProductsEndpoint
  ).then((res) => res.json());

  return response.products;
};

export { getDummyProducts };
