import React from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

function About() {
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
