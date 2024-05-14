import { createSlice } from "@reduxjs/toolkit";
import ARTICLES from "../../app/ARTICLES.json";

const articlesPerPage = 5;

const initialState = {
  articlesPerPage: 5,
  visibleArticles: ARTICLES.slice(0, articlesPerPage),
  totalPages: Math.ceil(ARTICLES.length / articlesPerPage),
};

export const articlesSlice = createSlice({
  name: "articlesReducer",
  initialState: {
    allArticles: ARTICLES,
    filteredArticles: ARTICLES,
    visibleArticles: initialState.visibleArticles,
    articlesPerPage: initialState.articlesPerPage,
    currentPage: 1,
    totalPages: initialState.totalPages,
    currentArticle: ARTICLES[0],
    tags: ARTICLES[0].tags,
    recentArticles: ARTICLES.slice(0, 5),
    filteredPageTitle: "",
  },
  reducers: {
    setPage: (state, action) => {
      const { currentPage } = action.payload;
      state.currentPage = currentPage;

      const startIndex = (currentPage - 1) * articlesPerPage;
      const endIndex = currentPage * articlesPerPage;

      state.visibleArticles = state.filteredArticles.slice(startIndex, endIndex);
    },

    setCurrentArticle(state, action) {
      let currentArticle = action.payload;
      state.currentArticle = currentArticle;

      state.recentArticles = ARTICLES.filter((article) => currentArticle !== article).slice(0, 5);

      state.tags = currentArticle.tags;
    },
    filterArticlesByTag(state, action) {
      const filterTerm = action.payload;
      state.filteredPageTitle = filterTerm;

      const filteredArticles = state.allArticles.filter((article) => article.tags.includes(filterTerm));
      state.filteredArticles = filteredArticles;

      state.totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

      state.visibleArticles = state.filteredArticles.slice(0, 5);

      state.currentPage = 1;
    },
    clearFilterTerm(state, action) {
      state.filteredArticles = ARTICLES;
      state.filteredPageTitle = "";
      state.totalPages = initialState.totalPages;
    },
  },
});

export const { setPage, setCurrentArticle, filterArticlesByTag, clearFilterTerm } = articlesSlice.actions;
export default articlesSlice.reducer;
