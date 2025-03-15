import express from "express";
import cors from "cors";


const app = new express();
app.use(cors("*"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World in the class of web engineering" });
})

app.listen(8000,()=> {
  console.log("Server is running on port 8000");
})