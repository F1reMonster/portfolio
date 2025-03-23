export const SunIcon = ({ width = 24, height = 24 }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 4V2m0 18v2M6.414 6.414L5 5m12.728 12.728l1.414 1.414M4 12H2m18 0h2m-4.271-5.586L19.143 5M6.415 17.728L5 19.142M12 17a5 5 0 1 1 0-10a5 5 0 0 1 0 10"
			></path>
		</svg>
	);
};

export const MoonIcon = ({ width = 24, height = 24 }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M9 6a9 9 0 0 0 9 9c.91 0 1.787-.134 2.614-.385A9 9 0 0 1 12 21A9 9 0 0 1 9.386 3.386A9 9 0 0 0 9 6"
			></path>
		</svg>
	);
};

export const ChevronLeft = ({ width = 24, height = 24 }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
			<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14 16l-4-4l4-4"></path>
		</svg>
	);
};
export const ChevronRight = ({ width = 24, height = 24 }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m10 8l4 4l-4 4"></path></svg>
	);
};
