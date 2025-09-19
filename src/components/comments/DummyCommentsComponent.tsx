import type IDummyPost from '../../models/IDummyPost.ts';
import { getDummyComments } from '../../service/api.service.ts';
import { DummyComment } from './DummyCommentComponent.tsx';
import { EntityList } from '../../utils/EntityList.tsx';
import { Pagination } from '../PaginationComponent.tsx';
import { PaginationFetcher } from '../../utils/PaginationFetcher.tsx';
import type IDummyComment from '../../models/IDummyComment.ts';

export const DummyComments = () => {
  const { currentPage, total, limit, fetcher } = PaginationFetcher(
    getDummyComments,
    (res: { comments: IDummyComment[] }) => res.comments,
    (res: { total: number; limit: number; skip: number }) => res
  );

  return (
    <div>
      <Pagination total={total} limit={limit} />

      <EntityList<IDummyPost>
        title='This is Dummy Comments'
        currentPage={currentPage.toString()}
        fetcher={fetcher}
        renderItem={(comment) => <DummyComment comment={comment} />}
        keyExtractor={(comment) => comment.id}
      />
    </div>
  );
};
