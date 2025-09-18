// import { useEffect, useState } from 'react';
import { getPosts } from '../../../service/api.service.ts';
import { DummyPost } from './DummyPostComponent.tsx';
import type IDummyPost from '../../../models/IDummyPost.ts';
import { EntityList } from '../../../utils/homework-3/EntityList.tsx';
import { ApiSource } from '../../../models/constants/ApiSource.ts';

export const DummyPosts = () => {
  return (
    <EntityList<IDummyPost>
      title='This is Dummy Posts'
      fetcher={async () => await getPosts(ApiSource.Dummy)}
      renderItem={(post) => <DummyPost post={post} />}
      keyExtractor={(post) => post.id}
    />
  );

  // const [posts, setPosts] = useState<IDummyPost[]>([]);
  // const [loading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   async function fetchDummyPosts() {
  //     try {
  //       const res = await getDummyPosts();
  //       setPosts(res.posts);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //
  //   fetchDummyPosts();
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
  //       This is Dummy Posts
  //     </h1>
  //
  //     <div className='grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 xl:grid-cols-3'>
  //       {posts.map((post) => (
  //         <DummyPost key={post.id} post={post} />
  //       ))}
  //     </div>
  //   </div>
  // );
};
