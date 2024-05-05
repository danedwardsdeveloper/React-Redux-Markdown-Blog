import React from "react";
// import styles from "./pages.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const profiles = ["Susan", "Jason", "Mark", "jacob", "Imelda"];

function Profiles() {
  return (
    <>
      <Header />
      <main className="profiles-container">
        <ul>
          {profiles.map((profile) => {
            return (
              <li>
                <h3>{profile}</h3>
                <Link key={profile} to={`/profiles/${profile}`}>
                  Read more
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default Profiles;
