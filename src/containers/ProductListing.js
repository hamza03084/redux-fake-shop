import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/actionProducts";

function ProductListing() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(setProducts()), []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
