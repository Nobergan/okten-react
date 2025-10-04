import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { jsonPhCommentSlice } from './slices/JsonPhCommentSlice.ts';
import { jsonPhPostSlice } from './slices/JsonPhPostSlice.ts';

export const store = configureStore({
  reducer: {
    postStoreSlice: jsonPhPostSlice.reducer,
    commentStoreSlice: jsonPhCommentSlice.reducer
  }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();
