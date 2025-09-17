import { useEffect, useState, type ReactNode } from 'react';
import * as React from 'react';

type EntityListProps<T> = {
  title: string;
  fetcher: () => Promise<T[]>;
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => React.Key | undefined;
  emptyText?: string;
};

export function EntityList<T>({
  title,
  fetcher,
  renderItem,
  keyExtractor,
  emptyText = 'No data'
}: EntityListProps<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await fetcher();
        if (mounted) setItems(data);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [fetcher]);

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600'></div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className='container mx-auto px-4 py-8 text-center text-gray-500'>
        {emptyText}
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-8 text-center text-4xl font-bold text-black'>
        {title}
      </h1>

      <div className='grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 xl:grid-cols-3'>
        {items.map((item) => (
          <div key={keyExtractor(item)}>{renderItem(item)}</div>
        ))}
      </div>
    </div>
  );
}
