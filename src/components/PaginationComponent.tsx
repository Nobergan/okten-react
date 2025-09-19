import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

export const Pagination = ({
  total,
  limit
}: {
  total: number;
  limit: number;
}) => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  const page = Number(searchParams.get('page') || '1');

  const hasMeta =
    Number.isFinite(total) && total > 0 && Number.isFinite(limit) && limit > 0;
  const maxPage = hasMeta ? Math.max(1, Math.ceil(total / limit)) : 1;

  const currentPage = Number.isFinite(page)
    ? Math.min(Math.max(1, page), maxPage)
    : 1;

  useEffect(() => {
    if (!hasMeta) return;

    if (page !== currentPage) {
      setSearchParams({ page: String(currentPage) }, { replace: true });
    }
  }, [hasMeta, page, currentPage, setSearchParams]);

  const atStart = !hasMeta || currentPage <= 1;
  const atEnd = !hasMeta || currentPage >= maxPage;

  return (
    <div className='flex items-center justify-center gap-4 rounded-xl pt-5'>
      <button
        disabled={atStart}
        onClick={() => setSearchParams({ page: String(currentPage - 1) })}
        className='cursor-pointer rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400'
      >
        Prev
      </button>

      <span className='text-sm font-medium text-gray-700'>
        {hasMeta ? currentPage : '—'} / {hasMeta ? maxPage : '—'}
      </span>

      <button
        disabled={atEnd}
        onClick={() => setSearchParams({ page: String(currentPage + 1) })}
        className='cursor-pointer rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400'
      >
        Next
      </button>
    </div>
  );
};
