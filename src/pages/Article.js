import React from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";

function Article() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>{params.profileId}</h1>
    </>
  );
}

export default Article;
