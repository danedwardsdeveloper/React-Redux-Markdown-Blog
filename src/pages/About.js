import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import articles from "../articles/articles.json";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

function About() {
  const tags = ["Book reviews", "JavaScript", "React"];
  const [recentArticles, setRecentArticles] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const findRecentArticles = async () => {
      try {
        let recentArticles = articles.slice(0, 3);
        setRecentArticles(recentArticles);

        document.title = "About | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding book Reviews";
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    findRecentArticles();
  }, []);

  return (
    <div className="page-container">
      <Header />
      <main className="main--article">
        <article className="full-article">
          <h1 className="article-title--full">About Me</h1>
          <p>Hello, I'm Dan Edwards. I used to be a musician but now I'm a front-end web developer, and I love writing JavaScript and working with React. I also like reading, hence all the book reviews. I live in Bolton, UK. </p>
        </article>
        <SideBar tags={tags} recentArticles={recentArticles} />
      </main>
      <Footer />
    </div>
  );
}

export default About;
