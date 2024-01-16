import { useState } from 'react';
import useThemeStore from '../../store/themeStore';
// eslint-disable-next-line react/prop-types
function Navbar({ myName }) {
	const { darkMode, toggleDarkMode } = useThemeStore();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeButton, setActiveButton] = useState('');

	const handleButtonClick = (buttonId) => {
		setActiveButton(buttonId);
	};

	const toggleTheme = () => {
		toggleDarkMode();
		console.log(darkMode);
	};

	return (
		<header className={darkMode ? 'dark' : ''}>
			<nav className="dark:bg-gray-800 bg-slate-100 w-full fixed">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="absolute -inset-0.5"></span>
								<span className="sr-only">Open main menu</span>

								<svg
									className="block h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>

								<svg
									className="hidden h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<a
								href="#"
								className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm  dark:text-gray-300 text-neutral-800"
							>
								{myName}
							</a>
							<div className="hidden sm:ml-6 sm:block">
								<div className="flex space-x-4">
									<a
										href="#"
										onClick={() => handleButtonClick('home')}
										className={`${
											activeButton === 'home' ? 'bg-blue-400' : ''
										}  dark:text-gray-300 text-neutral-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm `}
										aria-current="page"
									>
										Home
									</a>
									<a
										href="#about"
										onClick={() => handleButtonClick('about-me')}
										className={`${
											activeButton === 'about-me' ? 'bg-blue-400' : ''
										}  dark:text-gray-300 text-neutral-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm `}
									>
										About me
									</a>
									<a
										href="#projects"
										onClick={() => handleButtonClick('projects')}
										className={`${
											activeButton === 'projects' ? 'bg-blue-400' : ''
										}  dark:text-gray-300 text-neutral-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm `}
									>
										Projects
									</a>
									<a
										href="#contact"
										onClick={() => handleButtonClick('contact')}
										className={`${
											activeButton === 'contact' ? 'bg-blue-400' : ''
										}  dark:text-gray-300 text-neutral-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm `}
									>
										Contact
									</a>
								</div>
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<div className="relative ml-3">
								<div>
									<div className="inline-flex items-center">
										<div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
											<input
												id="switch-component"
												type="checkbox"
												onClick={toggleTheme}
												className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
												checked={darkMode}
											/>
											<label
												htmlFor="switch-component"
												className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
											>
												<div
													className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
													data-ripple-dark="true"
												></div>
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={isMenuOpen ? 'sm:hidden' : 'hidden'} id="mobile-menu">
					<div className="space-y-1 px-2 pb-3 pt-2">
						<a
							href="#"
							onClick={() => handleButtonClick('home')}
							className={`${
								activeButton === 'home' ? 'bg-blue-400' : ''
							}  dark:text-gray-300 text-neutral-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base `}
							aria-current="page"
						>
							Home
						</a>
						<a
							href="#about"
							onClick={() => handleButtonClick('about-me')}
							className={`${
								activeButton === 'about-me' ? 'bg-blue-400' : ''
							}  dark:text-gray-300 text-neutral-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base `}
							aria-current="page"
						>
							About me
						</a>
						<a
							href="#projects"
							onClick={() => handleButtonClick('projects')}
							className={`${
								activeButton === 'projects' ? 'bg-blue-400' : ''
							}  dark:text-gray-300 text-neutral-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base `}
							aria-current="page"
						>
							Projects
						</a>
						<a
							href="#contact"
							onClick={() => handleButtonClick('contact')}
							className={`${
								activeButton === 'contact' ? 'bg-blue-400' : ''
							}  dark:text-gray-300 text-neutral-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base `}
							aria-current="page"
						>
							Contact
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
