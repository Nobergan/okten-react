import type { FC } from 'react';
import type ICar from '../models/ICar';

type CarProps = { car: ICar };

const baseClasses =
  'rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition shadow-sm';
const hoverClasses = 'hover:border-indigo-400 hover:bg-indigo-100';

export const Car: FC<CarProps> = ({ car }) => {
  return (
    <div className={`${baseClasses} ${hoverClasses}`}>
      <h3 className='text-lg font-semibold text-gray-900'>{car.brand}</h3>
      <p className='text-sm text-gray-600'>Price: ${car.price}</p>
      <p className='text-sm text-gray-600'>Year: {car.year}</p>
    </div>
  );
};
