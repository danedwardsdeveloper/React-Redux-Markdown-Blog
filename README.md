# Minimal coding blog made with React & Markdown

<a href="https://arrayofsunshine.co.uk/" target="_blank">
Deployed site: Array of Sunshine</a>

---

Homepage

![Desktop homepage mockup](./design-planning/preview-mockups/Exports/MacBook-Homepage.webp)
![Tablet & mobile mockup](./design-planning/preview-mockups/Exports/tablet-mobile.webp)

---

Full article
![Desktop full article mockup](./design-planning/preview-mockups/Exports/MacBook-full-article.webp)

---

Full article with code examples
![Desktop Full article with code examples mockup](./design-planning/preview-mockups/Exports/MacBook-code.webp)

---

Pagination
![Desktop pagination & footer mockup](./design-planning/preview-mockups/Exports/MacBook-pagination.webp)

---

Filter term page - click on a tag or writer
![Desktop homepage mockup](./design-planning/preview-mockups/Exports/MacBook-Filter-page.webp)

### Technologies

-  React `v18.3.1`
-  React router `v6.23.0`
-  React markdown
-  React syntax highlighter
-  Reach Helmet
-  Redux Persist
-  Redux & toolkit
-  Sass

### To-Do List

-  [ ] Style the code block copy buttons beautifully

-  [ ] Add search function
-  [ ] Add metadata to tags and writer pages
-  [ ] Generate keywords and meta descriptions for all proper coding articles
-  [ ] Remove Shakespeare articles
-  [ ] Rewrite About page

### Tests

-  Check that internal links don't contain problem punctuation
-  Check that length of `ARTICLES.json` matches number of files in `app/articles`

-  [ ] Write tests for localhost
-  [ ] Write tests for live site

### Features

-  Serverless easy-to-maintain React blog
-  High-performance web app that's lightening-fast
-  Each markdown article is converted into a web page
-  Supports code blocks
-  Minimal & responsive design
-  Articles automatically sorted chronologically
-  Markdown syntax is removed from the truncated previews to make the homepage look neat
-  Recent articles (on full article page) are displayed dynamically
-  Pagination is handled dynamically
-  Tags and writer collections handled dynamically

### Installation

1. Install dependencies `npm install`
2. Write `.md` articles in the following format, and add them to `src/app/articles`

```markdown
---
title: Why I Quit Hollywood and Started a Web Development Agency
date: January 01, 2016
writer: Lindsay Lohan
tags: Web Design, Celebrity
---

## Article content with markdown syntax

The Hollywood Hills shimmered in the distance, a constant reminder of the life I was leaving behind. Million-dollar contracts, screaming fans, and the intoxicating allure of the red carpet – it all felt like a faded dream. The truth was, the magic had dimmed. I craved a different kind of creation, something where my vision could truly take center stage. So, with a deep breath and a heart full of trepidation, I announced my retirement from acting. Trading scripts for code, I embarked on a new adventure.
```

3. Run `generateARTICLES.js`. `ARTICLES.json` will be overwritten.
4. Run `npm start` to start the live server or...
5. Run `npm run build` to build a deployable site

### To-Do List

-  [ ] If you refresh the page while viewing an article, the state will change and the content will change. Install Redux Persist
-  [ ] Remove unused images & icons
-  [ ] Remove unused variables and rebuild
-  [ ] Make metadata / link sharing previews dynamic and enable image preview for all paths. Install Redux Helmet
-  [ ] Refactor some of the repetition in some of the components.
-  [ ] add `rel="noopener"` to Footer links
-  [ ] Styling of active nav link - make underline further away from text
-  [ ] Create an Error page / Component
-  [ ] Style the Error page with useful Back and Home buttons
-  [ ] Add conditional loading to the article page to handle errors gracefully
-  [ ] Write a test that checks that the number of objects in `articles.json` matches the number of `.md` files in `src/articles`
-  [ ] Social icons could be prettier
-  [ ] Implement loading progress bar at the top of the page
-  [ ] Style the scroll bar in the theme colours (Maybe - actually this could be annoying)
-  [ ] Clicking on home seems computationally expensive. Make more efficient, perhaps by expanding the state so that visibleArticles doesn't change when you click a filter term
-  [ ] Fix: Markdown code blocks: 1st line number is weirdly indented.
-  [ ] Enable code wrap
-  [ ] Add subtle fade-in animation to each article preview when scrolling down the homepage
-  [ ] Add copy buttons for each code block
-  [ ] Scroll to the top of the <article> element when clicking on a link
-  [ ] Make the (currently hidden) search bar functional
-  [ ] Organise `article.md` files into folders, ensuring they can still be read by `main.js`
-  [ ] Prevent incorrect article paths from displaying an empty page
-  [ ] Fancy bracket animation on site title. [CSS Bracket hover animation](https://codepen.io/adatg/pen/BGLVGL?editors=0100)
-  [ ] Blur link on mobile after clicking pagination links. Tried `event.target.blur()` but this didn't work. Other people on stackOverflow mention it also doesn't work for them

## Useful resources

-  [Building a Markdown React blog - YouTube tutorial](https://www.youtube.com/watch?v=gT1v33oA1gI) All the React content is wildly out of date, but it's still helpful for converting mardown into JSON
-  [Enabling pagination in React](https://www.educative.io/answers/how-to-implement-pagination-in-reactjs)
-  [Codecademy React Router cheatsheet](https://www.codecademy.com/learn/learn-react-router/modules/learn-react-router/cheatsheet)
