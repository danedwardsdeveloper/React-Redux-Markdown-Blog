import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

function LinkRenderer(props) {
  console.log({ props });
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

function MarkdownRenderer({ children }) {
  return (
    <Markdown
      children={children}
      components={{
        a: LinkRenderer,
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
  );
}

export default MarkdownRenderer;
