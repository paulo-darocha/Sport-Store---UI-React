import IProduct from "./IProduct";

export interface Cart {
  product: IProduct,
  quantity: number
}

export default class ICart {
  constructor (
    public cart: Array<Cart> = [],
    public cartItems: number = 0,
    public cartPrice: number = 0,
  ) {
    
  }
}