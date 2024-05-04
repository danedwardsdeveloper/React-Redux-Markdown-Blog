import React from "react";
import styles from "./Components.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="page-count">Page 1 of 10</p>
      <p className="older-posts">Older posts =</p>
      <ul className="social-icons">
        <li>GitHub</li>
        <li>CodePen</li>
      </ul>
      <a href="#">Top of page</a>
      <p className="copyright-notice">&copy; Dan Edwards, 2024</p>
    </footer>
  );
}

export default Footer;
