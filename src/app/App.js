import React, { useEffect } from "react";
import { useSelector, Provider } from "react-redux";

// import { setPage, goToPreviousPage, getArticlesByPage, setCurrentPage, getTotalPages } from "../features/articles/articlesSlice";

// import { store } from "./store";

import Header from "../components/Header";
import ArticlePreviews from "../components/ArticlePreviews";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="page-container">
      <Header />
      <ArticlePreviews />
      {/* <button onClick={handleGoToPage1}>Page 1</button> */}
      {/* <button onClick={handleGoToPage2}>Page 2</button> */}
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;
