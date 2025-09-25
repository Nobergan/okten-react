import type { IProduct } from './IProduct.ts';

// Products API response
export type IProductsResponseModelType = {
  total: number;
  skip: number;
  limit: number;
  products: IProduct[];
};
