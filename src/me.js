import bookImage from './assets/BookStore.png';
import ChatApp from './assets/ChatApp.png';
import weatherapp from './assets/weatherapp.png';
import myWebsite from './assets/myWebsite.png';

//TODO
//json personal

//json projects
export const me = {
	name: 'Jérémy TO',
	subtitle: 'Developer',
	tagline: '',
	about:
		'Developer building website. I love making fun projects on the side. Checkout some of my recent projects below!',
	location: 'Paris, France',
	image: '/assets/world.jpeg',
	education: [
		{
			degree: 'Master',
			major: 'Data, Systems and Network Security',
			school: '2600 School',
			graduation: '2026',
		},
		{
			degree: 'Bachelor',
			major: 'Web Development',
			school: 'OpenClassRooms',
			graduation: '2024',
		},
		{
			degree: 'Certificate of completion',
			major: 'Computer Science (CS50)',
			school: 'University of Harvard x EDX',
			graduation: '2022',
		},
	],

	projects: [
		{
			name: 'E-commerce',
			description: 'A ecommerce app to buy books.',
			contribution:
				'I used React for the front-end and Firebase for the database in order to build this app.',
			technologies: [
				'React.js',
				'Firebase',
				'Typescript',
				'Tailwindcss',
				'Redux',
			],
			links: [
				{
					name: 'E-commerce',
					uri: 'https://latest-shop-app.vercel.app',
				},
				{
					name: 'Github',
					uri: 'https://github.com/Jeremy-To/LATEST-SHOP-APP',
				},
			],
			image: bookImage,
		},
		{
			name: 'TalkRoom',
			description: 'TalkRoom bring people together, create a room or join one',
			contribution:
				'Built it entirely with React for the front-end and firebase for the database ',
			technologies: [
				'React.js',
				'Firebase',
				'Typescript',
				'Tailwindcss',
				'Redux',
			],
			links: [
				{
					name: 'TalkRoom',
					uri: 'https://the-chat-app-jeremy-to.vercel.app',
				},
				{
					name: 'Github',
					uri: 'https://github.com/Jeremy-To/TalkRoom',
				},
			],
			image: ChatApp,
		},
		{
			name: 'This Website',
			description: 'A website to display my projects and resume',
			contribution:
				'I built the entire website from scratch using React.js, TypeScript, and Chakra UI and deployed it on Netlify.',
			technologies: ['React', 'Typescript', 'Chakra-UI', 'Vercel'],
			links: [
				{
					name: 'Jeremy TO Website',
					uri: 'https://Jeremyto.com',
				},
				{
					name: 'Github',
					uri: 'https://github.com/Jeremy-To/-portfolioV2',
				},
			],
			image: myWebsite,
		},

		{
			name: 'Weather app',
			description:
				'A Weather app using an api to get weather based on the place of your choise',
			contribution:
				'I built this app using react for fetching geolocalisation and weather form it.',
			technologies: ['React.js', 'Javascript', 'Css', 'HTML'],
			links: [
				{
					name: 'Weather app',
					uri: 'https://weatherapp-jeremyto.vercel.app/',
				},
				{
					name: 'Github',
					uri: 'https://github.com/Jeremy-To/weatherapp',
				},
			],
			image: weatherapp,
		},
	],
	skills: [
		{
			name: 'Typescript',
		},
		{
			name: 'JavaScript',
		},
		{
			name: 'React',
		},
		{
			name: 'PHP',
		},
		{
			name: 'Symfony',
		},
		{
			name: 'Redux',
		},
		{
			name: 'TailwindCss',
		},
		{
			name: 'Html',
		},
		{
			name: 'Css',
		},
	],
	social: [
		{
			name: 'Github',
			uri: 'https://github.com/Jeremy-To',
			hover: {
				bg: 'blue.500',
				color: 'white',
			},
		},
		{
			name: 'LinkedIn',
			uri: 'https://www.linkedin.com/in/jérémy-to/',
			hover: {
				bg: 'blue.500',
				color: 'white',
			},
		},
		{
			name: 'My résumé',
			uri: '/assets/CV FR Jeremy TO.pdf',
			hover: {
				bg: 'blue.500',
				color: 'white',
			},
		},
	],

	contact: {
		email: 'Jeremy_to@outlook.fr',
	},
};
