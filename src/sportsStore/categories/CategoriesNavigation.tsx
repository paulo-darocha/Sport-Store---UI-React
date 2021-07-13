import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ICategory from "../../models/ICategory";
import { ReduxType } from "../../dataStore/reduxStore";

const CategoryNavigation = () => {
  const categories = useSelector((reduxStore: ReduxType) => reduxStore.categories);
  const [cats, setCats] = useState<Array<JSX.Element> | undefined>();

  useEffect(() => {
    if (categories && categories.length > 0) {
      const currentCats = categories.map((cat: ICategory) => {
        return <Link key={`cat-${cat._id}`}
          to={`/category/${cat._id}`} 
        >
            <button className="btn btn-sm fw-bold mt-1" 
              style={{width: "100%", backgroundColor: "springgreen"}}
            >
              {cat.name}
            </button>
          </Link>
      });
      setCats(currentCats);
    }
  }, [categories]);

  return (
    <div className="d-grid gap-2 my-3 mx-sm-0 mx-4">
      <Link to="/category/all">
        <button className="btn btn-sm fw-bold" 
          style={{width: "100%", backgroundColor: "springgreen"}}
        >
          All
        </button>
      </Link>
      {cats}
    </div>
  );
};

export default CategoryNavigation;