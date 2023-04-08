import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const [count, setCount] = useState(15);
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    setTimeout(() => navigate("/carts"), 15000);
  }, [navigate]);
  return (
    <div style={{ marginTop: 130 }}>
      <h1>Order Has Been Placed you will be redirected in {count} sec</h1>
    </div>
  );
}
