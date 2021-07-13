import { Link } from "react-router-dom";
import { useLarguraTela } from "../hooks/useLarguraTela";
import ShowCart from "./cart/ShowCart";


const Navigation = () => {
  const {largura} = useLarguraTela();

  const getHome = () => {
    if (largura > 576) {
      return <span className="nav-item">
        <Link to="/" className="text-white mx-2">
          <i className="fa fa-home mx-1" />
          <span>Home</span>
        </Link>
        <Link to="/admin" className="text-white mx-2">
          <i className="fa fa-business-time m-2" />
          <small>adm</small>
        </Link>
      </span>
    } else {
      return <span className="nav-item mx-2">
      <Link to="/" className="text-white">
        <i className="fa fa-home"></i>
      </Link>
    </span>
    }
  }

  return (
    <nav className="row text-start">
      <div className="col bg-success text-white navbar-brand"
        style={{marginRight: "-20px"}}
      >
        {getHome()}
        <span className="ms-2">
          LOJA DE ESPORTES
        </span>
        <ShowCart />
      </div>
    </nav>
  );
};

export default Navigation;