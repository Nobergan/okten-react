import { JsonPhPost } from './JsonPhPostComponent.tsx';
import { EntityList } from '../utils/EntityList.tsx';
import type IJsonPhPost from '../models/IJsonPhPost.ts';
import { useAppDispatch, useAppSelector } from '../redux/store.ts';
import { useEffect } from 'react';
import { jsonPhPostAction } from '../redux/slices/JsonPhPostSlice.ts';

export const JsonPhPosts = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error, lastFetch } = useAppSelector(
    (state) => state.postStoreSlice
  );

  const shouldFetch =
    !posts.length || !lastFetch || Date.now() - lastFetch > 5 * 60 * 1000;

  useEffect(() => {
    if (shouldFetch) dispatch(jsonPhPostAction.loadPosts());
  }, [dispatch, shouldFetch]);

  return (
    <EntityList<IJsonPhPost>
      title='This is JsonPlaceholder Posts'
      items={posts}
      loading={loading}
      emptyText={error ?? 'No data'}
      renderItem={(post) => <JsonPhPost post={post} />}
      keyExtractor={(post) => post.id}
    />
  );
};
