import { Helmet } from 'react-helmet';

import {
	baseURL,
	defaultMetaDescription,
	baseTitle,
	defaultKeywords,
} from '../metadata.js';

import SideBar from './SideBar';

function About() {
	return (
		<>
			<Helmet>
				<title>About | {baseTitle}</title>
				<meta property="og:title" content={`Home | ${baseTitle}`} />

				<meta name="description" content={defaultMetaDescription} />
				<meta property="og:description" content={defaultMetaDescription} />

				<meta name="keywords" content={defaultKeywords} />

				<meta property="og:url" content={`${baseURL}/about`} />
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
