import React, { useEffect } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

function About() {
  useEffect(() => {
    document.title = "About | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding book Reviews";
  }, []);

  const aboutTags = ["Book reviews", "JavaScript", "React"];

  return (
    <div className="page-container">
      <Header />
      <main className="main--article">
        <article className="full-article">
          <h1 className="article-title--full">About Me</h1>
          <p>Hello, I'm Dan Edwards. I used to be a musician but now I'm a front-end web developer, and I love writing JavaScript and working with React. I also like reading, hence all the book reviews. I live in Bolton, UK. </p>
        </article>
        <SideBar aboutTags={aboutTags} />
      </main>
      <Footer />
    </div>
  );
}

export default About;
