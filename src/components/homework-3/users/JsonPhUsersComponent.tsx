// import { useEffect, useState } from 'react';
import { getJsonPhUsers } from '../../../service/api.service.ts';
import { JsonPhUser } from './JsonPhUserComponent.tsx';
import type IJsonPhUser from '../../../models/IJsonPhUser.ts';
import { EntityList } from '../../../utils/homework-3/EntityList.tsx';

export const JsonPhUsers = () => {
  return (
    <EntityList<IJsonPhUser>
      title='This is JsonPlaceholder Users'
      fetcher={async () => await getJsonPhUsers()}
      renderItem={(user) => <JsonPhUser user={user} />}
      keyExtractor={(user) => user.id}
    />
  );

  // const [users, setUsers] = useState<IJsonPhUser[]>([]);
  // const [loading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   async function fetchJsonPhUsers() {
  //     try {
  //       const res = await getJsonPhUsers();
  //       setUsers(res);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //
  //   fetchJsonPhUsers();
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
  //       This is JsonPlaceholder Users
  //     </h1>
  //
  //     <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3'>
  //       {users.map((user) => (
  //         <JsonPhUser user={user} key={user.id} />
  //       ))}
  //     </div>
  //   </div>
  // );
};
