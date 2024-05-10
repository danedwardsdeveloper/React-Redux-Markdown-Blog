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
- Then (hopefully) everything will be taken care of dynamically! The newest post will be displayed at the top of the homepage

#### Troubleshooting

- Check the `.md` metadata is formatted correctly. There is not much scope for error
- Check that punctuation in the title isn't causing issues with the path

### To-Do List

- Home nav link should go to results page 1
- Style tags & authors pages
- Replace the word 'author' with 'writer' everywhere for consistency
- Make the site responsive
- Add conditional loading to the article page to handle errors gracefully
- Diff check the styling between static & react versions
- Transfer the SingleArticle & About page styling from the static version
- Write a test that checks that the number of objects in `articles.json` matches the number of `.md` files in `src/articles`
- Enable dynamic metadata
- Add screenshot to ReadMe
- Add screenshot to Twitter OG metadata
- Make markdown links open in a new tab
- Demonstrate Markdown format in ReadMe
- Clean up the article content
- Invite other programmers to write articles
- Style social icons into circles

## Nice-to-Have-but-not-Essential To-Do List

- Enable dynamic pagination on individual articles (next article, previous article)
- Add fade-in animations when scrolling down the homepage (Harder than expected)
- Add copy buttons for each code block
- Scroll to the top of the <article> element when clicking on a link (This seems much harder than expected!)
- Make the search bar functional (...eventually)
- Organise `article.md` files into folders, ensuring they can still be read by `main.js`
- Prevent incorrect article paths from displaying an empty page
- Bracket animation on site title

### To-Do List | Completed

- ~~Enable preview page sorted by tags~~
- ~~Design a sidebar and dynamically display other relevant blog posts~~
- ~~Tidy up Home page function~~
- ~~Display the three most recent articles in the sidebar that aren't the current article~~
- ~~Check article bodies for errors~~
- ~~Enable dynamic pagination~~
- ~~Add 'newer posts' link, which will be hidden on page one.~~
- ~~Style the Error page~~
- ~~Favicon~~
- ~~Add line numbers to code blocks~~
- ~~Turn preview text into a link~~
- ~~Automatically scroll to the top of the page instantly when clicking on an article link~~
- ~~Scroll smoothly when clicking on 'top of page' internal link~~
- ~~Add styling to the markdown so it's consistent~~
- ~~Generate author links~~
- ~~Add code syntax highlighting using a library~~
- ~~Remove the word 'post' from the codebase - I prefer the term 'article' and it should be consistent for clarity~~
- ~~Display article tags on single article page~~
- ~~Display article tags on home page~~
- ~~Limit article previews to 5 most recent on home page~~
- ~~This article: HTML & CSS by Jon Duckett. Is it still relevant? isn't displaying in full for some reason, possibly because I pasted it from Notion. Fix this error. Solution: wrote a function to find and replace problem characters a weird apostrophe that isn't an apostrope, and an nbsb that looks like a space. Removed question marks from the path~~
- ~~Add a `removeProblemCharacters` function to `public/main.js` to prevent problems in `articles.json`~~
- ~~Implement dynamic page title (browser tab) changes~~
- ~~Buy domain name~~
- ~~Add a brief site description to About page~~
- ~~Homepage metadata~~
- ~~Fix punctuation replacement error. Getting `isn"t` instead of `isn't` etc. Fixed! Prettify was messing everything up - solution was to wrap punctuation in backticks.~~
- ~~Conditional rendering of 'Newer posts' & ''Older posts' nav as when appropriate~~
- ~~Dynamic page titles when using pagination nav links~~
- ~~Fix sidebar recent article paths~~
- ~~Turn each tag into a link to a page of relevant article previews~~
- ~~Turn each author into a page of previews by that author~~
- ~~Update site title for tags & authors pages~~

### Helpful resources

- [Enabling pagination using React](https://www.educative.io/answers/how-to-implement-pagination-in-reactjs)
- [CSS Bracket hover animation](https://codepen.io/adatg/pen/BGLVGL?editors=0100)
