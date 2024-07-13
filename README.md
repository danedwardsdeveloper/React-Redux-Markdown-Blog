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

### Features

-  Serverless easy-to-maintain React blog
-  High-performance web app that's lightening-fast
-  Each markdown article is converted into a web page
-  Supports code blocks with copy buttons
-  Ultra minimal & responsive design
-  Articles automatically sorted chronologically
-  Markdown syntax is removed from the truncated previews to make the homepage look neat
-  Recent articles (on full article page), pagination, and article collections are handled dynamically

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

3. Run `generateARTICLES.ts`. `ARTICLES.json` will be overwritten.
4. Run `npm start` to start the live server or...
5. Run `npm run build` to build a deployable site
6. My articles are copyright but you're welcome to copy my code.

#### Console log after running generateArticles.ts

```txt
File "eloquent-javascript-review.md" is missing the "keywords" field.
ARTICLES.json has been generated successfully.
Number of files processed: 13
Title of the latest article: Creating a Complex React Root | Order and Dependencies
```

### Feature Roadmap

-  [ ] Style the code block buttons like this [example](https://fly.io/docs/flyctl/install/)
   -  [ ] Code wrap buttons
   -  [ ] Lovely tooltip
-  [ ] Refactor some of the repetition in some of the components.
-  [ ] Codeblock header slightly different colour
-  [ ] Create an Error page / Component
-  [ ] Style the Error page with useful Back and Home buttons
-  [ ] Add conditional loading to the article page to handle errors gracefully
-  [ ] Social icons could be prettier
-  [ ] Implement loading progress bar at the top of the page
-  [ ] Skeleton screen
-  [ ] Style the scroll bar in the theme colours (Maybe - actually this could be annoying)
-  [ ] Code wrap button on each block
-  [ ] Global dark mode button
-  [ ] Add subtle fade-in animation to each article preview when scrolling down the homepage
-  [ ] Make the (currently hidden) search bar functional
-  [ ] Organise `article.md` files into folders, ensuring they can still be read by `main.js`
-  [ ] Prevent incorrect article paths from displaying an empty page
-  [ ] Fancy bracket animation on site title. [CSS Bracket hover animation](https://codepen.io/adatg/pen/BGLVGL?editors=0100)
-  [ ] Blur link on mobile after clicking pagination links. Tried `event.target.blur()` but this didn't work. Other people on stackOverflow mention it also doesn't work for them

## Useful resources

-  [Building a Markdown React blog - YouTube tutorial](https://www.youtube.com/watch?v=gT1v33oA1gI) All the React content is wildly out of date, but it's still helpful for converting mardown into JSON
-  [Enabling pagination in React](https://www.educative.io/answers/how-to-implement-pagination-in-reactjs)
-  [Codecademy React Router cheatsheet](https://www.codecademy.com/learn/learn-react-router/modules/learn-react-router/cheatsheet)
