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
    res.status(200).send({
      myproducts: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.find({ _id: id }).exec();
    if (product.length === 0) {
      res.status(404).send({
        message: "product not found",
      });
    }
    res.status(200).send({
      foundproduct: product,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: "internal server error" });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.deleteOne({
      _id: id,
    }).exec();
    res.status(201).send({
      message: `Product with id: ${id} deleted successfully`,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newName = req.body.name;
    const newPrice = req.body.price;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name: newName, price: newPrice },
      { new: true }
    );
    res.status(201).send({ productUpdated: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.post("/products", async (req, res) => {
  try {
    const name = req.body.name;
    const price = req.body.price;

    const newProduct = new Product({ name, price });
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
