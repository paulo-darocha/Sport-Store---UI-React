import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { useLarguraTela } from "../../hooks/useLarguraTela";
import IProduct from "../../models/IProduct";
import { ReduxType } from "../../dataStore/reduxStore";
import "./ProductList.css";


const ProductList = () => {
  const allProducts: Array<IProduct> =
    useSelector((reduxStore: ReduxType) => reduxStore.products);

  const [products, setProducts] = useState<Array<IProduct> | undefined>();
  const [cards, setCards] = useState<Array<JSX.Element> | undefined>();
  const { cat }: any = useParams();
  const { largura } = useLarguraTela();
  const history = useHistory();

  const larguraCard = () => {
    if (largura < 576) {
      return "83%"
    } else {
      return "14em"
    }
  }

  const addToCart = (product: IProduct) => {
    if (product._id && parseInt(product._id) > 0) {
      history.push(`/product/${product._id}`);
    }
  };

  useEffect(() => {
    let productsByCat: Array<IProduct> = [];
    if (allProducts && cat !== "all" && allProducts.length > 0) {
      productsByCat = allProducts.filter((product: IProduct) =>
        product.categoryId === cat);
    } else {
      productsByCat = allProducts;
    }
    setProducts(productsByCat);
  }, [cat, allProducts]);

  useEffect(() => {
    if (products == null || products.length === 0) {
      setCards([<div>No Products</div>]);
    }
    if (products && products.length > 0) {
      const currentProducts = products.map((product: IProduct) => {
        return <section key={product._id}
          className="card mx-2 mt-3 border border-success justify-content-md-between"
          style={{ width: larguraCard() }}
        >
          <Link to={`/product/${product._id}`}
            style={{ textDecoration: "none" }}
            className="text-dark"
          >
            <h5 className="card-header text-white"
              style={{
                backgroundColor: "springgreen",
                marginLeft: "-12px", marginRight: "-12px"
              }}
            >
              oferta
            </h5>
            <div className="my-3 mx-1">
              <img src={product.image} alt="FOTO"
                height="120em" style={{ maxWidth: "10em" }} />
            </div>
            <div className="card-body text-start">
              <h5 className="card-title">
                {product.name}
              </h5>
              <p className="card-text">
                {product.description}
              </p>
            </div>
          </Link>
          <div className="border">
            <h5 className="card-text">
              <span className="float-start my-3 ms-2">
                ${product.price.toFixed(2)}
              </span>
              <button className="btn btn-sm btn-success float-end my-3 me-2"
                onClick={() => addToCart(product)}
              >
                Adicionar
              </button>
            </h5>
          </div>

        </section>
      });
      setCards(currentProducts);
    }
  }, [products]);

  return (
    <div className="row d-flex justify-content-center">
      {cards}
    </div>
  );

};

export default ProductList;