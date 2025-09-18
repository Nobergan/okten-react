// import { useEffect, useState } from 'react';
import type IDummyPost from '../../../models/IDummyPost.ts';
import { getComments } from '../../../service/api.service.ts';
import { DummyComment } from './DummyCommentComponent.tsx';
import { EntityList } from '../../../utils/homework-3/EntityList.tsx';
import { ApiSource } from '../../../models/constants/ApiSource.ts';

export const DummyComments = () => {
  return (
    <EntityList<IDummyPost>
      title='This is Dummy Comments'
      fetcher={async () => await getComments(ApiSource.Dummy)}
      renderItem={(comment) => <DummyComment comment={comment} />}
      keyExtractor={(comment) => comment.id}
    />
  );

  // const [comments, setComments] = useState<IDummyPost[]>([]);
  // const [loading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   async function fetchDummyComments() {
  //     try {
  //       const res = await getDummyComments();
  //       setComments(res.comments);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //
  //   fetchDummyComments();
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
  //       This is Dummy Comments
  //     </h1>
  //
  //     <div className='grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 xl:grid-cols-3'>
  //       {comments.map((comment) => (
  //         <DummyComment key={comment.id} comment={comment} />
  //       ))}
  //     </div>
  //   </div>
  // );
};
