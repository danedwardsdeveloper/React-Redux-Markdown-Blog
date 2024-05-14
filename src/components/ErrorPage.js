import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

function ErrorPage() {
  useEffect(() => {
    document.title = "Not found | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding book Reviews";
  }, []);

  const navigate = useNavigate();
  // const handleBackClick = () => {
  //   navigate("/");
  // };

  window.scrollTo({
    top: 0,
    behavior: "instant",
  });

  const aboutTags = ["Book reviews", "JavaScript", "React"];

  return (
    <div className="page-container">
      <Header />
      <main className="main--article">
        <article className="full-article">
          <h1 className="article-title--full">Sorry, page not found</h1>
          <nav className="nav--error-page">
            <ul>
              <li>
                Back to &nbsp;
                <Link to="#" onClick={() => navigate(-1)}>
                  previous page
                </Link>
              </li>
              <li>
                Back to &nbsp;
                <Link to="/">home page</Link>
              </li>
            </ul>
          </nav>
        </article>
        <SideBar aboutTags={aboutTags} />
      </main>
    </div>
  );
}

export default ErrorPage;
