import type IDummyUser from '../models/IDummyUser.ts';
import type DummyResponse from '../models/DummyResponse.ts';
import type IDummyPost from '../models/IDummyPost.ts';
import type IDummyComment from '../models/IDummyComment.ts';

const DUMMY = import.meta.env.VITE_BASE_DUMMY_URL;

const getJSON = <T>(url: string): Promise<T> =>
  fetch(url).then((res) => res.json());

function makeDummyFetcher<K extends string, T>(resource: K) {
  return (page: string, limit = 30) => {
    const skip = limit * +page - limit;
    return getJSON<DummyResponse & Record<K, T[]>>(
      `${DUMMY}/${resource}?limit=${limit}&skip=${skip}`
    );
  };
}

export const getDummyUsers = makeDummyFetcher<'users', IDummyUser>('users');
export const getDummyPosts = makeDummyFetcher<'posts', IDummyPost>('posts');
export const getDummyComments = makeDummyFetcher<'comments', IDummyComment>(
  'comments'
);
