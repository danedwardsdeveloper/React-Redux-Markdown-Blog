import React, { useState, useEffect } from "react";
import Header from "../Components/Header.js";
import Pagination from "../Components/Pagination.js";
import Footer from "../Components/Footer.js";
import ArticlePreviews from "../Components/ArticlePreviews.js";
import articles from "../articles/articles.json";

function Home() {
  return (
    <div className="page-container">
      <Header />
      <ArticlePreviews articles={articles} />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Home;
