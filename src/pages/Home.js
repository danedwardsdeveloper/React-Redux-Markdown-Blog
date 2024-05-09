import React, { useState, useEffect } from "react";
import Header from "../Components/Header.js";
import PaginationNew from "../Components/PaginationNew.js";
import Footer from "../Components/Footer.js";
import ArticlePreviews from "../Components/ArticlePreviews.js";
import articles from "../articles/articles.json";

function Home() {
  useEffect(() => {
    document.title = "Home | Array of Sunshine";
  }, []);

  const [articlePreviews, setArticlePreviews] = useState([]);
  setArticlePreviews(articles);

  let firstFivePreviews = articles.slice(0, 5);
  const totalPages = articles.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [previewsPerPage] = useState(5);
  const indexOfLastPreview = currentPage * previewsPerPage;
  const indexOfFirstPreview = indexOfLastPreview - previewsPerPage;
  const currentPreviews = articles.slice(indexOfFirstPreview, indexOfLastPreview);
  // console.log(currentPreviews);

  return (
    <div className="page-container">
      <Header />
      <ArticlePreviews articles={firstFivePreviews} />
      <PaginationNew />
      <Footer />
    </div>
  );
}

export default Home;
