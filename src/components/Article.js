import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import MarkdownRenderer from './MarkdownRenderer';
import SideBar from './SideBar';
import NextPrev from './NextPrev';

import {
	baseURL,
	defaultMetaDescription,
	baseTitle,
	defaultKeywords,
} from '../metadata.js';

import {
	findArticlesContaining,
	setFilterTermType,
} from '../features/articles/articlesSlice';

import { smoothScrollToTop } from '../features/utilities';

import { snapToTop } from '../features/utilities';

function Article() {
	const currentArticle = useSelector(
		(state) => state.articlesSlice.currentArticle
	);

	const title = currentArticle.title
		? `${currentArticle.title} | ${baseTitle}`
		: baseTitle;

	const metaDescription = currentArticle.metadescription
		? currentArticle.metadescription
		: defaultMetaDescription;

	const keywords = currentArticle.keywords
		? currentArticle.keywords
		: defaultKeywords;

	const articleURL = `${baseURL}/${currentArticle.slug}`;

	const dispatch = useDispatch();
	const handleWriterClick = (writer) => {
		dispatch(findArticlesContaining(writer));
		dispatch(setFilterTermType('writer'));
		smoothScrollToTop();
	};

	snapToTop();

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta property="og:title" content={title} />

				<meta name="description" content={metaDescription} />
				<meta property="og:description" content={metaDescription} />

				<meta name="keywords" content={keywords} />

				<meta property="og:url" content={articleURL} />
			</Helmet>

			<main className="main--article">
				<div className="col">
					<article className="article--full">
						<div className="article-header">
							<p className="article-writer">
								by&nbsp;
								<Link
									to={`/writers/${currentArticle.writerSlug}`}
									onClick={() => {
										handleWriterClick(currentArticle.writer);
									}}
								>
									{currentArticle.writer}
								</Link>
							</p>
							<h1 className="article-title--full">
								{currentArticle.title}
							</h1>
							<p className="article-date">{currentArticle.date}</p>
						</div>
						<div className="markdown-content">
							<MarkdownRenderer
								children={currentArticle.content}
								linkTargets="_blank"
							/>
						</div>
					</article>
					<NextPrev />
				</div>
				<SideBar />
			</main>
		</>
	);
}

export default Article;
