import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../container/Home";
import { Routes } from "react-router-dom";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
