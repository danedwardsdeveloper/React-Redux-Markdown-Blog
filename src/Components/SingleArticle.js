import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../articles/articles.json";

const SingleArticle = () => {
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
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </>
      ) : (
        <p>Loading article...</p>
      )}
    </div>
  );
};

export default SingleArticle;
