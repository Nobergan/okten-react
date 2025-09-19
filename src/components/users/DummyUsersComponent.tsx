import { Pagination } from '../PaginationComponent.tsx';
import { getDummyUsers } from '../../service/api.service.ts';
import { EntityList } from '../../utils/EntityList.tsx';
import { DummyUser } from './DummyUserComponent.tsx';
import type IDummyUser from '../../models/IDummyUser.ts';
import { PaginationFetcher } from '../../utils/PaginationFetcher.tsx';

export const DummyUsers = () => {
  const { currentPage, total, limit, fetcher } = PaginationFetcher(
    getDummyUsers,
    (res: { users: IDummyUser[] }) => res.users,
    (res: { total: number; limit: number; skip: number }) => res
  );

  return (
    <div>
      <Pagination total={total} limit={limit} />

      <EntityList<IDummyUser>
        title='This is Dummy Users'
        currentPage={currentPage.toString()}
        fetcher={fetcher}
        renderItem={(user) => <DummyUser user={user} />}
        keyExtractor={(user) => user.id}
      />
    </div>
  );
};
