import React from "react";

const reactArticle = {
  title: "Unlock the Power of React: A Beginner's Guide",
  author: "Google Gemini",
  date: "02 May 2024",
  gags: "React",
  content: `In the realm of ever-evolving web development, React has risen as a dominant force. This JavaScript library, brought to life by Facebook, has revolutionised how we craft interactive and dynamic user interfaces. If you're eager to embark on your React journey, this article is your guiding light!
  **Why React?**
  - **Component-Based Architecture:** At its core, React encourages you to break down complex interfaces into small, reusable components. Think of them like Lego bricks - you build your UI by assembling various components together. This keeps your code organised and easier to manage.
  - **Virtual DOM:** React features a clever virtual DOM (Document Object Model), which is an in-memory representation of the actual webpage. React makes updates to this virtual DOM instead of directly to the browser's DOM. This results in efficient updates, minimising expensive re-renders for blazing-fast performance.
  - **Declarative Style:** With React, you declare *what* the UI should look like, rather than manually instructing *how* to change it. This leads to more readable and predictable code, and React handles the details of the updates.`,
};

function Article() {
  return (
    <article className="article">
      <p className="author">{reactArticle.author}</p>
      <h2 className="post-title">{reactArticle.title}</h2>
      <p className="date">{reactArticle.date}</p>
      <p className="post-preview">{reactArticle.content}</p>
      <p className="read-more">Read more</p>
    </article>
  );
}

export default Article;
