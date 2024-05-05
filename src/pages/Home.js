import React from "react";
import Header from "../Components/Header.js";
import Pagination from "../Components/Pagination.js";
import Footer from "../Components/Footer.js";
import ArticlePreviews from "../Components/ArticlePreviews.js";

function Home() {
  return (
    <div className="page-container">
      <Header />
      <ArticlePreviews />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Home;
