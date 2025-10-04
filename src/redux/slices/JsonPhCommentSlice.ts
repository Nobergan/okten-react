import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit';
import { getAll } from '../../services/api.service.ts';
import type IJsonPhComment from '../../models/IJsonPhComment.ts';
import { ApiSource } from '../../models/constants/ApiSource.ts';

type CommentSliceType = {
  comments: IJsonPhComment[];
  loading: boolean;
  error: string | null;
  lastFetch: number | null;
};
const initCommentSliceState: CommentSliceType = {
  comments: [],
  loading: false,
  error: null,
  lastFetch: null
};

const loadComments = createAsyncThunk('loadPosts', async (_, thunkAPI) => {
  const comments = await getAll<IJsonPhComment[]>(ApiSource.Comments);
  return thunkAPI.fulfillWithValue(comments);
});

export const jsonPhCommentSlice = createSlice({
  name: 'jsonPhCommentSlice',
  initialState: initCommentSliceState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loadComments.fulfilled,
        (state, action: PayloadAction<IJsonPhComment[]>) => {
          state.loading = false;
          state.comments = action.payload;
          state.lastFetch = Date.now();
        }
      )
      .addCase(loadComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to load comments';
      })
});

export const jsonPhCommentActions = {
  ...jsonPhCommentSlice.actions,
  loadComments
};
