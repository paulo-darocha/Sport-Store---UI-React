import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ReduxType } from "../dataStore/reduxStore";
import useCategories from "../hooks/useCategories";
import ICategory from "../models/ICategory";


const AdmCategories = () => {
  const categorias = useSelector((dataStore: ReduxType) => dataStore.categories);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescripion] = useState("");
  const [catRows, setCatRows] = useState<Array<JSX.Element> | undefined>();
  const { deleteCategory, createCategory } = useCategories();
  const { loadCategories } = useCategories();

  const onClickDeleteCategory = (id?: string) => {
    deleteCategory(id);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (categorias && categorias.length > 0) {
      const cards = categorias.map((cat: ICategory) => {
        return <tr key={cat._id}>
          <td><span style={{fontSize: "0.7em"}}>
            {cat._id}
          </span></td>
          <td>{cat.name}</td>
          <td>{cat.description}</td>
          <td>
            <button className="btn btn-sm btn-outline-danger"
              onClick={() => onClickDeleteCategory(cat._id)}
            >
              delete
            </button>
          </td>
        </tr>
      });
      setCatRows(cards);
    }
  }, [categorias]);

  const onChangeCategoryName = (e: any) => {
    setCategoryName(e.target.value)
  };

  const onChangeCategoryDescription = (e: any) => {
    setCategoryDescripion(e.target.value);
  };

  const onClickEnviarCategoria = () => {
    let dados: ICategory = {
      name: categoryName,
      description: categoryDescription
    };
    createCategory(dados);

  };

  return (
    <div className="row">
      <h3 className="text-center">CATEGORIAS</h3>

      <div className="col-sm-4 border border-danger p-4 m-2 text-start">
        <h5>Criar Nova Categoria</h5>
        <div className="form-group">
          <label className="form-label">Nome</label>
          <input className="form-control"
            name="name"
            value={categoryName}
            onChange={onChangeCategoryName}
          />
          <label className="form-label mt-3">Descrição</label>
          <input className="form-control"
            name="description"
            value={categoryDescription}
            onChange={onChangeCategoryDescription}
          />
          <div className="text-end">
            {/* <span className="float-start mt-5">{aviso}</span> */}
            <button className="btn btn-danger mt-5"
              onClick={onClickEnviarCategoria}
            >
              Criar Categoria
            </button>
          </div>
        </div>
      </div>

      <div className="col-sm-7 m-2 border border-danger">
        <table className="table table-striped text-start mt-2">
          <thead>
            <th>#Ref.</th>
            <th>Nome</th>
            <th>Descrição</th>
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

export default AdmCategories;