import React, { useEffect } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

function About() {
  useEffect(() => {
    document.title = "About | Array of Sunshine";
  }, []);

  const aboutTags = ["Book reviews", "JavaScript", "React"];

  return (
    <div className="page-container">
      <Header />
      <main className="main--article">
        <article className="full-article">
          <h1 className="article-title">About Me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione earum quidem magni non quod laboriosam iusto ducimus veniam culpa numquam, dolorem similique quia saepe amet ipsam dolores deleniti. Doloremque, vel?</p>
          <p>You can't find out more about me.</p>
        </article>
        <SideBar aboutTags={aboutTags} />
      </main>
      <Footer />
    </div>
  );
}

export default About;
