import React, { useState, useEffect } from "react";

function Article({ article }) {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}

export default Article;
