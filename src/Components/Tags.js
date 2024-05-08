import React from "react";
import { Link } from "react-router-dom";

// const setTagColors = (tag) => {
//   switch (tag.toLowerCase()) {
//     case "html":
//       return "rgba(227, 79, 38, 0.5)"; // Orange
//     case "css":
//       return "rgba(21, 114, 182, 0.5)"; // Blue
//     case "javascript":
//       return "rgba(241, 224, 90, 0.5)"; // Yellow
//     case "react":
//       return "rgba(97, 218, 251, 0.5)"; // React blue
//     case "node.js":
//       return "rgba(66, 141, 77, 0.5)"; // Node.js green
//     case "performance":
//       return "rgba(53, 110, 171, 0.5)"; // Blue
//     case "test":
//       return "rgba(224, 94, 53, 0.5)"; // Orange-red

//     case "bem":
//       return "rgba(194, 55, 130, 0.5)"; // Pink-purple
//     case "codecademy":
//       return "rgba(35, 86, 145, 0.5)"; // Codecademy blue
//     case "book review":
//       return "rgba(147, 112, 219, 0.5)"; // Medium purple
//     case "blue":
//       return "rgba(61, 120, 155, 0.5)"; // Blue
//     default:
//       return "rgba(192, 192, 192, 0.5)"; // Light gray
//   }
// };

// style={{ backgroundColor: setTagColors(tag) }}

function Tags({ tags }) {
  return (
    <ul>
      {tags.map((tag, index) => (
        <li key={index}>
          <Link to={tag}>{tag}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Tags;
