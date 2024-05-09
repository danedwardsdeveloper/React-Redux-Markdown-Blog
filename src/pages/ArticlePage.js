import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import ArticleComponent from "../Components/ArticleComponent";
import articles from "../articles/articles.json";
import SideBar from "../Components/SideBar";
// import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

function ArticlePage() {
  const [matchingArticle, setMatchingArticle] = useState(null);
  const [recentArticles, setRecentArticles] = useState([]);
  const [error, setError] = useState(null);
  const { path } = useParams();

  useEffect(() => {
    const findArticle = async () => {
      try {
        const matchingArticle = articles.find((article) => article.path === path);
        if (!matchingArticle) {
          throw new Error("Article not found");
        }
        setMatchingArticle(matchingArticle);

        document.title = `${matchingArticle.title} | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding book Reviews`;

        let filteredArticles = articles.filter((article) => article.title !== matchingArticle.title);
        let recentArticles = filteredArticles.slice(0, 3);
        setRecentArticles(recentArticles);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };

    findArticle();
  }, [path]);

  return (
    <div className="page-container">
      <Header />
      <main className="main--article">
        {matchingArticle && <ArticleComponent article={matchingArticle} />}
        {matchingArticle && <SideBar tags={matchingArticle.tags} recentArticles={recentArticles} />}
      </main>
      {/* <Pagination /> */}
      <Footer />
    </div>
  );
}

export default ArticlePage;
