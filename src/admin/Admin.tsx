import { useState } from "react";
import Navigation from "../sportsStore/Navigation";
import AdmCategories from "./AdmCategories";
import AdmProducts from "./AdmProducts";


const Admin = () => {
  const [aba, setAba] = useState(0);

  return (
    <div className="container-fluid">
      <Navigation />
        <h2 className="text-center">ADMINSTRAÇÃO</h2> <hr />
        <button className="m-4" onClick={() => setAba(1)}>
          Categorias
        </button>
        <button className="m-4" onClick={() => setAba(2)}>
          Produtos
        </button>
        <button className="m-4">
          Pedidos
        </button>
        <hr />
        {aba === 1 ? (<AdmCategories />) : null}
        {aba === 2 ? (<AdmProducts />) : null}
    </div>
  );
};

export default Admin;