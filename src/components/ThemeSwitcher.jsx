// import { useState, useEffect } from "react";
// import { MoonIcon, SunIcon } from "./Icons";

// function ThemeSwitcher() {
// 	const [darkTheme, setDarkTheme] = useState(() => localStorage.getItem("theme") === "dark");

// 	useEffect(() => {
// 		const root = document.documentElement;
// 		darkTheme ? root.classList.add("dark") : root.classList.remove("dark");
// 	}, [darkTheme]);

// 	function themeHandler() {
// 		setDarkTheme(!darkTheme);
// 		darkTheme ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark");
// 	}

// 	return (
// 		<div className="absolute top-4 right-4">
// 			<button onClick={themeHandler} className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-black text-white dark:bg-white dark:text-black">
// 				{darkTheme ? <SunIcon /> : <MoonIcon />}
// 			</button>
// 		</div>
// 	);
// }

// export default ThemeSwitcher;

import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from './Icons';

function ThemeSwitcher() {
	const [darkTheme, setDarkTheme] = useState(() => {
		// Check localStorage first
		const savedTheme = localStorage.getItem('theme');

		// If there's a saved preference, use it
		if (savedTheme) {
			return savedTheme === 'dark';
		}

		// Otherwise, check system preference
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	useEffect(() => {
		const root = document.documentElement;
		darkTheme ? root.classList.add('dark') : root.classList.remove('dark');

		// Update localStorage when theme changes
		localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
	}, [darkTheme]);

	// Listen for system theme changes
	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const handleChange = e => {
			// Only update if there's no user preference stored
			if (!localStorage.getItem('theme')) {
				setDarkTheme(e.matches);
			}
		};

		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, []);

	function themeHandler() {
		setDarkTheme(!darkTheme);
	}

	return (
		<div className="absolute top-2.5 right-2.5 z-50 lg:top-4 lg:right-4">
			<button
				role="buttom"
				onClick={themeHandler}
				className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-black text-white dark:bg-white dark:text-black"
			>
				{darkTheme ? <SunIcon /> : <MoonIcon />}
			</button>
		</div>
	);
}

export default ThemeSwitcher;
