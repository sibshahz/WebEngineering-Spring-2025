import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import SignUp from "./components/sign-up.jsx";
import SignIn from "./components/sign-in.jsx";
import Navigation from "./components/navigation.jsx";
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/dashboard" element={<App />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>
);
