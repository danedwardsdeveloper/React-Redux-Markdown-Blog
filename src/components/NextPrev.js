import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { setCurrentArticle } from "../features/articles/articlesSlice";

function NextPrev() {
  const { currentArticle, previousArticle, nextArticle } = useSelector((state) => state.articlesSlice);

  const dispatch = useDispatch();

  const handleClick = (article) => {
    dispatch(setCurrentArticle(article));
  };

  let nextArticleSlug = "/error";
  let previousArticleSlug = "/error";

  useEffect(() => {
    if (nextArticle) {
      let nextArticleSlug = `/articles/${nextArticle.slug}`;
    }
    if (previousArticle) {
      let previousArticleSlug = `/articles/${previousArticle.slug}`;
    }
  }, [currentArticle]);

  return (
    <nav className="next-prev-section">
      <div className="row">
        <div className="prev">
          <div className="column">
            {previousArticle && (
              <>
                <p className="prev">
                  <Link
                    to={previousArticleSlug}
                    onClick={() => {
                      handleClick(previousArticle);
                    }}
                  >
                    Previous article
                  </Link>
                </p>
                <h3>
                  <Link
                    to={previousArticleSlug}
                    onClick={() => {
                      handleClick(previousArticle);
                    }}
                    className="gradient-hover"
                  >
                    {previousArticle.title}
                  </Link>
                </h3>
              </>
            )}
          </div>
        </div>
        <div className="column">
          <div className="next">
            <p className="next">
              <Link
                to={nextArticleSlug}
                onClick={() => {
                  handleClick(nextArticle);
                }}
              >
                Next article
              </Link>
            </p>
            <h3>
              <Link
                to={nextArticleSlug}
                onClick={() => {
                  handleClick(nextArticle);
                }}
                className="gradient-hover"
              >
                {nextArticle.title}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NextPrev;
