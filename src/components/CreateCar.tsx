import { useForm } from 'react-hook-form';
import { createCar } from '../services/api.service.ts';
import type ICar from '../models/ICar.ts';
import { carValidators } from '../utils/carValidators.ts';
import { joiResolver } from '@hookform/resolvers/joi';

export const CreateCar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<ICar>({ mode: 'all', resolver: joiResolver(carValidators) });

  const submitHandler = async (data: ICar) => await createCar(data);

  const baseInput =
    'block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition placeholder:text-gray-400 ';
  const hoverInput = 'hover:border-indigo-400 hover:bg-indigo-100';
  const errorInput = 'border-red-500';

  const labelCls = 'mb-1 block text-sm font-medium text-gray-800';
  const helpErrCls = 'mt-1 text-sm text-red-600';

  const cardCls = 'rounded-xl border border-gray-200 bg-gray-100 p-6 shadow-sm';
  const btnBase =
    'inline-flex cursor-pointer w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition ' +
    'hover:border-indigo-400 hover:bg-indigo-100' +
    'disabled:cursor-not-allowed disabled:opacity-60';

  return (
    <div className='mx-auto my-10 max-w-md'>
      <div className={cardCls}>
        <h2 className='mb-1 text-xl font-semibold text-gray-900'>Create Car</h2>
        <p className='mb-6 text-sm text-gray-500'>
          Fill in the fields and click the button to add a new car.
        </p>

        <form onSubmit={handleSubmit(submitHandler)} className='space-y-5'>
          <div>
            <label htmlFor='brand' className={labelCls}>
              Brand
            </label>
            <input
              id='brand'
              type='text'
              placeholder='ex., Toyota'
              {...register('brand')}
              className={[
                baseInput,
                hoverInput,
                errors.brand ? errorInput : ''
              ].join(' ')}
              aria-invalid={!!errors.brand}
              aria-describedby='brand-error'
            />
            {errors.brand && (
              <p id='brand-error' className={helpErrCls}>
                {errors.brand.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor='price' className={labelCls}>
              Price, $
            </label>
            <div className='relative'>
              <input
                id='price'
                type='number'
                inputMode='decimal'
                placeholder='ex., 15000'
                {...register('price', { valueAsNumber: true })}
                className={[
                  baseInput,
                  hoverInput,
                  'pr-10',
                  errors.price ? errorInput : ''
                ].join(' ')}
                aria-invalid={!!errors.price}
                aria-describedby='price-error'
              />
              <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400'>
                $
              </span>
            </div>
            {errors.price && (
              <p id='price-error' className={helpErrCls}>
                {errors.price.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor='year' className={labelCls}>
              Year
            </label>
            <input
              id='year'
              type='number'
              placeholder='ex., 2018'
              {...register('year', { valueAsNumber: true })}
              className={[
                baseInput,
                hoverInput,
                errors.year ? errorInput : ''
              ].join(' ')}
              aria-invalid={!!errors.year}
              aria-describedby='year-error'
            />
            {errors.year && (
              <p id='year-error' className={helpErrCls}>
                {errors.year.message}
              </p>
            )}
          </div>

          <button type='submit' disabled={isSubmitting} className={btnBase}>
            {isSubmitting && (
              <svg
                className='h-5 w-5 animate-spin'
                viewBox='0 0 24 24'
                fill='none'
                aria-hidden='true'
              >
                <circle
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                  opacity='0.2'
                />
                <path
                  d='M22 12a10 10 0 0 1-10 10'
                  stroke='currentColor'
                  strokeWidth='4'
                />
              </svg>
            )}
            {isSubmitting ? 'Saving…' : 'Create Car'}
          </button>

          {isSubmitSuccessful && (
            <p className='text-center text-sm text-emerald-600'>
              Car successfully added!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
