import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ProductListItems from "../components/ProductListItems";
import ProductList from "../data/ProductList";

export default function CheckOut() {
  const list = useSelector((state) => state.cart.list);
  const navigate = useNavigate();
  const params = useParams();
  const [state, setState] = useState(
    params.sku
      ? [
          {
            ...ProductList.find(
              (element) => element.sku === parseInt(params.sku)
            ),
            count: 1,
          },
        ]
      : list
  );

  const incrementItem = (item) => {
    const index = state.findIndex((product) => product.sku === item.sku);
    setState((state) => [
      ...state.slice(0, index),
      { ...item, count: item.count + 1 },
      ...state.slice(index + 1),
    ]);
  };
  const decrementItem = (item) => {
    if (item.count === 1) {
      removeItemFromCart(item);
    } else {
      const index = state.findIndex((product) => product.sku === item.sku);
      setState((state) => [
        ...state.slice(0, index),
        { ...item, count: item.count - 1 },
        ...state.slice(index + 1),
      ]);
    }
  };
  const removeItemFromCart = (item) => {
    const index = state.findIndex((product) => product.sku === item.sku);
    setState((state) => [...state.slice(0, index), ...state.slice(index + 1)]);
  };
  return (
    <div style={{ marginTop: 130 }}>
      {state.length > 0 ? (
        <>
          {state.map((item) => (
            <ProductListItems
              {...item}
              key={item.sku}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemFromCart(item)}
            />
          ))}
          <button
            className="btn btn-primary"
            onClick={() => navigate("/success")}
          >
            Place Order
          </button>
        </>
      ) : (
        <h3>Add items to checkout </h3>
      )}
    </div>
  );
}
