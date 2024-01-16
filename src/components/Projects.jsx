/* eslint-disable react/prop-types */
function Projects({ myProjects }) {
	return (
		<section id="projects" className="py-24 px-12">
			<div className="">
				<h2 className="flex">
					<span className="text-8xl font-bold ">Projects</span>
				</h2>

				<div className="">
					{myProjects.map((project, number) => (
						<div className="grid grid-cols-3 gap-10 mb-28" key={number}>
							<div className="overflow-hidden">
								<img
									src={project.image}
									alt={project.name}
									className="	w-full block object-cover"
									loading="lazy"
								/>
							</div>
							<div className="py-2 flex flex-col justify-center items-start">
								<h3 className="font-bold text-2xl mb-8">{project.name}</h3>
								<p className="text-2xl ">{project.description}</p>
								<p className="text-2xl">{project.contribution}</p>
								<div className="py-2 flex flex-col justify-center items-start">
									<a
										href={project.links?.[0].uri}
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
									>
										Check it live
									</a>
									<a
										href={project.links?.[1].uri}
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
									>
										Check it on Github
									</a>
								</div>

								<p className="">
									{project.technologies.map((technology, number) => (
										<span className="" key={number}>
											{technology.name}
										</span>
									))}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
