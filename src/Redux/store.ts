import { configureStore } from '@reduxjs/toolkit'
import SearchWithItemOrTrend from './Slices/SearchWithItemOrTrend'

export const store = configureStore({
  reducer: {
    searchWithItemOrTrend : SearchWithItemOrTrend
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch