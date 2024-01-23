import useThemeStore from '../../store/themeStore';

/* eslint-disable react/prop-types */
function Footer({ mySocial }) {
	console.log(mySocial);
	const { darkMode } = useThemeStore();
	return (
		<footer className={darkMode ? 'dark' : ''}>
			<div className="bg-gray-200 dark:bg-slate-900 flex flex-col  gap-8 py-12 px-24 ">
				<h4 className="text-xl font-bold uppercase dark:text-white">Social</h4>
				<div className="flex gap-4">
					{mySocial.map((item, number) => (
						<div key={number}>
							<p className="dark:text-white">
								{item.icon && <item.icon />}
								{item.name}
							</p>
						</div>
					))}
				</div>
				<p className="dark:text-white"> Made by jeremy to </p>
			</div>
		</footer>
	);
}

export default Footer;
