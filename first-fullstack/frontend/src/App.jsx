import { useEffect, useState } from "react";
import "./App.css";
import AddProductForm from "./components/add-product";
import { useCookies } from "react-cookie";

function App() {
  const [products, setProducts] = useState([]);
  const [cookies, setCookie] = useCookies(["token"]);

  useEffect(() => {
    console.log(cookies);
    console.log("TOKEN", cookies);
    if (!cookies) {
      // window.location.href = "/signin";
      console.log("Redirect to signin");
    }
  }, []);

  async function getData() {
    const url = "http://localhost:8000/products";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const json = await response.json();
    console.log("PRODUCTS FROM SERVER", json);
    setProducts(json.products);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Dashboard</h1>
      <h1>Welcome to our store.</h1>
      <AddProductForm />
      {products.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>
        );
      })}
    </>
  );
}

export default App;
