import type { FC } from 'react';
import type IJsonPhUser from '../../../models/IJsonPhUser.ts';

type DummyUserProps = { user: IJsonPhUser };

export const JsonPhUser: FC<DummyUserProps> = ({ user }) => {
  return (
    <article className='h-full w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md'>
      {/* Header */}
      <header className='flex h-52 flex-col gap-6 border-b border-gray-200 bg-gray-50 p-6 md:flex-row'>
        <div className='flex flex-1 flex-col justify-center'>
          <h2 className='text-2xl font-semibold text-gray-900'>{user.name}</h2>
          <div className='mt-2 text-sm text-gray-600'>@{user.username}</div>
          <div className='mt-1 text-sm text-gray-600'>
            📧 {user.email} · 📞 {user.phone}
          </div>
          <div className='mt-1 text-sm text-indigo-600 underline'>
            🌐{' '}
            <a href={`http://${user.website}`} target='_blank' rel='noreferrer'>
              {user.website}
            </a>
          </div>
        </div>
      </header>

      {/* Content sections */}
      <div className='flex flex-col gap-6 p-6'>
        {/* Address */}
        <section className='flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
          <h3 className='mb-4 text-base font-semibold text-gray-900'>
            Address
          </h3>
          <div className='flex-1 space-y-1 text-sm text-gray-700'>
            <p>
              {user?.address?.street}, {user?.address?.suite}
            </p>
            <p>
              {user?.address?.city}, {user?.address?.zipcode}
            </p>
            <p className='text-xs text-gray-500'>
              Geo: {user?.address?.geo?.lat}, {user?.address?.geo?.lng}
            </p>
          </div>
        </section>

        {/* Company */}
        <section className='flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
          <h3 className='mb-4 text-base font-semibold text-gray-900'>
            Company
          </h3>
          <div className='flex-1 space-y-1 text-sm text-gray-700'>
            <p className='font-medium'>{user?.company?.name}</p>
            <p className='text-gray-600 italic'>
              “{user?.company?.catchPhrase}”
            </p>
            <p className='text-xs text-gray-500'>{user?.company?.bs}</p>
          </div>
        </section>
      </div>
    </article>
  );
};
