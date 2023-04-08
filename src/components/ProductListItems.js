import React from "react";

export default function ProductListItems(props) {
  return (
    <div className="d-flex m-4 align-items-center justify-content-center">
      <img
        src={props.image}
        alt={props.type}
        height={140}
        width={170}
        className="border-radius-9 me-4"
      />
      <h5 className="card-title me-4">{props.name}</h5>
      <h6 className="mt-2 me-4">Price : {`$${props.price}`}</h6>
      <h6 className="mt-2 me-4">Shipping : {`$${props.shipping}`}</h6>
      <h6 className="mt-2 me-4">Model : {props.model}</h6>
      <button
        className="ms-2 btn btn-danger ms-3"
        onClick={props.decrementItem}
      >
        -
      </button>
      <span className="ms-3">Quantity : {props.count}</span>
      <button
        className="ms-2 btn btn-danger ms-3"
        onClick={props.incrementItem}
      >
        +
      </button>
      <button className="ms-2 btn btn-danger ms-3" onClick={props.removeItem}>
        remove
      </button>
    </div>
  );
}
