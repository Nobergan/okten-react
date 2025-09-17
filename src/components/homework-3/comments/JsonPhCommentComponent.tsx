import type { FC } from 'react';
import type IJsonPhComment from '../../../models/IJsonPhComment.ts';

type JsonPhCommentProps = { comment: IJsonPhComment };

export const JsonPhComment: FC<JsonPhCommentProps> = ({ comment }) => {
  return (
    <article className='flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md'>
      {/* Header */}
      <header className='flex flex-col border-b border-gray-200 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <h3 className='text-lg font-semibold text-gray-900'>
            {comment.name}
          </h3>
          <p className='text-sm text-gray-600'>{comment.email}</p>
        </div>
        <span className='mt-2 inline-block rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs text-gray-600 shadow-sm sm:mt-0'>
          Comment ID: {comment.id}
        </span>
      </header>

      {/* Body */}
      <div className='p-6'>
        <p className='text-base leading-7 whitespace-pre-line text-gray-700'>
          {comment.body}
        </p>
      </div>

      {/* Footer */}
      <footer className='mt-auto flex items-center justify-between gap-2 border-t border-gray-200 bg-white p-4 text-sm text-gray-600'>
        <div>
          <span className='font-medium text-gray-900'>Post ID:</span>{' '}
          {comment.postId}
        </div>
        <div>
          <span className='font-medium text-gray-900'>Email:</span>{' '}
          {comment.email}
        </div>
      </footer>
    </article>
  );
};
