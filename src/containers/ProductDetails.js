import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/actionProducts";

function ProductDetails() {
  const products = useSelector(
    (state) => state.selectedProductsReducer.products
  );
  console.log(products, "select");
  const { image, title, price, category, description } = products;
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId && productId !== "") dispatch(selectedProduct(productId));
    // dispatch(removeSelectedProduct());
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(products).length === 0 ? (
        <div style={{ marginTop: "50px" }}>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
