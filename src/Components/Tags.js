import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { filterArticlesByTag } from "../features/articles/articlesSlice";

function Tags() {
  const { tags } = useSelector((state) => state.articlesSlice);

  const dispatch = useDispatch();
  const handleTagClick = (tag) => {
    dispatch(filterArticlesByTag(tag));
    // navigate(`/tags/${tag.toLowerCase()}`);
  };
  return (
    <>
      {tags && (
        <ul>
          {tags.map((tag) => (
            <li key={tag}>
              <Link
                to={`/tags/${tag.toLowerCase()}`}
                onClick={() => {
                  handleTagClick(tag);
                }}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Tags;
