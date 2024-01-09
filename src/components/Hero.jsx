import { me } from '../me';

function Hero() {
	return (
		<section className="bg-green-800 pt-96 pb-36">
			<div className="flex flex-col gap-4">
				<h1 className="text-4xl uppercase text-center">
					Hey, My name is {me.name}
				</h1>
				<div className="flex justify-center gap-4 text-2xl">
					<p className="">{me.subtitle}</p>
					<p className="">{me.location}</p>
				</div>
				<div className="flex justify-center mt-12">
					<a href="./#projects" className="btn px-24 py-12 text-xl">
						Projects
					</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;
