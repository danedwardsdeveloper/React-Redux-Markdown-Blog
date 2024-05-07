const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/articles");
let articleList = [];

function removeProblemCharacters(jsString) {
  return jsString.replace(/\u2019|\u00A0|\u2013/g, (match) => {
    switch (match) {
      case "\u2019":
        return '"';
      case "\u00A0":
        return " ";
      case "\u2013":
        return "-";
    }
  });
}

function trimArticle(str, maxChar = 700) {
  return str.length > maxChar ? str.substring(0, maxChar - 3) + "..." : str;
}

function removeMarkdown(str) {
  const markdownPatterns = [/\*\*(.*?)\*\*/g, /__(.*?)__/g, /\[(.*?)\]\((.*?)\)/g, /^#+\s(.*)/gm, /`(.*?)`/g, /\n={2,}/g];
  let cleanedStr = str;
  markdownPatterns.forEach((pattern) => {
    cleanedStr = cleanedStr.replace(pattern, "$1");
  });
  return cleanedStr;
}

function generatePath(str) {
  const removePunctuation = (str) => {
    let punctuationRegex = /[.,/?#!$%^&*;:{}=\-_`~()'"]/g;
    return str.replace(punctuationRegex, "");
  };
  const addDashes = (str) => {
    return str.replace(/\s+/g, "-");
  };
  return addDashes(removePunctuation(str)).toLowerCase();
}

function getArticles() {
  fs.readdir(dirPath, (err, files) => {
    const markdownFiles = files.filter((file) => file.endsWith(".md"));
    if (err) {
      return console.log(`Failed to list contents of the directory: ${err}`);
    }

    let filesProcessed = 0;

    markdownFiles.forEach((file, i) => {
      let obj = {};
      let article;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        let lines = contents.split("\n");
        let metadataIndices = lines.reduce(getMetadataIndices, []);
        let metadata = parseMetadata({ lines, metadataIndices });
        let date = new Date(metadata.date);
        let timestamp = date.getTime() / 1000;
        let content = removeProblemCharacters(parseContent({ lines, metadataIndices }));
        let preview = removeMarkdown(trimArticle(content));
        let path = generatePath(metadata.title);
        article = {
          id: timestamp,
          title: metadata.title ? metadata.title : "Title not specified",
          author: metadata.author ? metadata.author : "Author not specified",
          date: metadata.date ? metadata.date : "Date not specified",
          path: path,
          preview: preview ? preview : "Preview not specified",
          content: content ? content : "Content not specified",
        };

        articleList.push(article);

        filesProcessed++;

        if (filesProcessed === files.length - 1) {
          let sortedList = articleList.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/articles/articles.json", data);
        }
      });
    });
  });
  return;
}

getArticles();
