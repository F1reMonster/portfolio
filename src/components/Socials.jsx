const socialsItem = [
	{
		ariaLabel: "Hennadii Lapko on freelancehunt",
		link: "https://freelancehunt.com/freelancer/firemonster.html",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" viewBox="0 0 162.46 162.53" fill="currentColor"><path d="M81.23 0a81.23 81.23 0 1 0 81.23 81.23A81.24 81.24 0 0 0 81.23 0zm0 142.77a61.54 61.54 0 1 1 61.54-61.54 61.6 61.6 0 0 1-61.54 61.54z" /><path d="M71.38 93.1a14.75 14.75 0 0 0 19.7 0V69.5a14.72 14.72 0 0 0-19.7 0zm9.85-53.64a41.76 41.76 0 0 0-29.56 12.26l13.9 13.92a22.14 22.14 0 0 1 31.31 0l13.92-13.92a41.74 41.74 0 0 0-29.58-12.26zM96.9 97a22.13 22.13 0 0 1-31.31 0l-13.9 13.88a41.8 41.8 0 0 0 59.14 0zm-15.7 65.53a20.88 20.88 0 0 0-14.38-21.42h-.08a61.62 61.62 0 0 1-46-49.94h40.8a21.26 21.26 0 0 1 0-19.7H20.7a61.37 61.37 0 0 1 92.43-42.78h0a19.64 19.64 0 0 0 25.6-4.77A81.23 81.23 0 1 0 81.2 162.53z" /></svg>`,
	},
];

const Socials = () => {
	return (
		<ul className="lg:fixed top-0 left-0 z-10 flex w-full flex-wrap items-center justify-center gap-2 px-12 py-2.5 lg:h-full lg:w-auto lg:flex-col lg:p-2.5">
			{socialsItem.map((item, index) => (
				<li key={index}>
					<a href={item.link} aria-label={item.ariaLabel} className="block transition-transform duration-300 hover:scale-105 focus:scale-105" target="_blank" rel="noopener noreferrer">
						<div className="h-8 w-8 transition-colors duration-300 ease-linear" dangerouslySetInnerHTML={{ __html: item.icon }} />
					</a>
				</li>
			))}
		</ul>
	);
};

export default Socials;
