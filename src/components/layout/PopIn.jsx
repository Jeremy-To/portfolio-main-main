/* eslint-disable react/prop-types */
import { FaGithub } from 'react-icons/fa';

const Popin = ({
	onClose,
	number,
	src,
	alt,
	description,
	contribution,
	links,
	technologies,
}) => {
	return (
		<div className="rounded-10 shadow-md w-2/3 relative">
			<div
				className="flex flex-wrap bg-stone-400 dark:bg-stone-700 py-8 px-4 rounded-lg"
				key={number}
			>
				<button
					onClick={onClose}
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded right-0 top-0 absolute"
				>
					Close
				</button>
				<img
					src={src}
					alt={alt}
					className="w-full block object-cover"
					loading="lazy"
				/>
				<div className="py-2 flex sm:flex-col justify-center items-start gap-2 ">
					<h3 className="dark:text-white font-bold text-2xl mb-8">{alt}</h3>
					<div className="flex-wrap flex gap-2">
						{technologies.map((link, number) => (
							<div
								className="flex flex-col justify-center items-center w-20 h-20 rounded-md bg-stone-300 dark:bg-slate-700 dark:text-white"
								key={number}
							>
								<link.icon className="h-8 w-8" />
								<p className="dark:text-white"> {link.name}</p>
							</div>
						))}
					</div>
					<p className="dark:text-white">{description}</p>
					<p className="dark:text-white">{contribution}</p>
					<div className="py-2 flex justify-center items-start gap-4">
						<a
							href={links?.[0].uri}
							className="bg-stone-700 hover:bg-stone-900 text-white font-bold py-2 px-4 rounded dark:text-white"
						>
							Check it live
						</a>
						<a
							href={links?.[1].uri}
							className="bg-stone-700 hover:bg-stone-900 text-white font-bold py-2 px-4 rounded flex gap-2"
						>
							<FaGithub className="w-6 h-6" />
							Check it on Github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popin;
