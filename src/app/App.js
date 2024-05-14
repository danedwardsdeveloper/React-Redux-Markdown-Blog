import React from "react";

import Header from "../components/Header";
import ArticlePreviews from "../components/ArticlePreviews";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="page-container">
      <Header />
      <ArticlePreviews />
      <Footer />
    </div>
  );
}

export default App;
