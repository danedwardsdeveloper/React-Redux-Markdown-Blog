# Minimal coding blog made with React & Markdown

### Features

- Blog articles are written as .md files with metadata at the top and added to the articles folder, then they're parsed by `/public/main.js`, and added to src/articles/articles.json
- Homepage then generates dynamic article previews
- Markdown is removed from the truncated previews to make the homepage look neat

### How to add a new article

- Stop running the live server, if applicable
- Run `public/main.js`
- `articles.json` file should be rewritten including the new article. If you've copied & pasted from a different text editor, you'll need to check through the file for characters that cause problems when converted to JSON.
- If you find any new ones (highlighted in yellow on my VS Code theme), look up the character code [here](https://www.babelstone.co.uk/Unicode/whatisit.html) and add a replace case to the `removeProblemCharacters` function in `/public/main.js`
- Then (hopefully) everything is taken care of! The newest post will be displayed at the top of the homepage

#### Troubleshooting

- Check the `.md` metadata is formatted correctly. There is not much scope for error
- Check that punctuation in the title isn't causing issues with the path

### To-Do List

- Add styling to the markdown so it's consistent
- Fix punctuation replacement error. Getting `isn"t` instead of `isn't` etc.
- Turn each tag into a link to a page of relevant article previews
- Transfer the SingleArticle & About page styling from the static version
- Write a test that checks that the number of objects in `articles.json` matches the number of `.md` files in `src/articles`
- Enable dynamic pagination
- Style the Error page
- What is the H1 on the homepage??
- Add a brief site description
- Site metadata
- Favicon
- Add code syntax highlighting using a library
- Add copy buttons for each code block
- Add line numbers to code blocks
- Turn preview text into a link
- Add fade-in animations when scrolling down the homepage
- Design a sidebar and dynamically display other relevant blog posts
- Make the site responsive
- ~~Remove the word 'post' from the codebase - I prefer the term 'article' and it should be consistent for clarity~~
- ~~Display article tags on single article page~~
- ~~Display article tags on home page~~
- ~~Limit article previews to 5 most recent on home page~~
- ~~This article: **HTML & CSS by Jon Duckett. Is it still relevant?** isn't displaying in full for some reason, possibly because I pasted it from Notion. Fix this error. Solution: wrote a function to find and replace problem characters a weird apostrophe that isn't an apostrope, and an nbsb that looks like a space. Removed question marks from the path~~
- ~~Add a `removeProblemCharacters` function to `public/main.js` to prevent problems in `articles.json`~~
- ~~Implement dynamic page title (browser tab) changes~~

## Nice-to-Have-but-not-Essential To-Do List

- Enable dynamic pagination on individual articles (next article, previous article)
- Make the search bar functional (...eventually)
