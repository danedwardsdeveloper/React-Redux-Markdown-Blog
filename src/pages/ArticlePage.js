import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import ArticleComponent from "../Components/ArticleComponent";
import articles from "../articles/articles.json";
import SideBar from "../Components/SideBar";
import PaginationNew from "../Components/PaginationNew";
import Footer from "../Components/Footer";

function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const { path } = useParams();

  useEffect(() => {
    const findArticle = async () => {
      try {
        const matchingArticle = articles.find((article) => article.path === path);
        if (!matchingArticle) {
          throw new Error("Article not found");
        }
        setArticle(matchingArticle);
        document.title = `${matchingArticle.title} | Array of Sunshine`;
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
        {article && <ArticleComponent article={article} />}
        {article && <SideBar articleTags={article.tags} />}
      </main>
      <PaginationNew />
      <Footer />
    </div>
  );
}

export default ArticlePage;
