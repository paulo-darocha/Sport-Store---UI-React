import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_PRODUCT } from "../dataStore/ProductsReducer";
import IProduct from "../models/IProduct";

const useProducts = () => {
  const url = "http://localhost:5100";
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Array<IProduct> | null>(null);

  useEffect(() => {
    if (products && products.length > 0) {
      for (let i = 0; i < products.length; i++) {
        const _id = products[i]._id

        if (_id) {
          axios.get(`${url}/image/${_id}`, {
            responseType: "blob"
          }).then(response => {
            const payload = {
              ...products[i],
              image: URL.createObjectURL(response.data)
            }
            dispatch({
              type: ADD_PRODUCT,
              payload
            });
          });
        }
      }
    }
  }, [products]);

  const loadProducts = () => {
    axios.get(`${url}/products`).then(response => {
      setProducts(response.data);
    })
  };

  const createProduct = (imagem: any, product: IProduct) => {
    // console.log("PRODUCT", newProduct);
    const formData = new FormData();
    formData.append("imagem", imagem);
    axios.post(`${url}/uploadimagem`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    let newProduct = {
      ...product,
      image: imagem.name
    }
    axios.post(`${url}/createproduct`, newProduct).then(() => loadProducts());
  };


  const deleteProduct = (id?: string) => {
    if (id) {
      const _id = {
        id: id
      }
      console.log("DELETE PRODUCT ID", _id);
      axios.post(`${url}/deleteproduct`, _id).then(() => loadProducts());
    }
  };


  return { createProduct, loadProducts, deleteProduct };
};

export default useProducts;