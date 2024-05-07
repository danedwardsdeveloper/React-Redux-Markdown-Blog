import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../articles/articles.json";
import Tags from "./Tags";

function ArticleComponent() {
  const [article, setArticle] = useState(null);
  const { path } = useParams();

  useEffect(() => {
    const findArticle = () => {
      const matchingArticle = articles.find((article) => article.path === path);
      setArticle(matchingArticle);
      console.log("Article :", article);
    };

    findArticle();
  }, [path]);

  console.log(article.tags);

  return (
    <div>
      {article ? (
        <>
          <p>{article.author}</p>
          <h1>{article.title}</h1>
          <Tags tags={article.tags} />
          <p>{article.date}</p>
          <p>{article.content}</p>
        </>
      ) : (
        <h2>Sorry, something went wrong</h2>
      )}
    </div>
  );
}

export default ArticleComponent;
