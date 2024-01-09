import './fonts/Euclid Circular A Italic.ttf';
import './fonts/Euclid Circular A Light.ttf';
import './fonts/Euclid Circular A Medium Italic.ttf';
import './fonts/Euclid Circular A Medium.ttf';
import './fonts/Euclid Circular A Regular.ttf';
import './fonts/Euclid Circular A SemiBold.ttf';

import Home from './pages';

function App() {
	if (!localStorage.getItem('theme')) {
		localStorage.setItem('theme', 'white');
	}
	return (
		<>
			<Home />
		</>
	);
}

export default App;
