import type IDummyUser from '../models/IDummyUser.ts';
import type IJsonPhUser from '../models/IJsonPhUser.ts';
import type IDummyPost from '../models/IDummyPost.ts';
import type IJsonPhPost from '../models/IJsonPhPost.ts';
import type IDummyComment from '../models/IDummyComment.ts';
import type IJsonPhComment from '../models/IJsonPhComment.ts';
import { ApiSource } from '../models/constants/ApiSource.ts';
import type DummyResponse from '../models/DummyResponse.ts';

const DUMMY = import.meta.env.VITE_BASE_DUMMY_URL;
const JSONPH = import.meta.env.VITE_BASE_JSON_PH_URL;

const getJSON = <T>(url: string): Promise<T> =>
  fetch(url).then((res) => res.json());

export const getUsers = (source: ApiSource) => {
  if (source === ApiSource.Dummy) {
    return getJSON<DummyResponse & { users: IDummyUser[] }>(
      `${DUMMY}/users`
    ).then((res) => res.users);
  }
  return getJSON<IJsonPhUser[]>(`${JSONPH}/users`);
};

export const getPosts = (source: ApiSource) => {
  if (source === ApiSource.Dummy) {
    return getJSON<DummyResponse & { posts: IDummyPost[] }>(
      `${DUMMY}/posts`
    ).then((res) => res.posts);
  }
  return getJSON<IJsonPhPost[]>(`${JSONPH}/posts`);
};

export const getComments = (source: ApiSource) => {
  if (source === ApiSource.Dummy) {
    return getJSON<DummyResponse & { comments: IDummyComment[] }>(
      `${DUMMY}/comments`
    ).then((res) => res.comments);
  }
  return getJSON<IJsonPhComment[]>(`${JSONPH}/comments`);
};
