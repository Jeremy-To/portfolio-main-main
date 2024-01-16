/* eslint-disable react/prop-types */
function Footer({ myName, mySocial }) {
	return (
		<footer className="py-12 px-24">
			<div className="">
				<div className="flex justify-between">
					<div className="flex flex-col items-center gap-8 ">
						<h2 className="text-2xl font-bold uppercase">
							<span>Social</span>
						</h2>
						<div className="flex flex-col ">
							{mySocial.map((item, number) => (
								<div key={number}>
									{/* 	<a
										target="_blank"
										rel="noreferrer"
										href={item.link}
										key={number}
									>
										<img
											className="main-footer__icon"
											src={item.image}
											alt="icon"
										/>
									</a> */}
									<p>{item.name}</p>
								</div>
							))}
						</div>
					</div>
					<div className="">
						<h4 className="text-2xl font-bold uppercase">{myName}</h4>
					</div>
				</div>
				<div className="mt-24 flex gap-2">
					<p className="text-2xl"> Made by</p>
					<a rel="noreferrer" target="_blank" className="text-2xl">
						jeremy to
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
