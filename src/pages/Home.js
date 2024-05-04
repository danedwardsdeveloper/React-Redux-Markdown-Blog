import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import PostList from "../Components/PostList.js";

function Home() {
  return (
    <>
      <Header />
      <PostList />
      <Footer />
    </>
  );
}

export default Home;
