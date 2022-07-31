import { combineReducers } from "redux";
import { CartsReducer } from "./carts/cart.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  carts: CartsReducer,
});
