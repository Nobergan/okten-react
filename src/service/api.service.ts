import type DummyProductsResponse from '../models/DummyProductsResponse.ts';
import type IDummyUser from '../models/IDummyUser.ts';
import type DummyResponse from '../models/DummyResponse.ts';
import type IJsonPhUser from '../models/IJsonPhUser.ts';
import type IDummyPost from '../models/IDummyPost.ts';
import type IJsonPhPost from '../models/IJsonPhPost.ts';
import type IDummyComment from '../models/IDummyComment.ts';
import type IJsonPhComment from '../models/IJsonPhComment.ts';

const DUMMY = import.meta.env.VITE_BASE_DUMMY_URL;
const JSONPH = import.meta.env.VITE_BASE_JSON_PH_URL;

const getJSON = <T>(url: string): Promise<T> =>
  fetch(url).then((res) => res.json());

// --- Dummy API ---
export const getDummyProducts = () =>
  getJSON<DummyProductsResponse>(`${DUMMY}/products`);

export const getDummyUsers = () =>
  getJSON<DummyResponse & { users: IDummyUser[] }>(`${DUMMY}/users`);

export const getDummyPosts = () =>
  getJSON<DummyResponse & { posts: IDummyPost[] }>(`${DUMMY}/posts`);

export const getDummyComments = () =>
  getJSON<DummyResponse & { comments: IDummyComment[] }>(`${DUMMY}/comments`);

// --- JSONPlaceholder ---
export const getJsonPhUsers = () => getJSON<IJsonPhUser[]>(`${JSONPH}/users`);

export const getJsonPhPosts = () => getJSON<IJsonPhPost[]>(`${JSONPH}/posts`);

export const getJsonPhComments = () =>
  getJSON<IJsonPhComment[]>(`${JSONPH}/comments`);
