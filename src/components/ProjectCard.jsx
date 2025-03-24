import { useState } from 'react';

function ProjectCard({ project, latestProjectDate }) {
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	return (
		<a
			href={project.link}
			aria-label={project.title}
			className="group text-silver relative flex min-h-65 flex-col overflow-clip rounded-[.625rem] bg-white/50 shadow-[0_0_0_1px_rgba(255,255,255,0.2),_2px_2px_6px_rgba(0,0,0,0.8)] dark:bg-black/20 dark:shadow-[0_4px_12px_rgba(255,255,255,0.4),_0_0_20px_rgba(255,255,255,0.2)]"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="absolute top-0 left-0 z-1 flex items-center gap-1.5 text-base/none">
				{project.date === latestProjectDate && (
					<div className="bg-crimson animate-blinked p-1">new</div>
				)}
				<div className="bg-blue-gem p-1">
					{new Date(project.date * 1000).toISOString().split('T')[0]}
				</div>
			</div>

			<div className="absolute inset-0 z-[2] flex origin-center scale-0 items-center justify-center rounded-[.625rem] bg-black/70 transition-transform duration-500 ease-out group-hover:scale-100">
				<div className="font-montserrat border-valencia group-hover:bg-crimson flex h-9.5 animate-bounce items-center justify-center rounded-[6.25rem] border px-5 py-1 transition-colors group-hover:text-white">
					<span className="text-xs uppercase">view more</span>
				</div>
			</div>

			<div className="absolute inset-0 overflow-clip">
				{!imageLoaded && (
					<div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-gray-300">
						<div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-gray-900"></div>
					</div>
				)}
				<img
					decoding="async"
					className="w-full"
					src={project.cover}
					alt={project.title}
					loading="lazy"
					onLoad={handleImageLoad}
				/>
			</div>

			<div className="z-1 mt-36 flex-1 bg-white/10 backdrop-blur-lg transition-colors duration-100 dark:bg-black/30">
				<h4 className="text-silver font-montserrat bg-crimson p-1 text-center text-lg font-bold">
					{project.title}
				</h4>

				<div className="flex flex-wrap justify-center gap-1 p-2.5">
					{project.tags.map((tag, tagIndex) => (
						<span
							key={tagIndex}
							className="font-montserrat flex h-7 items-center justify-center rounded-lg px-2 text-xs/none font-medium"
							style={{
								backgroundColor: tag.tagBgColor || 'var(--color-silver)',
								color: tag.tagColor || 'var(--color-white)',
							}}
						>
							{tag.tagName}
						</span>
					))}
				</div>
			</div>
		</a>
	);
}

export default ProjectCard;
