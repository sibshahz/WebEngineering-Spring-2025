import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  async function getData() {
    const url = "http://localhost:8000/products";
    const response = await fetch(url);
    const json = await response.json();
    setProducts(json);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Welcome to our store.</h1>
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
