import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import articles from "../articles/articles.json";
import Header from "../Components/Header";
import Tags from "../Components/Tags";
import SideBar from "../Components/SideBar";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

const ArticlePage = () => {
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
      <div>
        {article ? (
          <>
            <p>by {article.author}</p>
            <h1>{article.title}</h1>
            <p>by {article.date}</p>
            <Tags tags={article.tags} />
            <Markdown children={article.content} />
            {/* <p>{article.content}</p> */}
          </>
        ) : (
          <p>Something went wrong - article not found.</p>
        )}
      </div>
      {/* <SideBar /> */}
      <Pagination />
      <Footer />
    </div>
  );
};

export default ArticlePage;
