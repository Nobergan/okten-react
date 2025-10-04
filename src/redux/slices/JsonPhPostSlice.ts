import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit';
import { getAll } from '../../services/api.service.ts';
import type IJsonPhPost from '../../models/IJsonPhPost.ts';
import { ApiSource } from '../../models/constants/ApiSource.ts';

type PostSliceType = {
  posts: IJsonPhPost[];
  loading: boolean;
  error: string | null;
  lastFetch: number | null;
};
const initPostSliceState: PostSliceType = {
  posts: [],
  loading: false,
  error: null,
  lastFetch: null
};

const loadPosts = createAsyncThunk<IJsonPhPost[]>(
  'loadJsonPhPosts',
  async (_, thunkAPI) => {
    const posts = await getAll<IJsonPhPost[]>(ApiSource.Posts);
    return thunkAPI.fulfillWithValue(posts);
  }
);

export const jsonPhPostSlice = createSlice({
  name: 'jsonPhPostSlice',
  initialState: initPostSliceState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loadPosts.fulfilled,
        (state, action: PayloadAction<IJsonPhPost[]>) => {
          state.loading = false;
          state.posts = action.payload;
          state.lastFetch = Date.now();
        }
      )
      .addCase(loadPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to load posts';
      })
});

export const jsonPhPostAction = { ...jsonPhPostSlice.actions, loadPosts };
