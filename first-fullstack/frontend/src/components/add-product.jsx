import React, { useState } from "react";

function AddProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function trackNameChange(event) {
    setName(event.target.value);
  }

  function addNewProduct() {
    const url = "http://localhost:8000/products";
    const data = {
      name: name,
      price: price,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log("PRODUCT ADDED", json);
        setName("");
        setPrice("");
      });
  }
  return (
    <>
      <h1>Add new product</h1>
      <input
        type="text"
        onChange={trackNameChange}
        value={name}
        placeholder="Product name"
      />
      <input
        onChange={(event) => setPrice(event.target.value)}
        type="number"
        value={price}
        placeholder="Product price"
      />
      <button onClick={addNewProduct}>Add product</button>
    </>
  );
}

export default AddProductForm;
