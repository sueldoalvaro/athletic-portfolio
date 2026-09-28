function ClubCard({
	badge,
	club = 'Club name',
	period = '2020 — Present',
	details = [],
	badgeScale,
	linkToWeb,
}) {
	return (
		<article className="club-card" aria-label={`${club}, ${period}`}>
			<div>
				<p className="club-card__period">{period}</p>
				{badge ? (
					<img
						className="club-card__badge"
						style={badgeScale ? { transform: `scale(${badgeScale})` } : undefined}
						src={badge}
						alt={`${club} badge`}
					/>
				) : (
					<div className="club-card__badge" aria-hidden="true" />
				)}
				<h2 className="club-card__title flex items-center justify-center gap-1.5">
					<span>{club}</span>
					{linkToWeb && <span className="text-xs opacity-60 transition-opacity group-hover:opacity-100">↗</span>}
				</h2>
			</div>

			{details.length > 0 && (
				<dl className="club-card__details">
					{details.map(({ label, value }) => (
						<div className="club-card__detail" key={label}>
							<dt className="club-card__label">{label}</dt>
							<dd>{value}</dd>
						</div>
					))}
				</dl>
			)}
		</article>
	);
}

export default ClubCard;
