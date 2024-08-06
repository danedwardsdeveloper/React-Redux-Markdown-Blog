import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
	findArticlesContaining,
	setFilterTermType,
} from '../features/articles/articlesSlice';

function Tags() {
	const { tags } = useSelector((state) => state.articlesSlice);

	const scrollOptions = {
		top: 0,
		left: 0,
		behavior: 'smooth',
	};

	function scrollToTop(options = scrollOptions) {
		window.scrollTo(options);
	}

	const dispatch = useDispatch();
	const handleTagClick = (tag) => {
		dispatch(findArticlesContaining(tag));
		dispatch(setFilterTermType('tag'));
		scrollToTop();
	};

	function generateSlug(tag) {
		return tag.toLowerCase().replace(/\s/g, '-');
	}

	return (
		<>
			{tags && (
				<ul>
					{tags.map((tag) => (
						<li key={tag}>
							<Link
								to={`/tags/${generateSlug(tag)}`}
								onClick={() => {
									handleTagClick(tag);
								}}
							>
								{tag}
							</Link>
						</li>
					))}
				</ul>
			)}
		</>
	);
}

export default Tags;
