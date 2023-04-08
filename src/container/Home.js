import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Carts from "./Carts";
import CheckOut from "./CheckOut";
import DashBoard from "./DashBoard";

import Product from "./Product";
import Success from "./Success";

export default function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/product/:sku" element={<Product />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/checkOut/">
          <Route path="" element={<CheckOut />} />
          <Route path=":sku" element={<CheckOut />} />
        </Route>
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </div>
  );
}
