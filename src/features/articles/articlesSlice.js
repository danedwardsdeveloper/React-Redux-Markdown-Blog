import { createSlice } from "@reduxjs/toolkit";
import ARTICLES from "../../app/ARTICLES.json";

const articlesPerPage = 5;
const visibleArticles = ARTICLES.slice(0, articlesPerPage);
const totalPages = Math.ceil(ARTICLES.length / articlesPerPage);

export const articlesSlice = createSlice({
  name: "articlesReducer",
  initialState: {
    allArticles: ARTICLES,
    visibleArticles: visibleArticles,
    articlesPerPage: 5,
    currentPage: 1,
    totalPages: totalPages,
    currentArticle: ARTICLES[0],
    recentArticles: ARTICLES.slice(0, 5),
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
      state.currentArticle = action.payload;
    },

    setRecentArticles(state, action) {
      let currentArticle = action.payload;

      state.recentArticles = ARTICLES.filter((article) => currentArticle !== article).slice(0, 5);
    },
  },
});

export const { setPage, setCurrentArticle, setRecentArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
