import React from "react";
import { useCookies } from "react-cookie";

export default function Navigation() {
  const [cookies, setCookie] = useCookies();
  const handleLogout = async () => {
    const result = await fetch("http://localhost:8000/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const response = await result.json();
    console.log("RESPONSE", response);
    if (result.status === 200) {
      alert("User logged out successfully");
      // setCookie("token", "", { path: "/" });
      window.location.href = "/signin";
    } else {
      alert(response.message);
    }
  };
  const isLoggedIn = !!cookies.token;
  console.log("IS LOGGED IN", isLoggedIn);
  return (
    <nav>
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <a href="/signin">Sign In</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={() => handleLogout()}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
