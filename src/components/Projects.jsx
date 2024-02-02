/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import useThemeStore from '../store/themeStore';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import PopIn from './layout/PopIn';
/* eslint-disable react/prop-types */
function Projects({ myProjects }) {
	const [isPopinOpen, setIsPopinOpen] = useState([false, false, false, false]);

	const openPopin = (number) => {
		let newIsPopinOpen = [...isPopinOpen];
		newIsPopinOpen[number] = true;
		setIsPopinOpen(newIsPopinOpen);
	};

	const closePopin = (number) => {
		let newIsPopinOpen = [...isPopinOpen];
		newIsPopinOpen[number] = false;
		setIsPopinOpen(newIsPopinOpen);
	};

	const { darkMode } = useThemeStore();
	return (
		<section id="projects" className={darkMode ? 'dark' : ''}>
			<div className="flex flex-col items-start justify-center gap-8 bg-stone-300 px-12 py-12 md:px-24 pt-8 dark:bg-slate-700 ">
				<h2 className="text-4xl font-bold dark:text-white">Projects</h2>
				<div className="flex flex-wrap gap-4">
					{myProjects.map((project, number) => (
						<div
							className="inline-flex flex-col flex-wrap rounded-lg bg-stone-400 pt-4 px-4 dark:bg-slate-800 h-[290px] w-[100%] md:h-[390px] md:w-[390px] relative"
							key={number}
						>
							<img
								src={project.image}
								alt={project.name}
								className="w-full h-full object-cover rounded-tl-lg rounded-t-lg"
								loading="lazy"
							/>

							<div className="p-4 absolute left-0 bottom-0 bg-white dark:bg-black w-full rounded-bl-lg rounded-b-lg flex flex-col gap-2">
								<h3 className="text-xl font-bold dark:text-white">
									{project.name}
								</h3>
								<div className="flex-wrap flex gap-2">
									{project.technologies.map((link, number) => (
										<div
											className="flex items-center justify-center rounded-md bg-stone-300  dark:bg-slate-700 dark:text-white "
											key={number}
										>
											<link.icon className="h-8 w-8" />
										</div>
									))}
								</div>
								<button
									className="rounded bg-stone-600  px-4 py-2 font-bold hover:bg-stone-700 text-white"
									onClick={() => openPopin(number)}
								>
									More
								</button>
							</div>
						</div>
					))}
				</div>
				{isPopinOpen.map(
					(isOpen, number) =>
						isOpen && (
							<div
								key={number}
								className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
							>
								<PopIn
									onClose={() => closePopin(number)}
									src={myProjects?.[number].image}
									alt={myProjects?.[number].name}
									description={myProjects?.[number].description}
									contribution={myProjects?.[number].contribution}
									links={myProjects?.[number].links}
									technologies={myProjects?.[number].technologies}
								/>
							</div>
						)
				)}
			</div>
		</section>
	);
}

export default Projects;
