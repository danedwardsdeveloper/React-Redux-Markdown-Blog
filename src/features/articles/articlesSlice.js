import { createSlice } from '@reduxjs/toolkit';
import ARTICLES from '../../app/ARTICLES.json';

const articlesPerPage = 5;

const calculateInitialState = () => ({
	visibleArticles: ARTICLES.slice(0, articlesPerPage),
	totalPages: Math.ceil(ARTICLES.length / articlesPerPage),
});

export const articlesSlice = createSlice({
	name: 'articlesReducer',
	initialState: {
		allArticles: ARTICLES,
		filteredArticles: ARTICLES,
		visibleArticles: calculateInitialState().visibleArticles,
		articlesPerPage: articlesPerPage,
		currentPage: 1,
		totalPages: calculateInitialState().totalPages,
		previousArticle: ARTICLES[ARTICLES.length - 1],
		currentArticle: ARTICLES[0],
		nextArticle: ARTICLES[1],
		tags: ARTICLES[0].tags,
		recentArticles: ARTICLES.slice(0, 5),
		filterTerm: '',
		filterTermType: '',
	},
	reducers: {
		setPage: (state, action) => {
			const { currentPage } = action.payload;
			state.currentPage = currentPage;

			const startIndex = (currentPage - 1) * articlesPerPage;
			const endIndex = currentPage * articlesPerPage;

			state.visibleArticles = state.filteredArticles.slice(
				startIndex,
				endIndex
			);
		},

		setCurrentArticle(state, action) {
			const currentArticle = action.payload;
			state.currentArticle = currentArticle;

			const currentIndex = ARTICLES.findIndex(
				(article) => article === currentArticle
			);

			state.previousArticle =
				ARTICLES[
					currentIndex === 0 ? ARTICLES.length - 1 : currentIndex - 1
				];
			state.nextArticle =
				ARTICLES[
					currentIndex === ARTICLES.length - 1 ? 0 : currentIndex + 1
				];

			state.recentArticles = ARTICLES.filter(
				(article) => article !== currentArticle
			).slice(0, 5);

			state.tags = currentArticle.tags;
		},

		findArticlesContaining(state, action) {
			const filterTerm = action.payload;
			state.filterTerm = filterTerm;

			const filteredArticles = state.allArticles.filter(
				(article) =>
					article.tags.includes(filterTerm) ||
					article.writer.includes(filterTerm)
			);
			state.filteredArticles = filteredArticles;

			state.totalPages = Math.ceil(
				filteredArticles.length / articlesPerPage
			);

			state.visibleArticles = state.filteredArticles.slice(
				0,
				articlesPerPage
			);

			state.currentPage = 1;
		},

		setFilterTermType(state, action) {
			state.filterTermType = action.payload;
		},

		clearFilterTerm(state) {
			state.filteredArticles = ARTICLES;
			state.filterTerm = '';
			state.totalPages = calculateInitialState().totalPages;
			state.visibleArticles = state.filteredArticles.slice(
				0,
				articlesPerPage
			);
			state.currentPage = 1;
		},

		resetVisibleArticles: (state) => {
			state.visibleArticles = calculateInitialState().visibleArticles;
		},
	},
});

export const {
	setPage,
	setCurrentArticle,
	findArticlesContaining,
	clearFilterTerm,
	setFilterTermType,
	resetVisibleArticles,
} = articlesSlice.actions;
export default articlesSlice.reducer;

// THis might be a more efficient way to find the recent articles.
// const recentArticles = [];
// let count = 0;
// for (let i = 1; i < ARTICLES.length && count < 5; i++) {
//   if (ARTICLES[i].id !== currentArticle.id) {
//     recentArticles.push(ARTICLES[i]);
//     count++;
//   }
// }

// Update recent articles (excluding current and already set previous/next)
// state.recentArticles = ARTICLES.filter(article =>
//   article !== currentArticle && article !== previousArticle && article !== nextArticle
// ).slice(0, 5);
// state.tags = currentArticle.tags;
