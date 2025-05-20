import React from "react";

export default function SignIn() {
  return (
    <>
      <h1>Signin</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const data = Object.fromEntries(formData.entries());
          const result = await fetch("http://localhost:8000/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
          });
          const response = await result.json();
          console.log("RESPONSE", response);
          if (result.status === 200) {
            alert("User logged in successfully");
            window.location.href = "/dashboard";
          } else {
            alert(response.message);
          }
        }}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}
