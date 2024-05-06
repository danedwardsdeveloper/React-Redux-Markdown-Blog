# Minimal coding blog made with React & Markdown

### Features

- Blog articles are written as .md files with metadata at the top and added to the articles folder, then they're parsed by `/public/main.js`, and added to src/articles/articles.json
- Homepage then generates dynamic article previews
- Markdown is removed from the truncated previews to make the homepage look neat

### To-Do List

- Make a SingleArticle page and render the Article and Sidebar components dynamically
- Fix the error when clicking on article links
- Style the About page
- Implement dynamic page title changes
- Style the markdown nicely
- Add code syntax highlighting using a library
- Add copy buttons for each code block
- Turn preview text into a link
- Add fade-in animations when scrolling down the homepage
- Design a sidebar and dynamically display other relevant blog posts
- Make the site responsive
- Remove the word 'post' from the codebase - I prefer the term 'article' and it should be consistent for clarity
- Make the search bar functional (...eventually)
