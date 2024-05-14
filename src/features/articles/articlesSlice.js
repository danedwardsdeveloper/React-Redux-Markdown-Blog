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
  },
  reducers: {
    setPage: (state, action) => {
      const { currentPage } = action.payload;
      state.currentPage = currentPage;

      const startIndex = (currentPage - 1) * articlesPerPage;
      const endIndex = currentPage * articlesPerPage;

      state.visibleArticles = state.allArticles.slice(startIndex, endIndex);
      // console.log(`Start index: ${startIndex}`);
      // console.log(`End index: ${endIndex}`);
    },
  },
});

export const { setPage, goToPreviousPage, getArticlesByPage, getTotalPages } = articlesSlice.actions;
export default articlesSlice.reducer;
