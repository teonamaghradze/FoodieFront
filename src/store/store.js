import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shoppingCart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
