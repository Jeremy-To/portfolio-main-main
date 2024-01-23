// eslint-disable-next-line react/prop-types
const Popin = ({ onClose, src, alt, description, contribution }) => {
	return (
		<div className="bg-white p-20 rounded-10 shadow-md">
			<h2>Popin Content</h2>
			<p>This is the content of the popin.</p>
			<p>{description}</p>
			<p>{contribution}</p>
			<img src={src} alt={alt} />
			<button
				onClick={onClose}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Close
			</button>
		</div>
	);
};

export default Popin;
