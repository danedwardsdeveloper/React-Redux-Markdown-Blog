import React, { useState, useEffect } from "react";
import Header from "../Components/Header.js";
import Pagination from "../Components/Pagination.js";
import Footer from "../Components/Footer.js";
import ArticlePreviews from "../Components/ArticlePreviews.js";
import articles from "../articles/articles.json";

function Home() {
  const [previews, setPreviews] = useState(null);
  // Slice: start is inclusive, end is exclusive
  // First item is at index 0
  let firstFivePreviews = articles.slice(0, 5);

  return (
    <div className="page-container">
      <Header />
      <ArticlePreviews articles={firstFivePreviews} />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Home;
