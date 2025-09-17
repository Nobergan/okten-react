import type { FC } from 'react';
import type IJsonPhPost from '../../../models/IJsonPhPost.ts';

type JsonPhProps = { post: IJsonPhPost };

export const JsonPhPost: FC<JsonPhProps> = ({ post }) => {
  return (
    <article className='flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md'>
      {/* Header */}
      <header className='border-b border-gray-200 bg-gray-50 p-6'>
        <h2 className='text-2xl font-semibold text-gray-900'>{post.title}</h2>
      </header>

      {/* Body */}
      <div className='p-6'>
        <p className='text-base leading-7 whitespace-pre-line text-gray-700'>
          {post.body}
        </p>
      </div>

      {/* Footer */}
      <footer className='mt-auto flex flex-col gap-2 border-t border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between'>
        <div className='text-sm text-gray-600'>
          <span className='font-medium text-gray-900'>User ID:</span>{' '}
          {post.userId}
        </div>
        <div className='text-sm text-gray-600'>
          <span className='font-medium text-gray-900'>Post ID:</span> {post.id}
        </div>
      </footer>
    </article>
  );
};
