import Footer from '../components/Footer';
import Lines from '../components/Lines';
import Preloader from '../components/Preloader';
import ProjectCards from '../components/Projects';
import Socials from '../components/Socials';
import TheHeader from '../components/TheHeader';
import ThemeSwitcher from '../components/ThemeSwitcher';

function App() {
	return (
		<>
			<Preloader />
			<Socials />
			<ThemeSwitcher />
			<TheHeader />
			<main className="flex flex-1 flex-col">
				<Lines />
				<div className="container flex flex-1 flex-col">
					<ProjectCards />
				</div>
			</main>
			<Footer version="2.1"/>
		</>
	);
}

export default App;
