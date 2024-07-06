import { useState, useEffect } from 'react';
import { smoothScrollToTop } from '../features/utilities';

function useCurrentYear() {
	const [years, setYears] = useState(null);
	useEffect(() => {
		try {
			setYears(new Date().getFullYear());
		} catch (error) {
			console.error('Error getting current year:', error);
			setYears(2024);
		}
	}, []);
	return years ?? 2024;
}

function Footer() {
	const year = useCurrentYear();
	return (
		<footer>
			<div className="footer-col-1">
				<ul className="footer-list">
					<li>
						<a
							href="https://dashboard.simpleanalytics.com/arrayofsunshine.co.uk?utm_source=arrayofsunshine.co.uk&utm_content=badge"
							referrerPolicy="origin"
							target="_blank"
							rel="noreferrer"
						>
							<picture>
								<source
									srcSet="https://simpleanalyticsbadges.com/arrayofsunshine.co.uk?mode=dark"
									media="(prefers-color-scheme: dark)"
								/>
								<img
									src="https://simpleanalyticsbadges.com/arrayofsunshine.co.uk?mode=light"
									loading="lazy"
									referrerPolicy="no-referrer"
									crossOrigin="anonymous"
									alt="Simple analytics badge"
								/>
							</picture>
						</a>
					</li>
					<li className="social-icon">
						<a
							href="https://github.com/danedwardsdeveloper"
							target="_blank"
							rel="noreferrer"
						>
							Dan's GitHub
						</a>
					</li>
					<li className="social-icon">
						<a
							href="https://danedwardsdeveloper.com/"
							target="_blank"
							rel="noreferrer"
						>
							Dan's CV
						</a>
					</li>
				</ul>
				<p className="copyright-notice">&copy; Dan Edwards, {year}</p>
			</div>
			<div className="footer-col-2">
				<button
					className="top-of-page"
					onClick={() => {
						smoothScrollToTop();
					}}
				>
					Top of page
				</button>
			</div>
		</footer>
	);
}

export default Footer;
