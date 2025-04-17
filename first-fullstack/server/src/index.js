import express from "express";
import cors from "cors";

const app = express();
app.use(cors("*"));

// middleware to parse JSON bodies
app.use(express.json());

let products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

const PORT = 8000;

app.get("/", (req, res) => {
  res.send({ message: "Your server is up and running" });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Connection to database established");
});
