import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://13.203.161.46:5000/products")
      .then(res => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    axios.post("http://13.203.161.46:5000/cart", product)
      .then(res => alert(res.data.message));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 E-Commerce App</h1>

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
