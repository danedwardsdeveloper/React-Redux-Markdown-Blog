import React, { useState, useEffect } from "react";
import Header from "../Components/Header.js";
import Pagination from "../Components/Pagination.js";
import Footer from "../Components/Footer.js";
import ArticlePreviews from "../Components/ArticlePreviews.js";
import articles from "../articles/articles.json";

function Home() {
  const [articlePreviews, setArticlePreviews] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setArticlePreviews(articles);
    };
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);
  const lastDisplayedArticleIndex = currentPage * articlesPerPage;
  const firstDisplayedArticleIndex = lastDisplayedArticleIndex - articlesPerPage;
  const currentArticles = articlePreviews.slice(firstDisplayedArticleIndex, lastDisplayedArticleIndex);
  const numberOfPages = Math.ceil(articlePreviews.length / articlesPerPage);

  useEffect(() => {
    let title = `${currentPage === 1 ? "Home" : "Page " + currentPage} | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding Book Reviews`;
    document.title = title;
  }, [currentPage]);

  return (
    <div className="page-container">
      <Header />
      <ArticlePreviews articles={currentArticles} />
      <Pagination numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default Home;
