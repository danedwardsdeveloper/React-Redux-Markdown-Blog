import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { setCurrentArticle } from '../features/articles/articlesSlice';
import { snapToTop } from '../features/utilities';

function NextPrev() {
	const { previousArticle, nextArticle } = useSelector(
		(state) => state.articlesSlice
	);

	// const nextArticleSlug = nextArticle ? `/articles/${nextArticle.slug}` : null;
	// const previousArticleSlug = previousArticle
	// 	? `/articles/${previousArticle.slug}`
	// 	: null;
	// const nextArticleSlug = {`/articles/${nextArticle.slug}`}
	// const previousArticleSlug = `/articles/${previousArticle.slug}`;

	const dispatch = useDispatch();

	const handleClick = (article) => {
		dispatch(setCurrentArticle(article));
		snapToTop();
	};

	return (
		<nav className="next-prev-section">
			<div className="row">
				<div className="col col-prev">
					<div className="prev">
						<p className="prev">
							{previousArticle && (
								<Link
									to={`/articles/${nextArticle.slug}`}
									onClick={() => {
										handleClick(previousArticle);
									}}
								>
									Previous article
								</Link>
							)}
						</p>
						<h3>
							{previousArticle && (
								<Link
									to={`/articles/${nextArticle.slug}`}
									onClick={() => {
										handleClick(previousArticle);
									}}
									className="gradient-hover"
								>
									{previousArticle.title}
								</Link>
							)}
						</h3>
					</div>
				</div>
				<div className="col col-next">
					<div className="next">
						<p className="next">
							{nextArticle && (
								<Link
									to={`/articles/${nextArticle.slug}`}
									onClick={() => {
										handleClick(nextArticle);
									}}
								>
									Next article
								</Link>
							)}
						</p>
						<h3>
							{nextArticle && (
								<Link
									to={`/articles/${nextArticle.slug}`}
									onClick={() => {
										handleClick(nextArticle);
									}}
									className="gradient-hover"
								>
									{nextArticle.title}
								</Link>
							)}
						</h3>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NextPrev;
