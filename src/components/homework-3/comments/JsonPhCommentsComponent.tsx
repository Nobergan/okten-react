// import { useEffect, useState } from 'react';
import { getComments } from '../../../service/api.service.ts';
import { JsonPhComment } from './JsonPhCommentComponent.tsx';
import { EntityList } from '../../../utils/homework-3/EntityList.tsx';
import type IJsonPhComment from '../../../models/IJsonPhComment.ts';
import { ApiSource } from '../../../models/constants/ApiSource.ts';

export const JsonPhComments = () => {
  return (
    <EntityList<IJsonPhComment>
      title='This is JsonPlaceholder Comments'
      fetcher={async () => await getComments(ApiSource.JsonPh)}
      renderItem={(comment) => <JsonPhComment comment={comment} />}
      keyExtractor={(comment) => comment.id}
    />
  );

  // const [comments, setComments] = useState<IJsonPhComment[]>([]);
  // const [loading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   async function fetchJsonPhComments() {
  //     try {
  //       const res = await getJsonPhComments();
  //       setComments(res);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //
  //   fetchJsonPhComments();
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
  //       This is JsonPlaceholder Comments
  //     </h1>
  //
  //     <div className='grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 xl:grid-cols-3'>
  //       {comments.map((comment) => (
  //         <JsonPhComment key={comment.id} comment={comment} />
  //       ))}
  //     </div>
  //   </div>
  // );
};
