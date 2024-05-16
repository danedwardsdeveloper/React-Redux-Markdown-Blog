import { useState, useEffect } from "react";
import { smoothScrollToTop } from "../features/utilities";

function useCurrentYear() {
  const [years, setYears] = useState(null);
  useEffect(() => {
    try {
      setYears(new Date().getFullYear());
    } catch (error) {
      console.error("Error getting current year:", error);
      setYears(2024);
    }
  }, []);
  return years ?? 2024;
}

function Footer() {
  const year = useCurrentYear();
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
        <p className="copyright-notice">&copy; Dan Edwards, {year}</p>
      </div>
      <div className="footer-col-2">
        <button
          className="top-of-page"
          onClick={() => {
            smoothScrollToTop();
          }}
        >
          Top of page
        </button>
      </div>
    </footer>
  );
}

export default Footer;
