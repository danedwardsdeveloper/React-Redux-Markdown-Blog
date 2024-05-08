import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import articles from "../articles/articles.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import Header from "../Components/Header";
import Tags from "../Components/Tags";
import SideBar from "../Components/SideBar";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

const ArticlePage = () => {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const { path } = useParams();

  useEffect(() => {
    const findArticle = async () => {
      try {
        const matchingArticle = articles.find((article) => article.path === path);
        if (!matchingArticle) {
          throw new Error("Article not found");
        }
        setArticle(matchingArticle);
        document.title = `${matchingArticle.title} | Array of Sunshine`;
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };

    findArticle();
  }, [path]);

  return (
    <div className="page-container">
      <Header />
      <div>
        {article ? (
          <>
            <p>by {article.author}</p>
            <h1>{article.title}</h1>
            <p>by {article.date}</p>
            <Markdown
              children={article.content}
              components={{
                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter {...rest} PreTag="div" children={String(children).replace(/\n$/, "")} language={match[1]} style={theme} showLineNumbers="true" />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </>
        ) : (
          <h2>Something went wrong - article not found.</h2>
        )}
      </div>
      {/* <SideBar /> */}
      <Pagination />
      <Footer />
    </div>
  );
};

export default ArticlePage;
