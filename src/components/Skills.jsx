import useThemeStore from '../store/themeStore';

/* eslint-disable react/prop-types */
function Skills({ mySkills, myEducation, myAbout }) {
	const { darkMode } = useThemeStore();
	return (
		<section id="about" className={darkMode ? 'dark' : ''}>
			<div className="flex flex-col items-start justify-center gap-8 bg-slate-200 px-12 py-12 md:px-24 pt-8 dark:bg-slate-800">
				<h2 className="text-4xl font-bold dark:text-white ">About Me</h2>
				<p className="text-l dark:text-white">{myAbout}</p>
				<h3 className="text-2xl font-bold dark:text-white">Get to know me!</h3>
				<a
					href="./#contact"
					className="rounded bg-stone-500 px-4 py-2 font-bold hover:bg-stone-900 dark:bg-slate-700 dark:text-white"
				>
					Contact
				</a>
				<h3 className="text-2xl font-bold dark:text-white">My Skills</h3>
				<div className="flex flex-wrap gap-2 ">
					{mySkills.map((skill, number) => (
						<div
							className="flex h-24 w-24 flex-col items-center justify-center rounded-md bg-stone-300 px-12 py-4 dark:bg-slate-700 dark:text-white"
							key={number}
						>
							<skill.icon className="h-12 w-12" />
							<p className="dark:text-white"> {skill.name}</p>
						</div>
					))}
				</div>
				<h3 className="text-2xl font-bold dark:text-white">Education</h3>
				<div className="flex flex-wrap gap-2">
					{myEducation.map((skill, number) => (
						<div
							className="relative mb-8 h-52 w-52 rounded-md  bg-stone-300 px-8 py-4 dark:bg-blue-900"
							key={number}
						>
							<p className="text-xl font-bold dark:text-white">
								{skill.degree}
							</p>
							<p className="dark:text-white">{skill.major}</p>
							<p className=" dark:text-white">{skill.school}</p>
							<p className="absolute bottom-2 mt-4 dark:text-white">
								{skill.graduation}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
