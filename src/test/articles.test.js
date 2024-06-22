const fs = require('fs');
const path = require('path');
const assert = require('assert');

describe('Articles', function () {
	it('should have the same number of .md files as the length of articles.json array', function (done) {
		const articlesDir = path.join(__dirname, '../app/articles');
		const ARTICLESjsonPath = path.join(__dirname, '../app/ARTICLES.json');

		// Read the directory to get the number of .md files
		fs.readdir(articlesDir, (err, files) => {
			if (err) return done(err);

			const mdFiles = files.filter((file) => file.endsWith('.md'));
			const mdFilesCount = mdFiles.length;
			console.log(`Number of .md files: ${mdFilesCount}`);

			// Read the articles.json file
			fs.readFile(ARTICLESjsonPath, 'utf8', (err, data) => {
				if (err) return done(err);

				const articles = JSON.parse(data);
				const ARTICLESjsonLength = articles.length;
				console.log(`Array length of ARTICLES.json: ${ARTICLESjsonLength}`);

				// Assert that the counts are equal
				assert.strictEqual(mdFilesCount, ARTICLESjsonLength);
				done();
			});
		});
	});
});
