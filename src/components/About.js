import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import articles from "../articles/articles.json";
import SideBar from "./SideBar";
// import Footer from "./Footer";

function About() {
  // const tags = ["Book reviews", "JavaScript", "React"];
  // const [recentArticles, setRecentArticles] = useState([]);
  // const [error, setError] = useState([]);

  //   const findRecentArticles = async () => {
  //     try {
  //       let recentArticles = articles.slice(0, 3);
  //       setRecentArticles(recentArticles);

  useEffect(() => {
    document.title = "About | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding book Reviews";
  }, []);
  //   };
  //   findRecentArticles();
  // }, []);

  return (
    <>
      <main className="main--article">
        <article className="full-article">
          <h1 className="article-title--full">About</h1>
          <p>Array of Sunshine is a blog about front-end web development, with practical JavaScript & React tutorials, and in-depth coding book reviews. Created by Dan Edwards.</p>
          <p>Dan is a front-end web developer based in Bolton, UK. Currently training to full-stack with Codecademy.</p>
        </article>
        <SideBar />
      </main>
    </>
  );
}

export default About;
