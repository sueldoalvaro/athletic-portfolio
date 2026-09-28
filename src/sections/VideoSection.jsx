import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Carousel } from '../components/Carousel';

const highlightVideos = [
	{
		title: "Highlight video 2026 season",
		url: "https://youtu.be/74-yWHZtCT4?si=EfVFVHQqrsv5L7dy",
		description: "Highlights for the 2026 season with Atletico Union.",
        duration: "3:37"
	},
	{
		title: "Highlight video 2",
		url: "https://youtu.be/xvPf8bsWBNg?si=lLhI8Xjw5-APXN20",
		description: "Highlights from Atletico Union.",
	},
	{
		title: "Highlight video 3",
		url: "https://youtu.be/J57VuA3iNY0?si=jrb1f51APdlQtlIi",
		description: "Highlights from Atletico Union.",
	},
    
];

const fullGameVideos = [
	{
		title: "Full game 1",
		opponent: "Opponent",
		date: "Game date",
		result: "Result",
		url: "https://youtu.be/pNEd24-i_iY?si=L8CakIh_gR5iiQiI",
		description: "Full game video.",
	},
	{
		title: "Full game 2",
		opponent: "Opponent",
		date: "Game date",
		result: "Result",
		url: "https://youtu.be/rVNXDyNafdU?si=zgqEnBz1WGeq8vKS",
		description: "Full game video.",
	},
];

function VideoSection({ highlights = highlightVideos, fullGames = fullGameVideos }) {
	const [videoType, setVideoType] = useState('highlights');
	const videos = videoType === 'highlights' ? highlights : fullGames;
	const carouselItems = videos.map((video) => ({
		...video,
		src: video.url || video.src,
	}));

	return (
		<section id="videos" className="flex min-h-[calc(100vh-60px)] scroll-mt-[60px] flex-col justify-center bg-slate-900 px-4 py-6 text-white md:px-6 md:py-8" aria-labelledby="video-section-title">
			<div className="mx-auto w-full max-w-3xl">
				<div className="mb-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
					<h2 id="video-section-title" className="font-serif text-3xl font-bold tracking-wide text-amber-300">Videos</h2>

					<div className="flex items-center gap-1 rounded-full border border-slate-800 bg-slate-950/80 p-1.5 shadow-inner backdrop-blur-sm" role="tablist" aria-label="Video type">
						<button
							type="button"
							role="tab"
							aria-selected={videoType === 'highlights'}
							className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
								videoType === 'highlights'
									? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
									: 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
							}`}
							onClick={() => setVideoType('highlights')}
						>
							Highlights
						</button>
						<button
							type="button"
							role="tab"
							aria-selected={videoType === 'fullGames'}
							className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
								videoType === 'fullGames'
									? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
									: 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
							}`}
							onClick={() => setVideoType('fullGames')}
						>
							Full games
						</button>
					</div>
				</div>

				<Carousel
					items={carouselItems}
					renderItem={(video, isActive) => (
						<ReactPlayer
							src={video.src}
							controls={isActive}
							width="100%"
							height="100%"
						/>
					)}
				/>
			</div>
		</section>
	);
}

export default VideoSection;
