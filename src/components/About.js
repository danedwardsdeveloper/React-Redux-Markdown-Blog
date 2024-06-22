import { Helmet } from 'react-helmet';

import SideBar from './SideBar';

function About() {
	const title = `Home | Array of Sunshine | Front-End WebDev Blog: JavaScript,
					React, Coding book Reviews`;

	const description = `Array of Sunshine is a blog about front-end web development, with practical JavaScript & React tutorials, and in-depth coding book reviews.`;

	const keywords = `front-end development, JavaScript, React, coding books, web development blog, programming tutorials, book reviews`;

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta property="og:title" content={title} />

				<meta name="description" content={description} />
				<meta property="og:description" content={description} />

				<meta name="keywords" content={keywords} />

				<meta property="og:url" content="https://arrayofsunshine.co.uk" />
			</Helmet>

			<main className="main--article">
				<div className="col">
					<article className="article--full">
						<h1 className="article-title--full">About</h1>
						<p>
							Array of Sunshine is a blog about front-end web
							development, with practical JavaScript & React tutorials,
							and in-depth coding book reviews. Currently also contains
							AI articles by Google Gemini, and some sonnets by
							Shakespeare, just to demonstrate writer and tags
							collections and pagination features. Created by Dan
							Edwards.
						</p>
						<p>
							Dan is a front-end web developer based in Bolton, UK.
							Currently training to full-stack with Codecademy.
						</p>
					</article>
				</div>

				<SideBar />
			</main>
		</>
	);
}

export default About;
