import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import IProduct from "../../models/IProduct";
import { ReduxType } from "../../dataStore/reduxStore";
import Navigation from "../Navigation";
import { ADD_TO_CART } from "../../dataStore/CartReducer";

const ProductDetail = () => {
  const { id }: any = useParams();
  const reduxDispatch = useDispatch();
  const products: Array<IProduct> = useSelector((dataStore: ReduxType) => dataStore.products);
  const [product, setProduct] = useState<IProduct>();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
      if (products && products.length > 0) {
        console.log('USE EFFECT');
        const productById = products.find((p: IProduct) => p._id == id);
        setProduct(productById);
      }
  }, [id, products]);

  const addToCart = (product: IProduct) => {
    if (product._id && parseInt(product._id) > 0) {
      reduxDispatch({
        type: ADD_TO_CART,
        payload: {
          product,
          quantity: 1
        }
      });
    }
  };


  const onClickComprar = (product: IProduct) => {
    addToCart(product);
    history.push("/cart");
  };

  return (
    <div className="container-sm">
      <Navigation />
      <div className="row"
        style={{ backgroundColor: "azure", paddingTop: "20px" }}
      >
        <div className="col-sm-6 py-3 justify-content-center">
          <img src={product?.image} alt="FOTO" style={{ maxWidth: "80%" }} />
        </div>
        <div className="col-sm-6 py-3">
          <div className="card-body my-3">
            <h4 className="card-title">{product?.name}</h4>
            <h5 className="card-text my-3">{product?.description}</h5>
            <p className="card-text my-3 text-start">{product?.detail}</p>
            <h4 className="card-text my-3">${product?.price.toFixed(2)}</h4>
            <div className="d-inline-flex mt-2 text-center">
              <button className="btn btn-primary m-3"
                style={{width: "120px"}}
                onClick={() => history.goBack()}
              >
                Voltar
              </button>
              {product ? <button className="btn btn-danger m-3"
                style={{width: "120px"}}
                onClick={() => onClickComprar(product)}
              >
                Comprar
              </button> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;