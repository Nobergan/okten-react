// import { useEffect, useState } from 'react';
import { getUsers } from '../../../service/api.service.ts';
import type IDummyUser from '../../../models/IDummyUser.ts';
import { DummyUser } from './DummyUserComponent.tsx';
import { EntityList } from '../../../utils/homework-3/EntityList.tsx';
import { ApiSource } from '../../../models/constants/ApiSource.ts';

export const DummyUsers = () => {
  return (
    <EntityList<IDummyUser>
      title='This is Dummy Users'
      fetcher={async () => await getUsers(ApiSource.Dummy)}
      renderItem={(user) => <DummyUser user={user} />}
      keyExtractor={(user) => user.id}
    />
  );

  // const [users, setUsers] = useState<IDummyUser[]>([]);
  // const [loading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   async function fetchDummyUsers() {
  //     try {
  //       const res = await getDummyUsers();
  //       setUsers(res.users);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //
  //   fetchDummyUsers();
  // });
  //
  // if (loading) {
  //   return (
  //     <div className='flex min-h-screen items-center justify-center'>
  //       <div className='h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600'></div>
  //     </div>
  //   );
  // }
  //
  // return (
  //   <div className='container mx-auto px-4 py-8'>
  //     <h1 className='mb-8 text-center text-4xl font-bold text-black'>
  //       This is Dummy Users
  //     </h1>
  //
  //     <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3'>
  //       {users.map((user) => (
  //         <DummyUser user={user} key={user.id} />
  //       ))}
  //     </div>
  //   </div>
  // );
};
