const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
export const selectedProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    case "REMOVE_SELECTED_PRODUCT":
      return {};
    default:
      return state;
  }
};
