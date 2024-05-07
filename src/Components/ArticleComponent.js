import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../articles/articles.json";

function ArticleComponent() {
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
    <div>
      {article ? (
        <>
          <p>{article.author}</p>
          <h1>{article.title}</h1>
          <p>{article.date}</p>
          <p>{article.content}</p>
        </>
      ) : (
        <p>Loading article...</p>
      )}
    </div>
  );
}

export default ArticleComponent;
