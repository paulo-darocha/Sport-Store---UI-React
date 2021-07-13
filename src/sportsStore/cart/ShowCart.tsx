import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReduxType } from "../../dataStore/reduxStore";
import ICart from "../../models/ICart";

const ShowCart = () => {
  const cart: ICart = useSelector((dataStore: ReduxType) => dataStore.cart);
  const [items, setItems] = useState(0);

  useEffect(() => {
    if (cart) {
      setItems(cart.cartItems)
    }
  }, [cart]);

  const getItems = () => {
    if (items > 0) {
      return <span>
        <Link to="/cart" className="text-white" style={{textDecoration: "none"}}>
          <div className="text-end">
            <i className="fa fa-shopping-cart mx-2"></i>
          </div>
          <div style={{fontSize: "0.7em"}}>
            {items} item(s),
            ${cart.cartPrice.toFixed(2)}
          </div>
        </Link>
      </span>
    } else {
      return <span>
        <i className="fa fa-shopping-cart mx-2"></i>
        <small>(vazio)</small>
      </span>
    }
  };

  return (
    <div className="float-end">
      
      {getItems()}
    </div>
  );
};

export default ShowCart;