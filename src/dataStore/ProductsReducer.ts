import IProduct from "../models/IProduct";

export const PRODUCTS = "products";
export const ADD_PRODUCT = "addProduct";

interface ProductAction {
  type: string,
  payload: IProduct
}

export const ProductReducer = (
  dataStore: Array<IProduct>, action: ProductAction
) => {
  let newStore: Array<IProduct> = [];
  if (dataStore && dataStore.length > 0) {
    newStore = dataStore;
  }
  switch (action.type) {
    case ADD_PRODUCT:
      console.log("PRODUCT REDUCER PAYLOAD", action.payload);
      newStore = newStore.filter(item => (
        item._id !== action.payload._id));
      newStore.push(action.payload);
      console.log(newStore)
      return newStore;

    default:
      return dataStore || {};
  }
};