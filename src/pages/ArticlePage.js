import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../articles/articles.json";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

const ArticlePage = () => {
  const [article, setArticle] = useState(null);
  const { path } = useParams();

  useEffect(() => {
    const findArticle = () => {
      const matchingArticle = articles.find((article) => article.path === path);
      setArticle(matchingArticle);
    };

    findArticle();
  }, [path]);

  return (
    <div className="page-container">
      <Header />
      <div>
        {article ? (
          <>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </>
        ) : (
          <p>Loading article...</p>
        )}
      </div>
      <SideBar />
      <Pagination />
      <Footer />
    </div>
  );
};

export default ArticlePage;
