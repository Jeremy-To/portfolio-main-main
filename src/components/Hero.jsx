import useThemeStore from '../store/themeStore';

// eslint-disable-next-line react/prop-types
function Hero({ myName, myLocation, mySubtitle }) {
	const { darkMode } = useThemeStore();
	return (
		<section className={darkMode ? 'dark' : ''}>
			<div
				className={`w-full h-screen bg-gradient-to-r ${
					darkMode
						? 'from-violet-800 via-blue-800 to-red-700'
						: 'from-violet-800 via-blue-200 to-red-700'
				} background-animate flex flex-col gap-4 items-center justify-center`}
			>
				<h1 className="text-2xl uppercase text-center dark:text-white ">
					{myName}
				</h1>
				<div className="flex justify-center gap-4 text-xl">
					<p className="dark:text-white">{mySubtitle}</p>
					<p className="dark:text-white">{myLocation}</p>
				</div>
				<div className="flex justify-center mt-12">
					<a
						href="#projects"
						className="btn px-12 py-6 text-xl bg-slate-300 rounded-md hover:bg-slate-400 dark:text-white dark:bg-slate-800 dark:hover:bg-slate-700"
					>
						Projects
					</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;
