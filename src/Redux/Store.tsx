import { configureStore } from "@reduxjs/toolkit"
import PostReducer from "./Posts/PostReducer"
import FooterReducer from "./Posts/FooterReducer"
import HeaderReducer from "./Posts/HeaderReducer"
import ProductReducer from "./Posts/ProductReducer"
import UserReducer from "./Posts/UserReducer"
const store = configureStore({
  reducer: {
    home: PostReducer,
    footer: FooterReducer,
    header: HeaderReducer,
    product: ProductReducer,
    user: UserReducer
  }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store