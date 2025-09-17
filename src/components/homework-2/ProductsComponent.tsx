import { useEffect, useState } from 'react';
import { getDummyProducts } from '../../service/api.service.ts';
import { Product } from './ProductComponent.tsx';
import type DummyProductModel from '../../models/DummyProductModel.ts';

export const Products = () => {
  const [products, setProduct] = useState<DummyProductModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await getDummyProducts();
        setProduct(res.products);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600'></div>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-8 text-center text-4xl font-bold text-white'>
        Наші товари
      </h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
