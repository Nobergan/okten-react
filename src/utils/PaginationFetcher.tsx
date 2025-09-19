import { useState } from 'react';
import { useSearchParams } from 'react-router';

type PaginationMeta = { total: number; limit: number; skip: number };

export function PaginationFetcher<R, T>(
  apiCall: (page: string) => Promise<R>,
  selectItems: (res: R) => T[],
  selectMeta: (res: R) => PaginationMeta,
  defaultPage = '1'
) {
  const [searchParams] = useSearchParams({ page: defaultPage });
  const currentPage = Math.max(
    1,
    Number(searchParams.get('page') || defaultPage)
  );

  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(0);

  const fetcher = async (pageFromList?: string) => {
    const page = pageFromList ?? defaultPage;
    const pageNum = Math.max(1, Number(page) || 1);

    const res = await apiCall(page);
    const { total: metaTotal, limit: metaLimit, skip } = selectMeta(res);

    setTotal(metaTotal);

    let pagesLimit = metaLimit;
    if (pageNum > 1 && skip > 0) {
      pagesLimit = skip / (pageNum - 1);
    }
    setLimit((prev) => prev || Math.max(1, Math.round(pagesLimit)));

    return selectItems(res);
  };

  return { currentPage, total, limit, fetcher };
}
