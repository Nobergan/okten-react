import type { FC } from 'react';
import type IDummyComment from '../../models/IDummyComment.ts';

type DummyCommentProps = { comment: IDummyComment };

export const DummyComment: FC<DummyCommentProps> = ({ comment }) => {
  return (
    <article className='flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md'>
      {/* Header */}
      <header className='flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4'>
        <div>
          <h3 className='text-lg font-semibold text-gray-900'>
            {comment?.user?.fullName}
          </h3>
          <p className='text-sm text-gray-600'>@{comment?.user?.username}</p>
        </div>
        <span className='rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs text-gray-600 shadow-sm'>
          User ID: {comment?.user?.id}
        </span>
      </header>

      {/* Body */}
      <div className='p-6'>
        <p className='text-base leading-7 whitespace-pre-line text-gray-700'>
          {comment.body}
        </p>
      </div>

      {/* Footer */}
      <footer className='mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-gray-200 bg-white p-4 text-sm text-gray-600'>
        <div>
          <span className='font-medium text-gray-900'>Comment ID:</span>{' '}
          {comment.id}
        </div>
        <div>
          <span className='font-medium text-gray-900'>Post ID:</span>{' '}
          {comment.postId}
        </div>
        <div className='inline-flex items-center gap-1'>
          {/* like icon */}
          <svg
            viewBox='0 0 24 24'
            className='h-4 w-4'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M12.1 21.35 10 19.45C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4c1.74 0 3.41.81 4.5 2.09A5.79 5.79 0 0 1 15.5 4 4.5 4.5 0 0 1 20 8.5c0 3.78-3.4 6.86-8 10.95l-1.9 1.9z' />
          </svg>
          {comment.likes}
        </div>
      </footer>
    </article>
  );
};
