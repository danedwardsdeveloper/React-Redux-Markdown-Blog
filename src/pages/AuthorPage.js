import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";
import articles from "../articles/articles.json";
import ArticlePreviews from "../Components/ArticlePreviews";

function AuthorPage() {
  const [articlePreviews, setArticlePreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { author } = useParams();
  const authorArticles = [];

  for (const article of Object.values(articles)) {
    if (article.authorPath === author) {
      authorArticles.push(article);
    }
  }
  let fullWriterName = authorArticles[0].author;

  useEffect(() => {
    setArticlePreviews(authorArticles);
  }, [author]);

  let [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = authorArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const numberOfPages = Math.ceil(authorArticles.length / articlesPerPage);

  useEffect(() => {
    let title = `${fullWriterName}${currentPage === 1 ? "" : ", Page " + currentPage} | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding Book Reviews`;
    document.title = title;
  }, [currentPage]);

  return (
    <div className="page-container">
      <Header />
      <h2>Articles by {fullWriterName}</h2>
      {isLoading && <p>Loading articles...</p>}
      {error && <p>Error: {error.message}</p>}
      <ArticlePreviews articles={currentArticles} />
      <Pagination numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default AuthorPage;
