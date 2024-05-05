import React from "react";
// import styles from "./Components.css";

function Footer() {
  return (
    <footer>
      <div className="footer-col-1">
        <ul className="social-icons-list">
          <li>
            <a href="">GitHub</a>
          </li>
          <li>
            <a href="">CodePen</a>
          </li>
          <li>
            <a href="">CV</a>
          </li>
        </ul>
        <p className="copyright-notice">&copy; Dan Edwards, 2024</p>
      </div>
      <div className="footer-col-2">
        <a href="#">Top of page</a>
      </div>
    </footer>
  );
}

export default Footer;
