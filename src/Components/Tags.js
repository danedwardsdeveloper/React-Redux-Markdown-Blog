import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Tags(props) {
  return (
    <>
      {props.tags && (
        <ul>
          {props.tags.map((tag) => (
            <li key={tag}>
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

Tags.propTypes = {
  articleTags: PropTypes.arrayOf(PropTypes.string),
};

export default Tags;
