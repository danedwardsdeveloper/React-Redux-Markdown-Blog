import React from "react";
import Header from "../Components/Header.js";
import Pagination from "../Components/Pagination.js";
import Footer from "../Components/Footer.js";
import PostList from "../Components/PostList.js";

function Home() {
  return (
    <div className="page-container">
      <Header />
      <PostList />
      <Pagination />
      <Footer />
    </div>
  );
}

export default Home;
