const Lines = () => {
	return (
		<div className="absolute inset-0 -z-[1] mx-auto h-full w-[84vw]">
			<div className="line after:animation-delay-1000 -ml-[50%]"></div>
			<div className="line after:animation-delay-1500 -ml-[25%]"></div>
			<div className="line after:animation-delay-2000 ml-[25%]"></div>
			<div className="line after:animation-delay-2500 ml-[50%]"></div>
			<div className="line"></div>
		</div>
	);
};

export default Lines;
