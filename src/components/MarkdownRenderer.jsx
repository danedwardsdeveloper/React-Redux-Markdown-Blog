import React from 'react';
import Markdown from 'react-markdown';
import CodeBlock from './CodeBlock';

function LinkRenderer(props) {
	return (
		<a href={props.href} target="_blank" rel="noreferrer">
			{props.children}
		</a>
	);
}

const CodeWrapper = ({ children, className, ...props }) => {
	const isCodeBlock = /language-(\w+)/.test(className || '');

	if (isCodeBlock) {
		return (
			<CodeBlock className={className} {...props}>
				{children}
			</CodeBlock>
		);
	} else {
		return (
			<code className={className} {...props}>
				{children}
			</code>
		);
	}
};

function MarkdownRenderer({ children }) {
	return (
		<Markdown
			children={children}
			components={{
				a: LinkRenderer,
				code: CodeWrapper,
			}}
		/>
	);
}

export default MarkdownRenderer;
