import { configureStore } from "@reduxjs/toolkit";
import {
  productReducer,
  selectedProductsReducer,
} from "./reducers/productReducer";
export const store = configureStore({
  reducer: {
    productReducer,
    selectedProductsReducer,
  },
});
