import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default Home;
