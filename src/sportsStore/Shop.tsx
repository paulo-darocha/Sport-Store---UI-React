import { useEffect } from "react";
import CategoryNavigation from "./categories/CategoriesNavigation";
import ProductList from "./products/ProductList";
import Navigation from "./Navigation";
import useCategories from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";

const Shop = () => {
  const { loadCategories } = useCategories();
  const { loadProducts } = useProducts();

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  return (
    <div className="container-fluid" style={{ backgroundColor: "azure" }}>
      <Navigation />
      <div className="row">
        <div className="col-sm-2">
          <CategoryNavigation />
        </div>
        <div className="col-sm-10">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Shop;