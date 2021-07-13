import ICategory from "../models/ICategory";

export const CATEGORIES = "categories";
export const LOAD_CATEGORIES = "loadCategories";


interface CategoriesAction {
  type: string,
  payload: Array<ICategory> | null
}

export const CategoriesReducer = (
  reduxStore: any, action: CategoriesAction
) => {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return action.payload;

    default:
      return reduxStore || {};
  }
};