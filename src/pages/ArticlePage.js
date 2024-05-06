import React, { useState, useEffect } from "react";
import Article from "../Components/Article";

function ArticlesContainer(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/src/articles/articles.json");
      const data = await response.json();
      setArticles(data[0]);
    };

    fetchArticles();
  }, []);

  return (
    <div className="articles-container">
      <h2>Non-dynamic title!</h2>
      <p>Non-dynamic content!</p>
      {articles.map((props) => (
        <Article key={props.id} article={props.content} />
      ))}
    </div>
  );
}

export default ArticlesContainer;
