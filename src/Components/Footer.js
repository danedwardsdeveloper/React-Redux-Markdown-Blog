import React from "react";

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Footer() {
  return (
    <footer>
      <div className="footer-col-1">
        <ul className="social-icons-list">
          <li>
            <a href="https://github.com/danedwardsdeveloper" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://danedwardsdeveloper.com/" target="_blank">
              CV
            </a>
          </li>
        </ul>
        <p className="copyright-notice">&copy; Dan Edwards, 2024</p>
      </div>
      <div className="footer-col-2">
        <button className="top-of-page" onClick={handleScrollToTop}>
          Top of page
        </button>
      </div>
    </footer>
  );
}

export default Footer;
