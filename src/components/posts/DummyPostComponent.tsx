import type { FC } from 'react';
import type IDummyPost from '../../models/IDummyPost.ts';

type DummyUserProps = { post: IDummyPost };

export const DummyPost: FC<DummyUserProps> = ({ post }) => {
  return (
    <article className='flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md'>
      {/* header */}
      <header className='flex flex-col gap-3 border-b border-gray-200 bg-gray-50 p-6'>
        <h2 className='text-2xl font-semibold text-gray-900'>{post.title}</h2>
        {/* ...tags */}
      </header>

      {/* body */}
      <div className='p-6'>
        <p className='text-base leading-7 whitespace-pre-line text-gray-700'>
          {post.body}
        </p>
      </div>

      {/* footer */}
      <footer className='mt-auto flex flex-col gap-4 border-t border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between'>
        {/* Reactions & views */}
        <div className='flex flex-wrap items-center gap-4 text-sm text-gray-700'>
          <span className='inline-flex items-center gap-1'>
            {/* like */}
            <svg
              viewBox='0 0 24 24'
              className='h-5 w-5'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M12.1 21.35 10 19.45C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4c1.74 0 3.41.81 4.5 2.09A5.79 5.79 0 0 1 15.5 4 4.5 4.5 0 0 1 20 8.5c0 3.78-3.4 6.86-8 10.95l-1.9 1.9z' />
            </svg>
            {post.reactions?.likes ?? 0}
          </span>

          <span className='inline-flex items-center gap-1'>
            {/* dislike */}
            <svg
              viewBox='0 0 24 24'
              className='h-5 w-5'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M12 2a1 1 0 0 1 1 1v14.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5A1 1 0 0 1 7.7 14.3L11 17.6V3a1 1 0 0 1 1-1z' />
            </svg>
            {post.reactions?.dislikes ?? 0}
          </span>

          <span className='inline-flex items-center gap-1'>
            {/* views */}
            <svg
              viewBox='0 0 24 24'
              className='h-5 w-5'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M12 5c5.5 0 9.5 4.5 10.8 6.2a1.5 1.5 0 0 1 0 1.6C21.5 14.5 17.5 19 12 19S2.5 14.5 1.2 12.8a1.5 1.5 0 0 1 0-1.6C2.5 9.5 6.5 5 12 5zm0 2C7.6 7 4.2 10.7 3.2 12c1 1.3 4.4 5 8.8 5s7.8-3.7 8.8-5c-1-1.3-4.4-5-8.8-5zm0 2.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z' />
            </svg>
            {post.views ?? 0}
          </span>
        </div>

        {/* Author / IDs */}
        <div className='text-sm text-gray-600'>
          <span className='font-medium text-gray-900'>Author ID:</span>{' '}
          {post.userId} · <span className='font-medium'>Post ID:</span>{' '}
          {post.id}
        </div>
      </footer>
    </article>
  );
};
