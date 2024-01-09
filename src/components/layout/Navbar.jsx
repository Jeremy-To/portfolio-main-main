import { useState, useEffect } from 'react';
import { me } from '../../me';

function Navbar() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			setIsDark(true);
		} else {
			document.documentElement.classList.remove('dark');
			setIsDark(false);
		}
	}, []);

	const toggleTheme = () => {
		if (isDark) {
			localStorage.theme = 'light';
			setIsDark(false);
		} else {
			localStorage.theme = 'dark';
			setIsDark(true);
		}
	};

	return (
		<header className="fixed bg-white w-full h-32 flex items-center dark:bg-gray-800 dark:text-white">
			<div className="flex gap-20">
				<span className="font-bold uppercase text-4xl dark:text-white">
					{me.name}
				</span>

				<ul className="flex justify-center items-center gap-4 ">
					<li className="">
						<a
							href="./"
							className="text-2xl font-bold uppercase dark:text-white"
						>
							Home
						</a>
					</li>
					<li className="">
						<a
							href="./#about"
							className="text-2xl font-bold uppercase dark:text-white"
						>
							About
						</a>
					</li>
					<li className="">
						<a
							href="./#projects"
							className="text-2xl font-bold uppercase dark:text-white"
						>
							Projects
						</a>
					</li>
					<li className="">
						<a
							href="./#contact"
							className="text-2xl font-bold uppercase dark:text-white"
						>
							Contact
						</a>
					</li>
					<button
						onClick={toggleTheme}
						className={`${
							isDark
								? 'translate-x-6 bg-indigo-600'
								: 'translate-x-1 bg-gray-300'
						} p-4 inline-block w-4 h-4 transform rounded-full transition-transform ease-in-out duration-300 border-4 border-white`}
					>
						Toggle Theme
					</button>
				</ul>
			</div>
		</header>
	);
}

export default Navbar;
