import React from "react";
import { Link } from "react-router-dom";

function NextPrev() {
  return (
    <nav className="next-prev-section">
      <div className="row">
        <div className="column">
          <div className="next">
            <p className="next">
              <Link>Next story</Link>
            </p>
            <h3>
              <Link className="gradient-hover">Story title</Link>
            </h3>
          </div>
        </div>
        <div className="column">
          <div className="prev">
            <p className="prev">
              <Link>Previous story</Link>
            </p>
            <h3>
              <Link className="gradient-hover">Story title</Link>
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NextPrev;
