import axios from "axios";

export const setProducts = () => (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      dispatch({
        type: "SET_PRODUCTS",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const selectedProduct = (id) => (dispatch) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      dispatch({
        type: "SELECTED_PRODUCT",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const removeSelectedProduct = () => {
  return {
    type: "REMOVE_SELECTED_PRODUCT",
  };
};
