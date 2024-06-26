const fs = require('fs');
const path = require('path');

function generateARTICLES() {
	const dirPath = path.join(__dirname, './articles');
	let articleList = [];

	const replaceProblemCharacters = (jsString) => {
		return jsString.replace(
			/\u2018|\u2019|\u00A0|\u2013|\u2014|\u2026|\u00C2|\u00E2/g,
			(match) => {
				switch (match) {
					case '\u2018':
						return '`';
					case '\u2019':
						return `'`;
					case '\u00A0':
						return ' ';
					case '\u2013':
						return '-';
					case '\u2014':
						return '--';
					case '\u2026':
						return '...';
					case '\u00C2':
						return 'A';
					case '\u00E2':
						return 'â';
					default:
						return match;
				}
			}
		);
	};

	const trimArticle = (str, maxChar = 700) => {
		return str.length > maxChar ? str.substring(0, maxChar - 3) + '...' : str;
	};

	const removeMarkdown = (str) => {
		const markdownPatterns = [
			/\*\*(.*?)\*\*/g,
			/__(.*?)__/g,
			/\[(.*?)\]\((.*?)\)/g,
			/^#+\s(.*)/gm,
			/`(.*?)`/g,
			/\n={2,}/g,
		];
		let cleanedStr = str;
		markdownPatterns.forEach((pattern) => {
			cleanedStr = cleanedStr.replace(pattern, '$1');
		});
		return cleanedStr;
	};

	function generateSlug(str) {
		const removePunctuation = (str) => {
			let punctuationRegex = /[.,/?#!$%^&*;:{}=\-_`~()'"|]/g;
			return str.replace(punctuationRegex, '');
		};
		const addDashes = (str) => {
			return str.replace(/\s+/g, '-');
		};
		return addDashes(removePunctuation(str)).toLowerCase();
	}

	fs.readdir(dirPath, (err, files) => {
		const markdownFiles = files.filter((file) => file.endsWith('.md'));
		if (err) {
			return console.log(`Failed to list contents of the directory: ${err}`);
		}

		let filesProcessed = 0;

		markdownFiles.forEach((file, i) => {
			let obj = {};
			let article;
			fs.readFile(`${dirPath}/${file}`, 'utf8', (err, contents) => {
				const getMetadataIndices = (acc, elem, i) => {
					if (/^---/.test(elem)) {
						acc.push(i);
					}
					return acc;
				};

				const parseMetadata = ({ lines, metadataIndices }) => {
					if (metadataIndices.length > 0) {
						let metadata = lines.slice(
							metadataIndices[0] + 1,
							metadataIndices[1]
						);
						metadata.forEach((line) => {
							obj[line.split(': ')[0]] = line.split(': ')[1];
						});
						return obj;
					}
				};

				const parseContent = ({ lines, metadataIndices }) => {
					if (metadataIndices.length > 0) {
						lines = lines.slice(metadataIndices[1] + 1, lines.length);
					}
					return lines.join('\n');
				};

				let lines = contents.split('\n');
				let metadataIndices = lines.reduce(getMetadataIndices, []);
				let metadata = parseMetadata({ lines, metadataIndices });
				let date = new Date(metadata.date);
				let timestamp = date.getTime() / 1000;
				let content = replaceProblemCharacters(
					parseContent({ lines, metadataIndices })
				);
				let preview = removeMarkdown(trimArticle(content));
				let title = replaceProblemCharacters(metadata.title);
				let slug = generateSlug(replaceProblemCharacters(metadata.title));
				let writerSlug = generateSlug(metadata.writer);
				let tagString = metadata.tags;
				let tags = tagString.split(', ');

				article = {
					id: timestamp,
					title: title,
					writer: metadata.writer,
					date: metadata.date,
					metadescription: metadata.metadescription,
					keywords: metadata.keywords,
					slug: slug,
					writerSlug: writerSlug,
					tags: tags,
					preview: preview,
					content: content,
				};

				articleList.push(article);
				filesProcessed++;

				if (filesProcessed === files.length - 1) {
					let sortedList = articleList.sort((a, b) => {
						return a.id < b.id ? 1 : -1;
					});
					let data = JSON.stringify(sortedList);

					const filePath = path.join(
						__dirname,
						'../../src/app/ARTICLES.json'
					);
					fs.writeFileSync(filePath, data);
				}
			});
		});
	});
	return;
}

generateARTICLES();
