const fs = require('fs');
const path = require('path');

interface Article {
	id: number;
	title: string;
	writer: string;
	date: string;
	metadescription: string;
	keywords: string;
	slug: string;
	writerSlug: string;
	tags: string[];
	preview: string;
	content: string;
}

interface Metadata {
	[key: string]: string;
}

function generateARTICLES() {
	const dirPath = path.join(__dirname, './articles');
	let articleList: Article[] = [];
	let filesProcessed = 0;
	let latestArticle: Article | null = null;

	const replaceProblemCharacters = (jsString: string): string => {
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

	const trimArticle = (str: string, maxChar: number = 700): string => {
		return str.length > maxChar ? str.substring(0, maxChar - 3) + '...' : str;
	};

	const removeMarkdown = (str: string): string => {
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

	function generateSlug(str: string): string {
		const removePunctuation = (str: string): string => {
			let punctuationRegex = /[.,/?#!$%^&*;:{}=\-_`~()'"|]/g;
			return str.replace(punctuationRegex, '');
		};
		const addDashes = (str: string): string => {
			return str.replace(/\s+/g, '-');
		};
		return addDashes(removePunctuation(str)).toLowerCase();
	}

	fs.readdir(dirPath, (err: NodeJS.ErrnoException | null, files: string[]) => {
		if (err) {
			return console.log(`Failed to list contents of the directory: ${err}`);
		}

		const markdownFiles = files.filter((file) => file.endsWith('.md'));

		markdownFiles.forEach((file) => {
			fs.readFile(path.join(dirPath, file), 'utf8', (err: NodeJS.ErrnoException | null, contents: string) => {
				if (err) {
					console.log(`Error reading file ${file}: ${err}`);
					return;
				}

				const getMetadataIndices = (acc: number[], elem: string, i: number): number[] => {
					if (/^---/.test(elem)) {
						acc.push(i);
					}
					return acc;
				};

				const parseMetadata = ({ lines, metadataIndices }: { lines: string[], metadataIndices: number[] }): Metadata => {
					let obj: Metadata = {};
					if (metadataIndices.length > 0) {
						let metadata = lines.slice(
							metadataIndices[0] + 1,
							metadataIndices[1]
						);
						metadata.forEach((line) => {
							const [key, value] = line.split(': ');
							obj[key] = value;
						});
					}
					return obj;
				};

				const parseContent = ({ lines, metadataIndices }: { lines: string[], metadataIndices: number[] }): string => {
					if (metadataIndices.length > 0) {
						lines = lines.slice(metadataIndices[1] + 1);
					}
					return lines.join('\n');
				};

				let lines = contents.split('\n');
				let metadataIndices = lines.reduce(getMetadataIndices, []);
				let metadata = parseMetadata({ lines, metadataIndices });

				let date = new Date(metadata.date);
				let timestamp = Math.floor(date.getTime() / 1000);
				let content = replaceProblemCharacters(
					parseContent({ lines, metadataIndices })
				);
				let preview = removeMarkdown(trimArticle(content));
				let title = replaceProblemCharacters(metadata.title);
				let slug = generateSlug(replaceProblemCharacters(metadata.title));
				let writerSlug = generateSlug(metadata.writer);
				let tagString = metadata.tags;
				let tags = tagString.split(', ');

				let article: Article = {
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

				for (let key in article) {
					if (article[key as keyof Article] === undefined) {
						console.log(`File "${file}" is missing the "${key}" field.`);
					}
				}

				articleList.push(article);
				filesProcessed++;

				if (!latestArticle || article.id > latestArticle.id) {
					latestArticle = article;
				}

				if (filesProcessed === markdownFiles.length) {
					let sortedList = articleList.sort((a, b) => b.id - a.id);
					let data = JSON.stringify(sortedList);

					const filePath = path.join(
						__dirname,
						'../../src/app/ARTICLES.json'
					);
					fs.writeFile(filePath, data, (err: NodeJS.ErrnoException | null) => {
						if (err) {
							console.log(`Error writing file: ${err}`);
						} else {
							console.log('ARTICLES.json has been generated successfully.');
							console.log(`Number of files processed: ${filesProcessed}`);
							if (latestArticle) {
								console.log(`Title of the latest article: ${latestArticle.title}`);
							} else {
								console.log('No articles were processed.');
							}
						}
					});
				}
			});
		});
	});
}

generateARTICLES();