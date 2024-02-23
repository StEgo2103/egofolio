import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Background from "./components/Background/Background";
import StartPage from "./pages/Start/Start";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import CompetenciesPage from "./pages/Competencies/Competencies";
import ProjectsPage from "./pages/Projects/Projects";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/menu",
    element: <HomePage />,
  },
  {
    path: "/itsme",
    element: <AboutPage />,
  },
  {
    path: "/power",
    element: <CompetenciesPage />,
  },
  {
    path: "/whatido",
    element: <ProjectsPage />,
  },
  {
    path: "/callme",
    element: <ContactPage />,
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
