import React from 'react';
import Markdown from 'react-markdown';
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dracula as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeBlock from './CodeBlock';

function LinkRenderer(props) {
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
				code: CodeBlock,
			}}
		/>
	);
}

export default MarkdownRenderer;
