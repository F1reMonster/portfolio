// ProjectCards.js - основний компонент
import { useState, useEffect } from 'react';
import TagFilters from './TagFilters';
import ProjectCard from './ProjectCard';
import Pagination from './Pagination';

function ProjectCards({ itemsPerPage }) {
	const [projects, setProjects] = useState([]);
	const [activeFilter, setActiveFilter] = useState('all');
	const [allTags, setAllTags] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Пагінація
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = itemsPerPage || 6;

	useEffect(() => {
		setLoading(true);
		
		const fetchProjects = async () => {
			try {
				const response = await fetch('/data/projects.json');
				const data = await response.json();

				// Sort projects by date in descending order (newest first)
				const sortedProjects = [...data].sort((a, b) => {
					return parseInt(b.date) - parseInt(a.date);
				});

				setProjects(sortedProjects);

				// Збираємо всі унікальні теги з даних
				const tagsSet = new Set();
				sortedProjects.forEach(project => {
					project.tags.forEach(tag => tagsSet.add(tag.tagName));
				});

				const sortedTags = Array.from(tagsSet).sort((a, b) =>
					a.toLowerCase().localeCompare(b.toLowerCase()),
				);

				setAllTags(sortedTags);
				setLoading(false);
			} catch (error) {
				console.error('Помилка завантаження проектів:', error);
				setError(error.message);
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	// Фільтруємо проекти за обраним тегом
	const filteredProjects =
		activeFilter === 'all'
			? projects
			: projects.filter(project =>
					project.tags.some(tag => tag.tagName === activeFilter),
				);

	// Змінюємо сторінку на першу при зміні фільтра
	useEffect(() => {
		setCurrentPage(1);
	}, [activeFilter]);

	// Розрахунок поточних проектів для відображення
	const indexOfLastProject = currentPage * projectsPerPage;
	const indexOfFirstProject = indexOfLastProject - projectsPerPage;
	const currentProjects = filteredProjects.slice(
		indexOfFirstProject,
		indexOfLastProject,
	);

	// Загальна кількість сторінок
	const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

	// Функція зміни сторінки
	const paginate = pageNumber => setCurrentPage(pageNumber);

	// Функція для переходу на наступну сторінку
	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	// Функція для переходу на попередню сторінку
	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	if (loading) {
		return (
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="flex items-center justify-center py-20">
					<div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-gray-900"></div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<div
					className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
					role="alert"
				>
					<strong className="font-bold">Помилка!</strong>
					<span className="block sm:inline">
						{' '}
						Не вдалося завантажити проекти: {error}
					</span>
				</div>
			</div>
		);
	}

	const latestProjectDate = projects.length > 0 ? projects[0].date : null;

	return (
		<>
			{/* Компонент фільтрів за тегами */}
			<TagFilters
				activeFilter={activeFilter}
				setActiveFilter={setActiveFilter}
				allTags={allTags}
			/>

			{/* Сітка карточок */}
			<div className="flex-1">
				<div className="xs:grid-cols-2 mt-8 grid grid-cols-1 gap-4 pb-4 lg:grid-cols-3">
					{currentProjects.map((project, index) => (
						<ProjectCard
							key={index}
							project={project}
							index={index}
							latestProjectDate={latestProjectDate}
						/>
					))}
				</div>
			</div>

			{/* Якщо немає проектів для відображення */}
			{filteredProjects.length === 0 && (
				<div className="py-10 text-center text-gray-500">
					<p>Проекти не знайдено</p>
				</div>
				
			)}

			{/* Компонент пагінації */}
			<div className="mt-auto">
				{totalPages > 1 && (
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						paginate={paginate}
						prevPage={prevPage}
						nextPage={nextPage}
					/>
				)}

				{/* Відображення інформації про пагінацію */}
				{filteredProjects.length > 0 && (
					<div className="mt-4 text-center text-sm text-gray-500 dark:text-white">
						shown {indexOfFirstProject + 1}-
						{Math.min(indexOfLastProject, filteredProjects.length)} from{' '}
						{filteredProjects.length} projects
					</div>
				)}
			</div>
		</>
	);
}

export default ProjectCards;
