import { useEffect, useState } from 'react';

function Preloader() {
	const [loadedLine, setLoadedLine] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [removed, setRemoved] = useState(false);

	useEffect(() => {
		// Simulate window load event
		const handleLoad = () => {
			// First timeout - add "loaded" class to loader-line
			setTimeout(() => {
				setLoadedLine(true);

				// Second timeout - add "loaded" class to preloader
				setTimeout(() => {
					setLoaded(true);

					// Third timeout - remove preloader
					setTimeout(() => {
						setRemoved(true);
					}, 400);
				}, 600);
			}, 1000);
		};

		// Call the function immediately or listen for window load
		handleLoad();

		// Clean up function
		return () => {
			// Clean up if needed
		};
	}, []);

	// Don't render if removed
	if (removed) {
		return null;
	}
	return (
		<div
			className={`group before: after:bg-cinder fixed top-0 z-[9999] flex h-screen w-screen overflow-hidden ${loaded ? 'loaded' : ''}`}
		>
			<div className="dark:bg-cinder absolute top-0 left-0 h-1/2 w-full bg-neutral-100 transition-all duration-300 group-[.loaded]:h-0"></div>
			<div
				className={`group relative z-[555] m-auto h-[1px] w-1/2 overflow-hidden transition-all duration-800 [.loadedline]:w-full [.loadedline]:opacity-0 ${loadedLine ? 'loadedline' : ''}`}
			>
				<div className="bg-crimson animate-show-line absolute left-1/2 h-full w-0 -translate-x-1/2"></div>
				<div className="animate-loader-line animation-delay-1200 absolute top-0 -left-25 h-full w-full group-[.loadedline]:opacity-0"></div>
			</div>
			<div className="dark:bg-cinder absolute bottom-0 left-0 h-1/2 w-full bg-neutral-100 transition-all duration-300 group-[.loaded]:h-0"></div>
		</div>
	);
}

export default Preloader;
