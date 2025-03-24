// Pagination.js - компонент для пагінації
import { ChevronLeft, ChevronRight } from './Icons';

function Pagination({ currentPage, totalPages, paginate, prevPage, nextPage }) {
	// Функція для створення масиву кнопок пагінації
	const getPaginationButtons = () => {
		const buttons = [];
		const siblingsCount = 2; // Кількість кнопок з кожного боку від поточної сторінки

		// Функція для додавання кнопки
		const addPageButton = pageNum => {
			buttons.push(
				<button
					key={pageNum}
					onClick={() => paginate(pageNum)}
					className={`flex h-8 w-8 items-center justify-center rounded-md border transition-colors duration-300 ${currentPage === pageNum ? 'border-gray-700 bg-gray-700 text-white dark:border-gray-200' : 'border-gray-200 bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
				>
					{pageNum}
				</button>,
			);
		};

		// Функція для додавання три крапки
		const addEllipsis = key => {
			buttons.push(
				<span key={key} className="flex w-8 items-center justify-center">
					...
				</span>,
			);
		};

		// Завжди показуємо першу сторінку
		addPageButton(1);

		// Початкова сторінка для відображення після першої (якщо потрібно)
		let startPage = Math.max(2, currentPage - siblingsCount);

		// Додаємо три крапки після першої сторінки, якщо початкова сторінка більше 2
		if (startPage > 2) {
			addEllipsis('leftEllipsis');
		}

		// Кінцева сторінка для відображення
		let endPage = Math.min(totalPages - 1, currentPage + siblingsCount);

		// Показуємо сторінки від startPage до endPage
		for (let i = startPage; i <= endPage; i++) {
			addPageButton(i);
		}

		// Додаємо три крапки перед останньою сторінкою, якщо endPage менше totalPages - 1
		if (endPage < totalPages - 1) {
			addEllipsis('rightEllipsis');
		}

		// Додаємо останню сторінку, якщо totalPages більше 1
		if (totalPages > 1) {
			addPageButton(totalPages);
		}

		return buttons;
	};

	return (
		<div className="font-montserrat flex items-center justify-center space-x-1">
			<button
				onClick={prevPage}
				disabled={currentPage === 1}
				className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors duration-300 ${currentPage === 1 ? 'cursor-not-allowed bg-gray-200 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
			>
				<ChevronLeft />
			</button>

			{getPaginationButtons()}

			<button
				onClick={nextPage}
				disabled={currentPage === totalPages}
				className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors duration-300 ${currentPage === totalPages ? 'cursor-not-allowed bg-gray-200 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
			>
				<ChevronRight />
			</button>
		</div>
	);
}

export default Pagination;
