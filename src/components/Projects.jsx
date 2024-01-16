import useThemeStore from '../store/themeStore';

/* eslint-disable react/prop-types */
function Projects({ myProjects }) {
	const { darkMode } = useThemeStore();
	return (
		<section id="projects" className={darkMode ? 'dark' : ''}>
			<div className="bg-green-300 dark:bg-green-800 pt-8 py-12 px-24 flex flex-col gap-8 justify-center items-start">
				<h2 className="text-8xl font-bold dark:text-white">Projects</h2>

				{myProjects.map((project, number) => (
					<div
						className="flex flex-wrap bg-green-400 dark:bg-green-900 py-8 px-4 rounded-lg"
						key={number}
					>
						<img
							src={project.image}
							alt={project.name}
							className="w-full block object-cover"
							loading="lazy"
						/>
						<div className="py-2 flex sm:flex-col justify-center items-start ">
							<h3 className="dark:text-white font-bold text-2xl mb-8">
								{project.name}
							</h3>
							<p className="dark:text-white text-lg ">{project.description}</p>
							<p className="dark:text-white text-lg">{project.contribution}</p>
							<div className="py-2 flex justify-center items-start gap-4">
								<a
									href={project.links?.[0].uri}
									className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded dark:text-white"
								>
									Check it live
								</a>
								<a
									href={project.links?.[1].uri}
									className="bg-blue-500 hover:bg-blue-700 dark:text-white font-bold py-2 px-4 rounded"
								>
									Check it on Github
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
