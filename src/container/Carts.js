import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductListItems from "../components/ProductListItems";
import { modifyItem, removeItem } from "../redux/reducer/cart";

export default function Carts() {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };
  const decrementItem = (item) => {
    if (item.count > 1) {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };
  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div style={{ marginTop: 130 }}>
      {list.length > 0 ? (
        <>
          {list.map((item) => (
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
            onClick={() => navigate("/checkOut")}
          >
            CheckOut
          </button>
        </>
      ) : (
        <h3>Add items to the Cart </h3>
      )}
    </div>
  );
}
