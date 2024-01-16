import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [template, setTemplate] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const nameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	useEffect(() => {
		setTemplate({
			name: nameRef.current.value,
			message: messageRef.current.value,
			recipient: emailRef.current.value,
		});
	}, [nameRef, emailRef, messageRef]);

	const sendEmail = (e) => {
		setIsLoading(true);
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
					setIsLoading(false);
				},
				(error) => {
					console.log(error.text);
					setIsLoading(false);
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
					<form onSubmit={sendEmail} id="form">
						<label className="text-2xl text-black ">Name</label>
						<input
							className="p-8 w-full border-2 border-gray-300 text-xl bg-gray-100 rounded-md"
							type="text"
							name="user_name"
							ref={nameRef}
						/>
						<label className="text-2xl text-black ">Email</label>
						<input
							className="p-8 w-full border-2 border-gray-300 text-xl bg-gray-100 rounded-md"
							type="email"
							name="user_email"
							ref={emailRef}
						/>
						<label className="text-2xl text-black ">Message</label>
						<textarea
							ref={messageRef}
							className="p-8 w-full border-2 border-gray-300 text-xl bg-gray-100 rounded-md"
							name="message"
						/>
						<button
							disabled={isLoading}
							className="p-4 border-2 bg-teal-400 text-black text-xl rounded-md "
							type="submit"
							onClick={console.log(template)}
						>
							{isLoading ? 'Sending...' : 'Send'}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
