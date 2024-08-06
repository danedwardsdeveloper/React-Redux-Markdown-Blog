import React from "react";

function SearchField() {
  return (
    <>
      <form action="" className="search-form" id="search-form">
        <img className="search-icon" src="./assets/icons/google-search-icon.svg" alt="" />
        <input type="search" placeholder="Search..." className="search-input" name="search-form" />
      </form>
    </>
  );
}

export default SearchField;
