import React, { useState, useEffect } from "react";
import Header from "../Components/Header.js";
import Pagination from "../Components/Pagination.js";
import Footer from "../Components/Footer.js";
import ArticlePreviews from "../Components/ArticlePreviews.js";
import articles from "../articles/articles.json";

function Home() {
  const [previews, setPreviews] = useState(null);
  // Slice: start is inclusive, end is exclusive
  let firstFivePreviews = articles.slice(1, 10);

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
