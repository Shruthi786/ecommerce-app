const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/cart", (req, res) => {
  res.json({ message: "Added to cart", item: req.body });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});