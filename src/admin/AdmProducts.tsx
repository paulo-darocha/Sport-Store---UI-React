import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReduxType } from "../dataStore/reduxStore";
import useCategories from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";
import ICategory from "../models/ICategory";
import IProduct from "../models/IProduct";


const AdmProducts = () => {
  const products: Array<IProduct> = useSelector((dataStore: ReduxType) => dataStore.products);
  const categorias = useSelector((dataStore: ReduxType) => dataStore.categories);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [catRows, setCatRows] = useState<Array<JSX.Element> | undefined>();
  const [textArea, setTextArea] = useState("");
  const [catSelected, setCatSelected] = useState("Geral");
  const [imagem, setImagem] = useState();
  const [imgSrc, setImgSrc] = useState("");
  const [description, setDescription] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { loadCategories } = useCategories();
  const { createProduct, deleteProduct } = useProducts();

  useEffect(() => {
    loadCategories();
  }, []);

  const onClickDeleteProduct = (id?: string) => {
    deleteProduct(id);
  };

  useEffect(() => {
    if (products && products.length > 0) {
      const cards = products.map((product: IProduct) => {
        return <tr key={product._id}>
          <td>
            <img src={product.image} alt="IMAGEM" width="50px" height="50px" />
          </td>
          <td><span style={{fontSize: "0.7em"}}>{product._id || "00000000000000"}</span></td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>
            <button className="btn btn-sm btn-outline-danger"
              onClick={() => onClickDeleteProduct(product._id)}
            >
              delete
            </button>
          </td>
        </tr>
      });
      setCatRows(cards);
    }
  }, [categorias]);

  const onChangeProductName = (e: any) => {
    setProductName(e.target.value);
    setDisabled(false);
    if (!e.target.value) { setDisabled(true) }
  };

  const onChangeCategory = (e: any) => {
    setCatSelected(e.target.value);
    setDisabled(false);
    if (!e.target.value) { setDisabled(true) }
  };

  const onChangePrice = (e: any) => {
    setPrice(e.target.value);
    setDisabled(false);
    if (!e.target.value) { setDisabled(true) }
  };

  const onChangeTextArea = (e: any) => {
    setTextArea(e.target.value);
    setDisabled(false);
    if (!e.target.value) { setDisabled(true) }
  };

  const onChangeImagem = (e: any) => {
    setImagem(e.target.files[0]);
    setImgSrc(URL.createObjectURL(e.target.files[0]));
  };

  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
    setDisabled(false);
    if (!e.target.value) { setDisabled(true) }
  };

  const onClickCriarProduto = () => {
    const catId = categorias.find((cat: ICategory) => cat.name === catSelected);

    let newProduct: IProduct = {
      name: productName,
      categoryId: catId._id,
      description: description,
      price: price,
      detail: textArea
    }
    // createNewProduct(newProduct, imagem);
    console.log("NEW PRODUCT", newProduct);
    createProduct(imagem, newProduct);
  }

  return (
    <div className="row">
      <h3 className="text-center">PRODUTOS</h3>

      <div className="col-sm-3 border border-danger p-4 m-3 text-start">
        <h5>Criar Novo Produto</h5>
        <div className="form-group">

          <label className="form-label">Nome</label>
          <input className="form-control"
            name="name"
            value={productName}
            onChange={onChangeProductName}
          />

          <div>
            <label className="form-label mt-3">Categoria</label><br />
            <select
              className="form-control"
              name="categoria"
              onChange={onChangeCategory}
              value={catSelected}
            >
              {categorias && categorias.length > 0 ? (categorias.map((cat: ICategory) =>
                <option value={cat.name} key={cat.name}>
                  {cat.name}
                </option>
              )) : null}
            </select>
            {catSelected}
          </div>

          <br />
          <label className="form-label">Descrição</label>
          <input className="form-control"
            name="description"
            value={description}
            onChange={onChangeDescription}
          />

          <label className="form-label mt-2">Preço</label>
          <input className="form-control"
            type="number"
            name="price"
            value={price}
            onChange={onChangePrice}
          />

          <label className="form-label mt-2">Detalhes</label>
          <textarea
            className="form-control" rows={5}
            value={textArea}
            onChange={onChangeTextArea}
          />
          <br />

          <label>Imagem</label>
          <input type="file" accept="image/png, image/gif, image/jpeg"
            onChange={onChangeImagem}
          />

          {imagem ? <div>
            <img src={imgSrc} alt="IMAGEM" width="75%" height="auto" className="m-3" />
          </div> : null}
          <div className="text-end">
            {/* <span className="float-start mt-5">{aviso}</span> */}
            <button className="btn btn-danger mt-5"
              onClick={onClickCriarProduto}
              disabled={disabled}
            >
              Criar Produto
            </button>
          </div>
        </div>
      </div>

      <div className="col-sm-8 m-3 border border-danger">
        <table className="table table-striped text-start mt-2">
          <thead>
            <th />
            <th>#Ref.</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th></th>
          </thead>
          <tbody>
            {catRows}
          </tbody>
        </table>
      </div>

    </div>

  );
};

export default AdmProducts;