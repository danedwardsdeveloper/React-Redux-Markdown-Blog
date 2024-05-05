const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/articles");
let postList = [];

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log(`Failed to list contents of the directory: ${err}`);
    }

    let filesProcessed = 0;

    files.forEach((file, i) => {
      let obj = {};
      let post;
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
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const date = new Date(metadata.date);
        const timestamp = date.getTime() / 1000;
        const content = parseContent({ lines, metadataIndices });
        console.log(timestamp);
        post = {
          id: timestamp,
          title: metadata.title ? metadata.title : "Title not specified",
          author: metadata.author ? metadata.author : "Author not specified",
          date: metadata.date ? metadata.date : "Date not specified",
          content: content ? content : "Content not specified",
        };
        postList.push(post);

        filesProcessed++;

        if (filesProcessed === files.length - 1) {
          let sortedList = postList.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/articles/articles.json", data);
        }
      });
    });
  });
  // setTimeout(() => {}, 500);
  return;
};

getPosts();
