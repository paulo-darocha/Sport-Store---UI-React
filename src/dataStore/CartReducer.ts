import ICart, { Cart } from "../models/ICart";

export const ADD_TO_CART = "addToCart"
export const REMOVE_PRODUCT = "removeProduct"

interface CartAction {
  type: string,
  payload: Cart
}

export const CartReducer = (
  dataStore: ICart, action: CartAction
) => {

  let newStore = { ...dataStore };
  if (Object.keys(newStore).length === 0) {
    newStore = { cart: [], cartItems: 0, cartPrice: 0 }
  }

  switch (action.type) {
    case ADD_TO_CART:
      const p = action.payload?.product;
      const q = action.payload.quantity;
      let existing = newStore.cart.find(item => item.product._id === p._id);
      if (existing) {
        existing.quantity += q;
      } else {
        newStore.cart = [...newStore.cart, action.payload]
      }
      newStore.cartItems += q;
      newStore.cartPrice += p.price * q;
      return newStore;

    case REMOVE_PRODUCT:
      let selection = newStore.cart.find(item =>
        item.product._id === action.payload.product._id);
      if (selection) {
        console.log("SELECTION", selection);
        newStore.cartItems -= selection?.quantity;
        newStore.cartPrice -= selection?.quantity * selection?.product.price;
        newStore.cart = newStore.cart.filter(item =>
          item.product._id !== action.payload.product._id);
        console.log("FINAL STORE", newStore);
      }
      console.log("FINAL STORE", newStore);
      return newStore;

    default:
      return newStore || {};
  }
};