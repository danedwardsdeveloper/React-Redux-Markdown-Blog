import React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

import { Provider } from "react-redux";

import App from "./app/App";
import About from "./components/About";
import Article from "./components/Article";
import ArticlePreviews from "./components/ArticlePreviews";

import { store } from "./app/store.js";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App state={store.getState()} dispatch={store.dispatch} />}>
      <Route index element={<ArticlePreviews />} />
      <Route path="about" element={<About />} />
      <Route path="articles" element={<Article />} />
    </Route>
  )
);

const root = createRoot(document.getElementById("root"));

const render = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App state={store.getState()} />
        </RouterProvider>
      </Provider>
    </React.StrictMode>
  );
};

render();

store.subscribe(render);
