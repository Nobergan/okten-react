import { getDummyPosts } from '../../service/api.service.ts';
import { DummyPost } from './DummyPostComponent.tsx';
import type IDummyPost from '../../models/IDummyPost.ts';
import { EntityList } from '../../utils/EntityList.tsx';
import { Pagination } from '../PaginationComponent.tsx';
import { PaginationFetcher } from '../../utils/PaginationFetcher.tsx';

export const DummyPosts = () => {
  const { currentPage, total, limit, fetcher } = PaginationFetcher(
    getDummyPosts,
    (res: { posts: IDummyPost[] }) => res.posts,
    (res: { total: number; limit: number; skip: number }) => res
  );

  return (
    <div>
      <Pagination total={total} limit={limit} />

      <EntityList<IDummyPost>
        title='This is Dummy Posts'
        currentPage={currentPage.toString()}
        fetcher={fetcher}
        renderItem={(post) => <DummyPost post={post} />}
        keyExtractor={(post) => post.id}
      />
    </div>
  );
};
