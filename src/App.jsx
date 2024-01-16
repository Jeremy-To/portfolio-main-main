import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { me } from './me';

function App() {
	return (
		<>
			<Navbar myName={me.name} />
			<Hero
				myName={me.name}
				myLocation={me.location}
				mySubtitle={me.subtitle}
			/>
			<Skills
				myAbout={me.about}
				mySkills={me.skills}
				myEducation={me.education}
			/>
			<Projects myProjects={me.projects} />
			<Contact />
			<Footer myName={me.name} mySocial={me.social} />
		</>
	);
}

export default App;
