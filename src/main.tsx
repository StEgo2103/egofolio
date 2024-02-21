import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Background from "./components/Background/Background";
import StartPage from "./pages/Start/Start";
import HomePage from "./pages/Home/Home";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Background>
      <RouterProvider router={router} />
    </Background>
  </React.StrictMode>
);
