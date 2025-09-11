import type DummyProductModel from './DummyProductModel.ts';

export default interface DummyProductsResponse {
  products: DummyProductModel[];
  total: number;
  skip: number;
  limit: number;
}
