import type { FC } from 'react';
import type IDummyUser from '../../models/IDummyUser.ts';

type DummyUserProps = { user: IDummyUser };

export const DummyUser: FC<DummyUserProps> = ({ user }) => {
  return (
    <article className='h-full w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md'>
      <header className='flex h-52 flex-col gap-6 border-b border-gray-200 bg-gray-50 p-6 md:flex-row'>
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className='h-28 w-28 rounded-xl border border-gray-200 object-cover'
        />
        <div className='flex flex-1 flex-col justify-center'>
          <h2 className='text-2xl font-semibold text-gray-900'>
            {user.firstName} {user.maidenName} {user.lastName}
          </h2>
          <div className='mt-2 text-sm text-gray-600'>
            @{user.username} · {user.age} y.o. · {user.gender}
          </div>
          {user.company?.name && (
            <div className='mt-1 text-sm text-gray-600'>
              {user.company.name} — {user.company.title}
            </div>
          )}
        </div>
      </header>

      {/* Cards container */}
      <div className='grid grid-cols-1 items-stretch gap-6 p-6'>
        {/* Contact */}
        <section className='flex h-75 flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
          <h3 className='mb-4 text-base font-semibold text-gray-900'>
            Contact
          </h3>
          <ul className='flex-1 space-y-2 text-sm text-gray-700'>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>IP: {user.ip}</li>
            <li>MAC: {user.macAddress}</li>
            <li>Birth date: {user.birthDate}</li>
            <li>Blood group: {user.bloodGroup}</li>
            <li>Eye color: {user.eyeColor}</li>
            <li>
              Hair: {user.hair?.color} {user.hair?.type}
            </li>
          </ul>
        </section>

        {/* Address / Company */}
        <section className='flex h-75 flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
          <h3 className='mb-4 text-base font-semibold text-gray-900'>
            Address & Company
          </h3>
          <div className='flex-1 space-y-3 text-sm text-gray-700'>
            <p>
              <span className='font-medium'>Home:</span>{' '}
              {user?.address?.address}, {user?.address?.city},{' '}
              {user?.address?.state} {user?.address?.postalCode},{' '}
              {user?.address?.country}
            </p>
            {user.company && (
              <div>
                <span className='font-medium'>Company:</span>
                <div>{user.company.name}</div>
                <div>
                  {user.company.title} — {user.company.department}
                </div>
                <p>
                  {user?.company?.address?.address},{' '}
                  {user?.company?.address?.city},{' '}
                  {user?.company?.address?.state}{' '}
                  {user?.company?.address?.postalCode},{' '}
                  {user?.company?.address?.country}
                </p>
              </div>
            )}
            {user.university && (
              <p>
                <span className='font-medium'>University:</span>{' '}
                {user.university}
              </p>
            )}
          </div>
        </section>

        {/* Bank / Crypto */}
        <section className='flex h-75 flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
          <h3 className='mb-4 text-base font-semibold text-gray-900'>
            Bank & Crypto
          </h3>
          <ul className='flex-1 space-y-2 text-sm text-gray-700'>
            <li>Card Number: {user?.bank?.cardNumber}</li>
            <li>Expire: {user?.bank?.cardExpire}</li>
            <li>Type: {user?.bank?.cardType}</li>
            <li>IBAN: {user?.bank?.iban}</li>
            <li>Crypto: {user?.crypto?.coin}</li>
            <li>Network: {user?.crypto?.network}</li>
          </ul>
        </section>
      </div>
    </article>
  );
};
