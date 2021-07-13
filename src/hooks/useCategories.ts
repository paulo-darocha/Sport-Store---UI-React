import axios from "axios";
import { useDispatch } from "react-redux";
import { LOAD_CATEGORIES } from "../dataStore/CategoriesReducer";
import ICategory from "../models/ICategory";

const useCategories = () => {
  const url = "http://localhost:5100/";
  const dispatch = useDispatch();

  const loadCategories = () => {
    axios.get(`${url}categories`).then(response => {
      dispatch({
        type: LOAD_CATEGORIES,
        payload: response.data
      })
    })
  };

  const deleteCategory = (id?: string) => {
    if (id) {
      const _id = {
        id: id
      }
      axios.post(`${url}deletecategory`, _id).then(resposta =>
        loadCategories());
    }
  };

  const createCategory = (dados: ICategory) => {
    axios.post(`${url}category`, dados).then(resposta => {
      loadCategories();
    });
  };
  
  return { loadCategories, deleteCategory, createCategory }
};
export default useCategories;