// const fs = require("fs");
// const mockFs = require("mock-fs");

// describe("Article count check", () => {
//   beforeEach(() => {
//     // Set up a mock file system
//     mockFs({
//       "src/articles": {
//         "article1.md": "Content of article 1",
//         "article2.md": "Content of article 2",
//       },
//       "articles.json": JSON.stringify([
//         /* ... your articles.json content */
//       ]),
//     });
//   });

//   afterEach(() => {
//     // Restore the real file system
//     mockFs.restore();
//   });

//   it("should have the same number of .md files and objects in articles.json", () => {
//     const articlesJson = JSON.parse(fs.readFileSync("articles.json", "utf8"));
//     const mdFiles = fs.readdirSync("src/articles").filter((file) => file.endsWith(".md"));

//     expect(mdFiles.length).toEqual(articlesJson.length);
//   });
// });
