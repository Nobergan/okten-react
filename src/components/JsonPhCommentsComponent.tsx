import { JsonPhComment } from './JsonPhCommentComponent.tsx';
import { EntityList } from '../utils/EntityList.tsx';
import type IJsonPhComment from '../models/IJsonPhComment.ts';
import { useAppDispatch, useAppSelector } from '../redux/store.ts';
import { useEffect } from 'react';
import { jsonPhCommentActions } from '../redux/slices/JsonPhCommentSlice.ts';

export const JsonPhComments = () => {
  const dispatch = useAppDispatch();
  const { comments, loading, error, lastFetch } = useAppSelector(
    (state) => state.commentStoreSlice
  );
  const shouldFetch =
    !comments.length || !lastFetch || Date.now() - lastFetch > 5 * 60 * 1000;

  useEffect(() => {
    if (shouldFetch) dispatch(jsonPhCommentActions.loadComments());
  }, [dispatch, shouldFetch]);

  return (
    <EntityList<IJsonPhComment>
      title='This is JsonPlaceholder Comments'
      items={comments}
      loading={loading}
      emptyText={error ?? 'No data'}
      renderItem={(comment) => <JsonPhComment comment={comment} />}
      keyExtractor={(comment) => comment.id}
    />
  );
};
