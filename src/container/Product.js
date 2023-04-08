import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ProductList from "../data/ProductList";
import { addItem } from "../redux/reducer/cart";

function Product() {
  const para = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alert, setAlert] = useState(false);
  const list = useSelector((state) => state.cart.list);

  const item = ProductList.find(
    (element) => element.sku === parseInt(para.sku)
  );

  const element = list.find((items) => items.sku === item.sku);

  const addToCart = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
    dispatch(addItem(item));
  };
  return (
    <div className="card m-2  ">
      {alert && <span className="alert alert-success">Item added to cart</span>}
      <div className="" style={{ marginTop: 130 }}>
        <img
          src={item.image}
          alt={item.type}
          height={140}
          width={170}
          className="border-radius-9"
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <h6>Price : {`$${item.price}`}</h6>
          <h6>Shipping : {`$${item.shipping}`}</h6>
          <h6>Model : {item.model}</h6>
        </div>
        <div className="mb-3">
          {item.stock > 0 ? (
            <>
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate(`/checkout/${item.sku}`)}
              >
                Buy
              </button>
              {element?.count > 0 ? (
                <button
                  className="ms-2 btn btn-outline-warning"
                  onClick={() => navigate("/carts")}
                >
                  Go to Cart
                </button>
              ) : (
                <button className="ms-2 btn btn-primary" onClick={addToCart}>
                  Add to Cart
                </button>
              )}
            </>
          ) : (
            <button className="btn btn-danger"> Out of stock</button>
          )}
        </div>
      </div>
      {alert && <span className="alert alert-success">Item added to cart</span>}
    </div>
  );
}

export default Product;
