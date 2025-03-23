import Footer from "../components/Footer";
import Lines from "../components/Lines";
import Preloader from "../components/Preloader";
import ProjectCards from "../components/Projects";
import Socials from "../components/Socials";
import TheHeader from "../components/TheHeader";
import ThemeSwitcher from "../components/ThemeSwitcher";

function App() {
	return (
		<>
			<Preloader />
			<Socials />
			<ThemeSwitcher />
			<TheHeader />
			<main className="flex-1 flex flex-col">
				<Lines />
				<div className="container flex flex-col flex-1">
					<ProjectCards />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
