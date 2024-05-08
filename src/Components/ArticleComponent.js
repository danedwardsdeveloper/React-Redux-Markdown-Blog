// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import articles from "../articles/articles.json";

// function ArticleComponent() {
//   const [article, setArticle] = useState(null);
//   const { path } = useParams();

//   useEffect(() => {
//     const findArticle = () => {
//       const matchingArticle = articles.find((article) => article.path === path);
//       setArticle(matchingArticle);
//       console.log("Article :", article);
//     };

//     findArticle();
//   }, [path]);

//   // To-do: Move these variables and the ones in ArticlePreviews to main.js
//   let articlePath = `/articles/${article.path}`;
//   let authorPath = `/writers/${article.authorPath}`;

//   return (
//     <main className="main--article">
//       {article ? (
//         <article className="full-article">
//           <p>{article.author}</p>
//           <h1>{article.title}</h1>
//           <p>{article.date}</p>
//           <p>{article.content}</p>
//         </article>
//       ) : (
//         <h2>Sorry, something went wrong</h2>
//       )}
//     </main>
//   );
// }

// export default ArticleComponent;
