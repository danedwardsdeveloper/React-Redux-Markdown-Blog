import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function NotFound() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <article>
        <h2>Page not found</h2>
        <Link to="/">Back to home page</Link>
        <button onClick={handleBackClick}>Back to Homepage</button>
      </article>
      <Footer />
    </>
  );
}

export default NotFound;
