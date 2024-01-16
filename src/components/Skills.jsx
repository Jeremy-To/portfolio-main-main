import useThemeStore from '../store/themeStore';

/* eslint-disable react/prop-types */
function Skills({ mySkills, myEducation, myAbout }) {
	const { darkMode } = useThemeStore();
	return (
		<section id="about" className={darkMode ? 'dark' : ''}>
			<div className="dark:bg-cyan-800 bg-cyan-200 pt-8 py-12 px-24 flex flex-col gap-8 justify-center items-start">
				<h2 className="text-8xl font-bold dark:text-white ">About Me</h2>
				<p className="text-xl">{myAbout}</p>
				<h3 className="text-2xl font-bold dark:text-white">Get to know me!</h3>
				<a
					href="./#contact"
					className="bg-blue-500 hover:bg-blue-900 dark:bg-blue-900 font-bold py-2 px-4 rounded dark:text-white"
				>
					Contact
				</a>
				<h3 className="text-2xl font-bold dark:text-white">My Skills</h3>
				<div className="flex flex-wrap gap-2 ">
					{mySkills.map((skill, number) => (
						<div
							className="px-12 py-4 bg-blue-500 hover:bg-blue-900 dark:bg-blue-900  dark:text-white rounded-md"
							key={number}
						>
							<p className="dark:text-white"> {skill.name}</p>
						</div>
					))}
				</div>
				<h3 className="text-4xl font-bold dark:text-white">Eductaion</h3>
				<div className="flex flex-wrap gap-2">
					{myEducation.map((skill, number) => (
						<div
							className="bg-blue-500 hover:bg-blue-900 dark:bg-blue-900  mb-8 px-8 py-4 rounded-md"
							key={number}
						>
							<p className="dark:text-white text-xl">{skill.degree}</p>
							<p className="dark:text-white">{skill.major}</p>
							<p className="dark:text-white">{skill.school}</p>
							<p className="dark:text-white mt-4">{skill.graduation}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
