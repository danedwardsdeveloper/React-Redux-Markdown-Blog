import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import Pagination from './Pagination.jsx';

import {
	setCurrentArticle,
	findArticlesContaining,
	setFilterTermType,
} from '../features/articles/articlesSlice.js';

import {
	baseURL,
	defaultMetaDescription,
	baseTitle,
	defaultKeywords,
} from '../metadata.js';

import { smoothScrollToTop } from '../features/utilities.js';

const ArticlePreviews = () => {
	const { visibleArticles } = useSelector((state) => state.articlesSlice);

	const dispatch = useDispatch();

	const handleClick = (article) => {
		dispatch(setCurrentArticle(article));
	};

	const handleWriterClick = (writer) => {
		dispatch(findArticlesContaining(writer));
		dispatch(setFilterTermType('writer'));
		smoothScrollToTop();
	};

	return (
		<>
			<Helmet>
				<title>Home | {baseTitle}</title>
				<meta property="og:title" content={`Home | ${baseTitle}`} />

				<meta name="description" content={defaultMetaDescription} />
				<meta property="og:description" content={defaultMetaDescription} />

				<meta name="keywords" content={defaultKeywords} />

				<meta property="og:url" content={baseURL} />
			</Helmet>

			<main className="main--home-page">
				{visibleArticles.map((article) => {
					let articleSlug = `/articles/${article.slug}`;
					let writerSlug = `/writers/${article.writerSlug}`;
					return (
						<section
							className="article-preview-container"
							key={article.id}
						>
							<div className="article-meta-col">
								<p className="article-writer">
									by&nbsp;
									<Link
										to={writerSlug}
										className="article-writer"
										onClick={() => {
											handleWriterClick(article.writer);
										}}
									>
										{article.writer}
									</Link>
								</p>
								<h2 className="article-title--preview">
									<Link
										to={articleSlug}
										onClick={() => {
											handleClick(article);
										}}
									>
										{article.title}
									</Link>
								</h2>
								<p className="article-date">{article.date}</p>
							</div>
							<div className="article-content-col">
								<p>
									<Link
										to={articleSlug}
										onClick={() => {
											handleClick(article);
										}}
										className="article-preview"
									>
										{article.preview}
									</Link>
								</p>
								<p className="read-more">
									<Link
										key={article.id}
										to={articleSlug}
										onClick={() => {
											handleClick(article);
										}}
									>
										Read more
									</Link>
								</p>
							</div>
						</section>
					);
				})}
			</main>
			<Pagination />
		</>
	);
};

export default ArticlePreviews;
