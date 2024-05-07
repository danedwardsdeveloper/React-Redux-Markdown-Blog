# Minimal coding blog made with React & Markdown

### Features

- Blog articles are written as .md files with metadata at the top and added to the articles folder, then they're parsed by `/public/main.js`, and added to src/articles/articles.json
- Homepage then generates dynamic article previews
- Markdown is removed from the truncated previews to make the homepage look neat

### How to add a new article

- Delete `src/articles/articles.json`
- Run `public/main.js`
- A new `articles.json` file should be generated
- Everything is taken care of! The newest post will be displayed at the top of the homepage

### To-Do List

- Limit article previews to 5 most recent on home page
- Enable dynamic pagination
- Transfer the SingleArticle & About page styling from the static version
- Style the Error page
- What is the H1 on the homepage??
- Add a brief site description
- Site metadata
- Favicon
- Implement dynamic page title (browser tab) changes
- Style the markdown nicely
- Add code syntax highlighting using a library
- Add copy buttons for each code block
- Add copy buttons for each code block
- Turn preview text into a link
- Add fade-in animations when scrolling down the homepage
- Design a sidebar and dynamically display other relevant blog posts
- Make the site responsive
- Remove the word 'post' from the codebase - I prefer the term 'article' and it should be consistent for clarity

## Nice-to-Have-but-not-Essential To-Do List

- Enable dynamic pagination on individual articles (next article, previous article)
- Make the search bar functional (...eventually)
