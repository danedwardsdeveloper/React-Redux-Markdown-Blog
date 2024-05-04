import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <article>
        <h2>Page not found</h2>
        <Link to="/">Back to home page</Link>
        <button onClick={handleBackClick}>Back to Homepage</button>
      </article>
      ;
    </>
  );
}

export default NotFound;
