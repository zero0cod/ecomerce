import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="p-3 bg-primary fixed-top">
      <h3 style={{ color: "white" }}>Ecom App</h3>
      <div className="row justify-content-center pt-2 pb-1">
        <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex">
          <button
            className="btn btn-danger    me-4"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            name=""
            id=""
          />
          <button
            className="btn btn-danger ms-3"
            onClick={() => navigate("/carts")}
          >
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}
