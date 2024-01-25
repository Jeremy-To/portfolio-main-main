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
			<div className="bg-stone-300 dark:bg-slate-700 pt-8 py-12 px-24 flex flex-col gap-8 justify-center items-start">
				<h2 className="text-8xl font-bold dark:text-white">Projects</h2>
				<div className="flex flex-wrap gap-4">
					{myProjects.map((project, number) => (
						<div
							className="flex flex-col flex-wrap bg-slate-400 dark:bg-slate-800 py-12 px-12 rounded-lg"
							key={number}
						>
							<img
								src={project.image}
								alt={project.name}
								className="w-48"
								loading="lazy"
							/>
							<div className="py-2 ">
								<h3 className="dark:text-white font-bold text-2xl mb-8">
									{project.name}
								</h3>
								<button
									className="bg-stone-600 hover:bg-stone-900  font-bold py-2 px-4 rounded dark:text-white"
									onClick={() => openPopin(number)}
								>
									More
								</button>
							</div>
						</div>
					))}
				</div>
				{isPopinOpen0 && (
					<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
						<PopIn
							onClose={() => closePopin(0)}
							src={myProjects?.[0].image}
							alt={myProjects?.[0].name}
							description={myProjects?.[0].description}
							contribution={myProjects?.[0].contribution}
							links={myProjects?.[0].links}
						/>
					</div>
				)}
				{isPopinOpen1 && (
					<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
						<PopIn
							onClose={() => closePopin(1)}
							src={myProjects?.[1].image}
							alt={myProjects?.[1].name}
							description={myProjects?.[1].description}
							contribution={myProjects?.[1].contribution}
							links={myProjects?.[1].links}
						/>
					</div>
				)}
				{isPopinOpen2 && (
					<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
						<PopIn
							onClose={() => closePopin(2)}
							src={myProjects?.[2].image}
							alt={myProjects?.[2].name}
							description={myProjects?.[2].description}
							contribution={myProjects?.[2].contribution}
							links={myProjects?.[2].links}
						/>
					</div>
				)}
				{isPopinOpen3 && (
					<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
						<PopIn
							onClose={() => closePopin(3)}
							src={myProjects?.[3].image}
							alt={myProjects?.[3].name}
							description={myProjects?.[3].description}
							contribution={myProjects?.[3].contribution}
							links={myProjects?.[3].links}
						/>
					</div>
				)}
			</div>
		</section>
	);
}

export default Projects;
