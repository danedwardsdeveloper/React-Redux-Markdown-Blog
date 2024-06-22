import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import Pagination from '../components/Pagination';

import {
	setCurrentArticle,
	findArticlesContaining,
	setFilterTermType,
} from '../features/articles/articlesSlice';

import { smoothScrollToTop } from '../features/utilities';

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

	const title = `Home | Array of Sunshine | Front-End WebDev Blog: JavaScript,
					React, Coding book Reviews`;

	const description = `Array of Sunshine is a blog about front-end web development, with practical JavaScript & React tutorials, and in-depth coding book reviews.`;

	const keywords = `front-end development, JavaScript, React, coding books, web development blog, programming tutorials, book reviews`;

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta property="og:title" content={title} />

				<meta name="description" content={description} />
				<meta property="og:description" content={description} />

				<meta name="keywords" content={keywords} />

				<meta property="og:url" content="https://arrayofsunshine.co.uk" />
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
