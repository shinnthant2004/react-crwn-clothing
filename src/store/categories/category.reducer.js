import CATEGORIES_ACTION_TYPES from "./category.types";

export const CATEGORIES_INITAL_STATE = {
  categories: [],
};
export const categoriesReducer = (state = CATEGORIES_INITAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
