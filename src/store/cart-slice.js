import { createSlice } from "@reduxjs/toolkit";

const intitialCart = {
  totalQuantity: 0,
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: intitialCart,
  reducers: {
    replaceCart(state, action) {
      const cartData = action.payload;
      state.items = cartData.items ?? [];
      state.totalQuantity = cartData.totalQuantity;
    },
    addCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((element) => element.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((element) => element.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((element) => element.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
