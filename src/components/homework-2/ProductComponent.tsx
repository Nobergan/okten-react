import type { FC } from 'react';
import type DummyProductModel from '../../models/DummyProductModel.ts';

type ProductProps = { product: DummyProductModel };

export const Product: FC<ProductProps> = ({ product }) => {
  // Calculate discount
  const discountedPrice =
    product.price && product.discountPercentage
      ? product.price * (1 - product.discountPercentage / 100)
      : product.price;

  return (
    <div className='mx-auto mb-6 flex h-full max-w-sm flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl'>
      {/*Image*/}
      <div className='relative'>
        <img
          src={product.thumbnail || '/placeholder.jpg'}
          alt={product.title}
          className='h-48 w-full object-cover'
        />
        {product.discountPercentage && (
          <div className='absolute top-2 left-2 rounded-full bg-red-500 px-2 py-1 text-sm font-semibold text-white'>
            -{product.discountPercentage}%
          </div>
        )}
        <div className='bg-opacity-50 absolute top-2 right-2 rounded-full bg-black px-2 py-1 text-sm text-white'>
          ⭐ {product.rating?.toFixed(1)}
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-grow flex-col p-6'>
        {/* Category */}
        {product.category && (
          <div className='mb-2 text-sm font-medium tracking-wide text-blue-600 uppercase'>
            {product.category}
          </div>
        )}

        {/* Title */}
        <h3 className='mb-2 line-clamp-2 text-xl font-bold text-gray-900'>
          {product.title}
        </h3>

        {/* Brand */}
        {product.brand && (
          <p className='mb-2 text-sm text-gray-600'>
            Бренд: <span className='font-medium'>{product.brand}</span>
          </p>
        )}

        {/* Description */}
        <p className='mb-4 line-clamp-3 text-sm text-gray-700'>
          {product.description}
        </p>

        {/* Price */}
        <div className='mb-4 flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <span className='text-2xl font-bold text-gray-900'>
              ${discountedPrice?.toFixed(2)}
            </span>
            {product.discountPercentage && (
              <span className='text-lg text-gray-500 line-through'>
                ${product.price?.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Stock and Availability */}
        <div className='mb-4 flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <div
              className={`h-3 w-3 rounded-full ${
                product.availabilityStatus === 'In Stock'
                  ? 'bg-green-500'
                  : 'bg-red-500'
              }`}
            ></div>
            <span className='text-sm text-gray-600'>
              {product.availabilityStatus || 'Невідомо'}
            </span>
          </div>
          {product.stock && (
            <span className='text-sm text-gray-600'>
              Залишок: {product.stock}
            </span>
          )}
        </div>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className='mb-4 flex flex-wrap gap-1'>
            {product.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className='rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800'
              >
                {tag}
              </span>
            ))}
            {product.tags.length > 3 && (
              <span className='text-xs text-gray-500'>
                +{product.tags.length - 3} ще
              </span>
            )}
          </div>
        )}

        {/* Additional Info */}
        <div className='mb-4 space-y-2 text-sm text-gray-600'>
          {product.weight && (
            <div className='flex justify-between'>
              <span>Вага:</span>
              <span>{product.weight} кг</span>
            </div>
          )}
          {product.dimensions && (
            <div className='flex justify-between'>
              <span>Розміри:</span>
              <span>
                {product.dimensions.width}×{product.dimensions.height}×
                {product.dimensions.depth} см
              </span>
            </div>
          )}
          {product.minimumOrderQuantity && (
            <div className='flex justify-between'>
              <span>Мін. кількість:</span>
              <span>{product.minimumOrderQuantity} шт</span>
            </div>
          )}
        </div>

        {/* Warranty and Shipping */}
        {(product.warrantyInformation || product.shippingInformation) && (
          <div className='mb-4 border-t pt-3'>
            {product.warrantyInformation && (
              <div className='mb-1 text-sm text-gray-600'>
                🛡️ {product.warrantyInformation}
              </div>
            )}
            {product.shippingInformation && (
              <div className='text-sm text-gray-600'>
                🚚 {product.shippingInformation}
              </div>
            )}
          </div>
        )}

        {/*Reviews Preview*/}
        {product.reviews && product.reviews.length > 0 && (
          <div className='mb-4 border-t pt-3'>
            <div className='mb-2 text-sm font-medium text-gray-900'>
              Відгуки ({product.reviews.length})
            </div>
            <div className='rounded-lg bg-gray-50 p-3'>
              <div className='mb-1 text-sm text-gray-700 italic'>
                "{product.reviews[0].comment}"
              </div>
              <div className='text-xs text-gray-500'>
                — {product.reviews[0].reviewerName}
                {product.reviews[0].rating && (
                  <span className='ml-2'>⭐ {product.reviews[0].rating}/5</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Spacer */}
        <div className='flex-grow'></div>

        {/* Action Button */}
        <button className='w-full cursor-pointer rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700'>
          Додати до кошика
        </button>

        {/* Return Policy */}
        {product.returnPolicy && (
          <div className='mt-3 text-center text-xs text-gray-500'>
            📦 {product.returnPolicy}
          </div>
        )}
      </div>
    </div>
  );
};
