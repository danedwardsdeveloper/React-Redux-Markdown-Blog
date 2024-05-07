import React, { useEffect } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

function About() {
  useEffect(() => {
    document.title = "About | Array of Sunshine";
  }, []);
  return (
    <div className="page-container">
      <Header />
      <article>This is the about page!</article>
      <SideBar />
      <Footer />
    </div>
  );
}

export default About;
