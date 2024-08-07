import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CodeBlock = ({ className, children, ...rest }) => {
	const [copied, setCopied] = useState(false);
	const match = /language-(\w+)/.exec(className || '');
	const language = match ? match[1] : 'plaintext';

	const handleCopy = () => {
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div>
			<div className="code-block-header">
				<p className="language">{language}</p>
				<CopyToClipboard
					text={String(children).replace(/\n$/, '')}
					onCopy={handleCopy}
				>
					<button className="copy-button">
						<span className="emoji">{copied ? '✅' : '📋'}&nbsp;</span>
						<span className="text">Copy</span>
					</button>
				</CopyToClipboard>
			</div>
			{match ? (
				<SyntaxHighlighter
					{...rest}
					language={match[1]}
					style={theme}
					showLineNumbers={false}
				>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			) : (
				<code {...rest} className={className}>
					{children}
				</code>
			)}
		</div>
	);
};

export default CodeBlock;
