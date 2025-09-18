// import { useEffect, useState } from 'react';
import { getPosts } from '../../../service/api.service.ts';
import type IJsonPhPost from '../../../models/IJsonPhPost.ts';
import { JsonPhPost } from './JsonPhPostComponent.tsx';
import { EntityList } from '../../../utils/homework-3/EntityList.tsx';
import { ApiSource } from '../../../models/constants/ApiSource.ts';

export const JsonPhPosts = () => {
  return (
    <EntityList<IJsonPhPost>
      title='This is JsonPlaceholder Posts'
      fetcher={async () => await getPosts(ApiSource.JsonPh)}
      renderItem={(post) => <JsonPhPost post={post} />}
      keyExtractor={(post) => post.id}
    />
  );

  // const [posts, setPosts] = useState<IJsonPhPost[]>([]);
  // const [loading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   async function fetchJsonPhPosts() {
  //     try {
  //       const res = await getJsonPhPosts();
  //       setPosts(res);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //
  //   fetchJsonPhPosts();
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
  //       This is JsonPlaceholder Posts
  //     </h1>
  //
  //     <div className='grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 xl:grid-cols-3'>
  //       {posts.map((post) => (
  //         <JsonPhPost key={post.id} post={post} />
  //       ))}
  //     </div>
  //   </div>
  // );
};
