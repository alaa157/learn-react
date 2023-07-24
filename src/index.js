import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
import Home from "./greeating/home";
import New from "./greeating/new";
import Greating from "./greeating/greating";
import App from "./App";
// import Main from "./comp/Main";
// import Footer from "./comp/Footer";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <h1>SORRY ERROR 404...............................</h1>,
  },

  {
    path: "/greating",
    element: <Greating />,
    errorElement: <h1>SORRY ERROR 404...............................</h1>,
  },
  {
    path: "/new",
    element: <New />,
    errorElement: <h1>SORRY ERROR 404...............................</h1>,
  },
  {
    path: "/app",
    element: <App />,
    errorElement: <h1>SORRY ERROR 404...............................</h1>,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORRY ERROR 404...............................</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
