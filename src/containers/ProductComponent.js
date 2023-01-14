import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.productReducer.products);
  console.log(products, "stateData");
  return (
    <>
      {products.length === 0 && (
        <div style={{ marginTop: "50px" }}>...Loading</div>
      )}
      {products.map((e) => (
        <div className="four wide column" key={e.id}>
          <Link to={`/product/${e.id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={e.image} alt={e.title} />
                </div>
                <div className="content">
                  <div className="header">{e.title}</div>
                  <div className="meta price">$ {e.price}</div>
                  <div className="meta">{e.category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProductComponent;
