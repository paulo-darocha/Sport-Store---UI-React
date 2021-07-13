import { combineReducers, createStore } from "redux";
import { CartReducer } from "./CartReducer";
import { CategoriesReducer } from "./CategoriesReducer";
import { ProductReducer } from "./ProductsReducer";


const rootReducer = combineReducers({
  products: ProductReducer,
  categories: CategoriesReducer,
  cart: CartReducer
});
export type ReduxType =  ReturnType<typeof rootReducer>;


const reduxStore = () => {
  return createStore(rootReducer, {});
};
export default reduxStore;