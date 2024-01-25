import useThemeStore from '../../store/themeStore';

/* eslint-disable react/prop-types */
function Footer({ mySocial }) {
	const { darkMode } = useThemeStore();
	return (
		<footer className={darkMode ? 'dark  ' : ''}>
			<div className="flex  justify-center align-center dark:bg-slate-900 bg-gray-200  gap-8 py-12 px-24 w-full">
				<div className="flex gap-4">
					{mySocial.map((item, number) => (
						<div key={number}>
							<a
								href={mySocial?.[number].uri}
								className="dark:text-white flex justify-center items-center gap-2"
							>
								{item.icon && <item.icon />}
								{item.name}
							</a>
						</div>
					))}
				</div>
				<p className="dark:text-white"> Made by jeremy to </p>
			</div>
		</footer>
	);
}

export default Footer;
