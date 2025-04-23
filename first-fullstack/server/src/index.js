import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

const app = express();
app.use(cors("*"));

// middleware to parse JSON bodies
app.use(express.json());

const PORT = 8000;

app.get("/", (req, res) => {
  res.send({ message: "Your server is up and running" });
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.post("/products", async (req, res) => {
  try {
    const { name, price, irrelevant } = req.body;
    const newProduct = new Product({ name, price, irrelevant });
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose
    .connect("mongodb://127.0.0.1:5028/sample_database", {
      authSource: "admin",
      user: "mysecretuser",
      pass: "mysecretpassword",
      useNewUrlParser: true,
    })
    .then(() => console.log("Connected to database!"))
    .catch((error) => {
      console.error("Error connecting to database:", error);
    });
});
