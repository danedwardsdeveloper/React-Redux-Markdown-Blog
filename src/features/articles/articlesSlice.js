import { createSlice } from "@reduxjs/toolkit";
import ARTICLES from "../../app/ARTICLES.json";

const articlesPerPage = 5;
const visibleArticles = ARTICLES.slice(0, articlesPerPage);
const totalPages = Math.ceil(ARTICLES.length / articlesPerPage);

export const articlesSlice = createSlice({
  name: "articlesReducer",
  initialState: {
    allArticles: ARTICLES,
    filteredArticles: [],
    visibleArticles: visibleArticles,
    articlesPerPage: 5,
    currentPage: 1,
    totalPages: totalPages,
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

      state.visibleArticles = state.allArticles.slice(startIndex, endIndex);
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

      state.visibleArticles = state.filteredArticles.slice(0, 5);
    },
  },
});

export const { setPage, setCurrentArticle, filterArticlesByTag } = articlesSlice.actions;
export default articlesSlice.reducer;
