import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import useThemeStore from '../store/themeStore';

const Contact = () => {
	const { darkMode } = useThemeStore();
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
		<section id="contact" className={darkMode ? 'dark' : ''}>
			<div className="py-12 px-24 flex flex-col gap-8 justify-center items-start dark:bg-blue-900 bg-blue-400 pt-8">
				<h2 className="text-8xl font-bold dark:text-white">Contact</h2>
				<div className="p-8 rounded-md bg-slate-300 dark:bg-slate-800">
					<form id="form">
						<label className=" text-black dark:text-white ">Name</label>
						<input
							className="p-8 w-full border-2 border-gray-300 bg-gray-100 rounded-md text-black "
							type="text"
							name="user_name"
							ref={nameRef}
						/>
						<label className=" text-black dark:text-white">Email</label>
						<input
							className="p-8 w-full border-2 border-gray-300 bg-gray-100 rounded-md text-black "
							type="email"
							name="user_email"
							ref={emailRef}
						/>
						<label className=" text-black dark:text-white ">Message</label>
						<textarea
							ref={messageRef}
							className="p-8 w-full border-2 border-gray-300 bg-gray-100 rounded-md text-black"
							name="message"
						/>
						<button
							onClick={sendEmail}
							disabled={isLoading}
							className="p-4 border-2 bg-teal-400 text-black rounded-md dark:text-white"
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
