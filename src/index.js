import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import About from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import AuthorPage from "./pages/AuthorPage";
import TagPage from "./pages/TagPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/articles/:path",
    element: <ArticlePage />,
  },
  {
    path: "/tags/:tag",
    element: <TagPage />,
  },
  {
    path: "/writers/:author",
    element: <AuthorPage />,
  },
  {
    path: "/not-found",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
