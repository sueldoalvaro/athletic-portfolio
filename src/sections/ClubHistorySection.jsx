import { useState } from 'react';
import ClubCard from '../components/ClubCard';
import belgranoBadge from '../assets/image.png';
import atleticoUnionBadge from '../assets/atletico-union.webp';
import Lasallano from '../assets/lasallano.png'
import Instituto from '../assets/instituto.png'
import Stlcc from '../assets/stlcc.png'

const defaultClubs = [
	{ club: 'Lasallano', period: '2015 - 2026', badge: Lasallano, linkToWeb: "clublasallano.com" },
	{ club: 'Instituto', period: '2017', badge: Instituto, linkToWeb: "institutoacc.com.ar" },
	{ club: 'Belgrano', period: '2023', badge: belgranoBadge, linkToWeb: "belgrano.com.ar" },
	{ club: 'Atletico Union', period: '2026', badge: atleticoUnionBadge, linkToWeb: "archersathletics.com" },
	{ club: 'STLCC', period: '2026', badge: Stlcc, badgeScale: 1.7, linkToWeb: "archersathletics.com" },
];

function ClubHistorySection({ clubs = defaultClubs }) {
	const [focusedIndex, setFocusedIndex] = useState(null);

	return (
		<section id="career" className="club-history scroll-mt-[60px]" aria-labelledby="club-history-title">
			<div className="club-history__container">
				<h2 id="club-history-title" className="club-history__title">Club history</h2>
				<div className="club-history__track">
					{clubs.map((club, index) => {
						const focused = focusedIndex === index;
						const formattedLink = club.linkToWeb
							? (club.linkToWeb.startsWith('http') ? club.linkToWeb : `https://${club.linkToWeb}`)
							: null;

						return (
							<a
								key={`${club.club}-${club.period}-${index}`}
								href={formattedLink || '#'}
								target={formattedLink ? "_blank" : "_self"}
								rel="noreferrer"
								className={`club-history__item block text-inherit no-underline ${focused ? 'club-history__item--focused' : ''} ${focusedIndex !== null && !focused ? 'club-history__item--dimmed' : ''}`}
								onMouseEnter={() => setFocusedIndex(index)}
								onMouseLeave={() => setFocusedIndex(null)}
								onFocus={() => setFocusedIndex(index)}
							>
								<ClubCard {...club} />
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default ClubHistorySection;
