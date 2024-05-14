// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../Components/Header";
// import Pagination from "../Components/Pagination";
// import Footer from "../Components/Footer";
// import articles from "../articles/articles.json";
// import ArticlePreviews from "../Components/ArticlePreviews";

// function TagPage() {
//   const [articlePreviews, setArticlePreviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { tag } = useParams();

//   // Rename this variable later
//   const filteredArticles = [];

//   for (const article of Object.values(articles)) {
//     if (article.tags.includes(tag)) {
//       filteredArticles.push(article);
//     }
//   }

//   useEffect(() => {
//     setArticlePreviews(filteredArticles);
//   }, [tag]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [articlesPerPage] = useState(5);
//   const indexOfLastArticle = currentPage * articlesPerPage;
//   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
//   const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
//   const numberOfPages = Math.ceil(filteredArticles.length / articlesPerPage);

//   useEffect(() => {
//     let title = `${tag}${currentPage === 1 ? "" : ", Page " + currentPage} | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding Book Reviews`;
//     document.title = title;
//   }, [currentPage]);

//   return (
//     <div className="page-container">
//       <Header />
//       <h2>Articles Tagged: {tag}</h2>
//       {isLoading && <p>Loading articles...</p>}
//       {error && <p>Error: {error.message}</p>}
//       <ArticlePreviews articles={currentArticles} />
//       <Pagination numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       <Footer />
//     </div>
//   );
// }

// export default TagPage;
