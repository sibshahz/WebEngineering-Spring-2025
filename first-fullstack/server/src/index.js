import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
const saltRounds = 10;
// const myPlaintextPassword = "s0//P4$$w0rD";
// const someOtherPlaintextPassword = "not_bacon";
// var jwt = require("jsonwebtoken");
// var token = jwt.sign({ foo: "bar" }, "shhhhh");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  // products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);

const app = express();
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
// middleware to parse JSON bodies
app.use(express.json());

const PORT = 8000;

app.get("/", (req, res) => {
  res.send({ message: "Your server is up and running" });
});

app.post("/signup", async (req, res) => {
  try {
    const email = req.body.email;
    const role = req.body.role || "admin";
    const password = req.body.password;

    const existingUser = await User.find({ email }).exec();
    if (existingUser.length > 0) {
      return res.status(400).send({
        message: "User already exists",
      });
    }

    bcrypt.genSalt(saltRounds, async function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const newUser = new User({ email, role, password: hash });
        await newUser.save();
        // req.session.user = email;
        const token = jwt.sign({ email: email, role: "admin" }, "secretkey");
        res.cookie("token", token, { httpOnly: true, secure: true });
        res.status(201).send({
          user: newUser,
        });
      });
    });

    // const token = jwt.sign({ email, role }, "123456789");
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to create user" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(400).send({
        message: "User not found",
      });
    }
    const hashedPassword = user.password;
    const role = user.role;
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch) {
      return res.status(400).send({
        message: "Invalid password",
      });
    }
    // const token = jwt.sign({ email, role }, "123456789");
    res.status(200).send({
      message: "User signed in successfully",
      // token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to sign in" });
  }
});

app.get("/products", async (req, res) => {
  try {
    console.log("Token: ", req.cookies.token);
    const products = await Product.find({}).exec();
    res.status(200).send({
      products: products,
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
      product: product,
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
    res.status(201).send({ product: updatedProduct });
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
