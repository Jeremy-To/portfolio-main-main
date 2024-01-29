/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import useThemeStore from '../store/themeStore';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import PopIn from './layout/PopIn';
/* eslint-disable react/prop-types */
function Projects({ myProjects }) {
	const [isPopinOpen0, setIsPopinOpen0] = useState(false);
	const [isPopinOpen1, setIsPopinOpen1] = useState(false);
	const [isPopinOpen2, setIsPopinOpen2] = useState(false);
	const [isPopinOpen3, setIsPopinOpen3] = useState(false);

	const openPopin = (number) => {
		console.log(number);
		if (number === 0) setIsPopinOpen0(true);
		if (number === 1) setIsPopinOpen1(true);
		if (number === 2) setIsPopinOpen2(true);
		if (number === 3) setIsPopinOpen3(true);
	};

	const closePopin = (number) => {
		if (number === 0) setIsPopinOpen0(false);
		if (number === 1) setIsPopinOpen1(false);
		if (number === 2) setIsPopinOpen2(false);
		if (number === 3) setIsPopinOpen3(false);
	};

	const { darkMode } = useThemeStore();
	return (
		<section id="projects" className={darkMode ? 'dark' : ''}>
			<div className="flex flex-col items-start justify-center gap-8 bg-stone-300 px-12 py-12 md:px-24 pt-8 dark:bg-slate-700 ">
				<h2 className="text-4xl font-bold dark:text-white">Projects</h2>
				<div className="flex flex-wrap gap-4">
					{myProjects.map((project, number) => (
						<div
							className="inline-flex flex-col flex-wrap rounded-lg bg-stone-400 pt-4 px-4 dark:bg-slate-800 h-56 w-56 relative"
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
				{isPopinOpen0 && (
					<div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
						<PopIn
							onClose={() => closePopin(0)}
							src={myProjects?.[0].image}
							alt={myProjects?.[0].name}
							description={myProjects?.[0].description}
							contribution={myProjects?.[0].contribution}
							links={myProjects?.[0].links}
							technologies={myProjects?.[0].technologies}
						/>
					</div>
				)}
				{isPopinOpen1 && (
					<div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
						<PopIn
							onClose={() => closePopin(1)}
							src={myProjects?.[1].image}
							alt={myProjects?.[1].name}
							description={myProjects?.[1].description}
							contribution={myProjects?.[1].contribution}
							links={myProjects?.[1].links}
							technologies={myProjects?.[1].technologies}
						/>
					</div>
				)}
				{isPopinOpen2 && (
					<div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
						<PopIn
							onClose={() => closePopin(2)}
							src={myProjects?.[2].image}
							alt={myProjects?.[2].name}
							description={myProjects?.[2].description}
							contribution={myProjects?.[2].contribution}
							links={myProjects?.[2].links}
							technologies={myProjects?.[2].technologies}
						/>
					</div>
				)}
				{isPopinOpen3 && (
					<div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
						<PopIn
							onClose={() => closePopin(3)}
							src={myProjects?.[3].image}
							alt={myProjects?.[3].name}
							description={myProjects?.[3].description}
							contribution={myProjects?.[3].contribution}
							links={myProjects?.[3].links}
							technologies={myProjects?.[3].technologies}
						/>
					</div>
				)}
			</div>
		</section>
	);
}

export default Projects;
