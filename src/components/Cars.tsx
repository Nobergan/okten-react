import { useEffect, useState } from 'react';
import { getCars } from '../services/api.service.ts';
import type ICar from '../models/ICar.ts';
import { Car } from './Car.tsx';

export const Cars = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    getCars().then((cars) => setCars(cars));
  }, []);

  return (
    <div>
      <h2 className='mt-5 mb-1 text-center text-xl font-semibold text-gray-900'>
        Create Car
      </h2>
      <div className='flex flex-wrap gap-4 p-4'>
        {cars.map((car) => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};
