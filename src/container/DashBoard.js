import React from "react";
import ProductCart from "../components/ProductCart";
import ProductList from "../data/ProductList";

function DashBoard() {
  return (
    <div>
      <div
        className="d-flex flex-wrap justify-content-center p-3 "
        style={{ marginTop: 125 }}
      >
        {ProductList.map((product) => (
          <ProductCart {...product} key={product.sku} />
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
