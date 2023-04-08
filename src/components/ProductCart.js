import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductList from "../data/ProductList";
import { addItem } from "../redux/reducer/cart";

function ProductCart(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.cart.list);

  const addToCart = () => {
    const items = ProductList.find((element) => element.sku === props.sku);
    dispatch(addItem(items));
  };
  const element = list.find((i) => i.sku === props.sku);

  return (
    <div className="card m-2 me-4" style={{ width: 300 }}>
      <div className="mt-2">
        <div
          className=" cursor-pointer "
          role="button"
          onClick={() => navigate(`/product/${props.sku}`)}
        >
          <img
            src={props.image}
            alt={props.type}
            height={140}
            width={170}
            className="border-radius-9"
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h6>Price : {`$${props.price}`}</h6>
            <h6>Shipping : {`$${props.shipping}`}</h6>
            <h6>Model : {props.model}</h6>
          </div>
        </div>
        <div className="mb-3">
          {props.stock > 0 ? (
            <>
              {element?.count > 0 ? (
                <button
                  className="ms-2 btn btn-warning"
                  onClick={() => navigate(`/product/${props.sku}`)}
                >
                  Added to Cart
                </button>
              ) : (
                <button className="ms-2 btn btn-primary" onClick={addToCart}>
                  Add to Cart
                </button>
              )}
            </>
          ) : (
            <button
              className="btn btn-outline-danger"
              onClick={() => navigate(`/product/${props.sku}`)}
            >
              {" "}
              Out of stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
