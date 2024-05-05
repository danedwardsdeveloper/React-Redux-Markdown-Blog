import React from "react";
import postList from "../articles/articles.json";
import { Link } from "react-router-dom";

const trimArticle = (str, maxChar = 700) => {
  return str.length > maxChar ? str.substring(0, maxChar - 3) + "..." : str;
};

const removeMarkdown = (str) => {
  const markdownPatterns = [/\*\*(.*?)\*\*/g, /__(.*?)__/g, /\[(.*?)\]\((.*?)\)/g, /^#+\s(.*)/gm, /`(.*?)`/g, /\n={2,}/g];
  let cleanedStr = str;
  markdownPatterns.forEach((pattern) => {
    cleanedStr = cleanedStr.replace(pattern, "$1");
  });
  return cleanedStr;
};

const generatePath = (str) => {
  return str.replace(/\s+/g, "-");
};

function PostList() {
  return (
    <main className="post-list">
      {postList.length &&
        postList.map((post, i) => {
          return (
            <article className="post" key={post.id}>
              <div className="post-info-container">
                <p className="post-author">by {post.author}</p>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-date">{post.date}</p>
              </div>
              <div className="post-preview-container">
                <p className="post-preview">{removeMarkdown(trimArticle(post.content))}</p>
                <p className="read-more">
                  <Link key={generatePath(post.title)} to={`/${generatePath(post.title)}`}>
                    Read more
                  </Link>
                </p>
              </div>
            </article>
          );
        })}
    </main>
  );
}

export default PostList;
