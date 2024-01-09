import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	/* 	const [loading, setLoading] = useState(false);

	 */
	const form = useRef();
	const template = {
		name: 'ae',
		recipient: 'azeae@afzefa.Com',
	};
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.send(
				'service_4if56mj',
				'template_ot7dve8',
				template,
				'D245rlMNoPSNleNAY'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section id="contact" className="bg-lime-950 py-24">
			<div className="">
				<h2 className="flex justify-center">
					<span className="text-8xl font-bold ">Contact</span>
				</h2>
				<div className="bg-white py-4 px-8">
					{/* <form action="#" className="" onSubmit={handleSubmit}>
						<div className="">
							<label className="text-2xl text-black " htmlFor="name">
								Name
							</label>
							<input
								required
								placeholder="Enter Your Name"
								type="text"
								className="p-8 w-full border-2 border-gray-300 text-xl bg-gray-100 rounded-md"
								name="name"
								id="name"
								ref={nameRef}
							/>
						</div>
						<div className="contact__form-field">
							<label
								className="text-2xl text-black"
								htmlFor="email"
								ref={emailRef}
							>
								Email
							</label>
							<input
								required
								placeholder="Enter Your Email"
								type="text"
								className="p-8 w-full border-2 border-gray-300 text-xl bg-gray-100 rounded-md"
								name="email"
								id="email"
							/>
						</div>
						<div className="">
							<label className="text-2xl text-black" htmlFor="message">
								Message
							</label>
							<textarea
								required
								cols="30"
								rows="10"
								className="p-8 w-full border-2 border-gray-300 text-xl bg-gray-100 rounded-md"
								placeholder="Enter Your Message"
								name="message"
								id="message"
							></textarea>
						</div>
						<button
							type="submit"
							className="p-4 border-2 bg-teal-400 text-black text-xl rounded-md "
							disabled={
								loading ||
								(!emailRef.current.value &&
									!nameRef.current.value &&
									!messageRef.current.value)
							}
							onSubmit={handleSubmit}
						>
							Submit
						</button>
					</form> */}
					<form ref={form} onSubmit={sendEmail} id="form">
						<label>Name</label>
						<input type="text" name="user_name" />
						<label>Email</label>
						<input type="email" name="user_email" />
						<label>Message</label>
						<textarea name="message" />
						<button type="submit">send</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
