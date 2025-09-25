import { configureStore } from '@reduxjs/toolkit'
import CartReducer from "../redux/cart/CartSlice"
import categoryReducer from "../redux/cart/CategorySlice"


export const store = configureStore({
  reducer: {
    cart:CartReducer,
     category: categoryReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store