import React, { useState, useEffect } from "react";
import Header from "../Components/Header.js";
import Pagination from "../Components/Pagination.js";
import Footer from "../Components/Footer.js";
import ArticlePreviews from "../Components/ArticlePreviews.js";
import articles from "../articles/articles.json";

function Home() {
  useEffect(() => {
    document.title = "Home | Array of Sunshine | Front-End WebDev Blog:  JavaScript, React, Coding book Reviews";
  }, []);

  const [articlePreviews, setArticlePreviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setArticlePreviews(articles);
      setLoading(false);
    };
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlePreviews.slice(indexOfFirstArticle, indexOfLastArticle);
  const numberOfPages = Math.ceil(articlePreviews.length / articlesPerPage);

  console.log(`Number of pages: ${numberOfPages}`);
  console.log(`Number of articles: ${articles.length}`);

  return (
    <div className="page-container">
      <Header />
      <ArticlePreviews articles={currentArticles} />
      {/* <PaginationNew /> */}
      <Pagination numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default Home;
