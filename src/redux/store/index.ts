import rootReducer from "../slices";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
 reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootReducerState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



