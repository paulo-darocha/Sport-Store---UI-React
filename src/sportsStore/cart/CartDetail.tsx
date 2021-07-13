import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART, REMOVE_PRODUCT } from "../../dataStore/CartReducer";
import { ReduxType } from "../../dataStore/reduxStore";
import ICart from "../../models/ICart";
import IProduct from "../../models/IProduct";
import Navigation from "../Navigation";

const CartDetail = () => {
  const cart: ICart = useSelector((dataStore: ReduxType) => dataStore.cart);
  const [cardCart, setCardCart] = useState<Array<JSX.Element>>();
  const reduxDispatch = useDispatch();

  const onClickMinus = (product: IProduct, quantity: number) => {
    if (quantity > 1) {
      reduxDispatch({
        type: ADD_TO_CART,
        payload: {
          product,
          quantity: -1
        }
      });
    }
  };

  const onClickPlus = (product: IProduct) => {
    reduxDispatch({
      type: ADD_TO_CART,
      payload: {
        product,
        quantity: 1
      }
    });
  };

  const onClickRemover = (product: IProduct) => {
    reduxDispatch({
      type: REMOVE_PRODUCT,
      payload: {
        product,
        quantity: 0
      }
    });
  };

  useEffect(() => {
    if (cart) {
      const cartByProduct = cart.cart.map(item => {
        return <tr key={item.product._id}>
          <td>
            <img src={item.product.image} alt="IMAGEM" width="50px" height="50px" className="my-2" />
          </td>
          <td className="text-start m-2 h6">
            {item.product.name}<br />
            <small className="text-secondary">{item.product.description}</small>
          </td>
          <td>
            <small>
              <i className="fa fa-minus mx-2" style={{cursor: "pointer"}}
                onClick={() => onClickMinus(item.product, item.quantity)}
              ></i>
            </small>
            <input className="text-center"
              style={{ maxWidth: "30px" }}
              value={item.quantity} disabled
            />
            <small><i className="fa fa-plus mx-2"  style={{cursor: "pointer"}}
              onClick={() => onClickPlus(item.product)}
            ></i></small>
          </td>
          <td>{item.product.price.toFixed(2)}</td>
          <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          <td>
            <button className="btn btn-sm btn-outline-secondary"
              onClick={() => onClickRemover(item.product)}
            >
              remover
            </button>
          </td>
        </tr>
      });
      setCardCart(cartByProduct)
    }
  }, [cart, reduxDispatch]);

  return (
    <div className="container-sm">
      <Navigation />
      <div className="row">

        <div className="col-sm-9">
          <h3 className="m-4">Meu Carrinho</h3>
          <table className="table table-sm align-middle p-2">
            <thead>
              <tr style={{ backgroundColor: "greenyellow" }}>
                <th>Product</th>
                <th></th><th>qtd.</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cardCart}
            </tbody>
          </table>
        </div>

        <div className="col-sm-3 mt-1">
          <div className="border border-success text-start p-4"
            style={{ marginTop: "80px", backgroundColor: "#eee" }}>
            <div className="mt-2">RESUMO DO PEDIDO</div><br />
            <span>{cart.cartItems} produtos </span>
            <span className="float-end">${(cart.cartPrice).toFixed(2)}</span>
            <hr />
            <div className="fw-bold">
              Total
              <span className="float-end">${(cart.cartPrice).toFixed(2)}</span>
            </div>
            <hr />
            <div className="text-center">
              <button className="btn btn-danger m-4 w-75">
                Concluir compra
              </button>
              <Link to="/products" className="text-secondary">Continuar comprando</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;