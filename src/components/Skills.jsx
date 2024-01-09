import { me } from '../me';

function Skills() {
	return (
		<section id="about" className="bg-amber-600">
			<div className="py-12 px-24">
				<h2 className="flex flex-col gap-8s justify-center items-center">
					<span className="text-8xl font-bold ">About Me</span>
					<span className="text-2xl">{me.about}</span>
				</h2>
				<div className="">
					<div className="">
						<h3 className="text-4xl font-bold">Get to know me!</h3>
						<a
							href="./#contact"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Contact
						</a>
					</div>
					<div className="">
						<h3 className="text-4xl font-bold">My Skills</h3>
						<div className="flex flex-wrap gap-2 ">
							{me.skills.map((skill, number) => (
								<div className="px-24 py-8 bg-zinc-900 rounded-md" key={number}>
									{skill.name}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="">
					<div className="">
						<h3 className="text-4xl font-bold">Eductaion</h3>
						<div>
							{me.education.map((skill, number) => (
								<div className="bg-slate-600 mb-8 p-4 rounded-md" key={number}>
									<p className="text-2xl">{skill.degree}</p>
									<p>{skill.major}</p>
									<p>{skill.school}</p>
									<p>{skill.graduation}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
