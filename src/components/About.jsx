import { Helmet } from 'react-helmet-async';

import {
	baseURL,
	defaultMetaDescription,
	baseTitle,
	defaultKeywords,
} from '../metadata.js';

import SideBar from './SideBar.jsx';

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
						<p>{defaultMetaDescription} Created by Dan Edwards.</p>
					</article>
				</div>

				<SideBar />
			</main>
		</>
	);
}

export default About;
