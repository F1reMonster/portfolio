// TagFilters.js - компонент для фільтрації за тегами
function TagFilters({ activeFilter, setActiveFilter, allTags }) {
	return (
		<div className="font-montserrat mt-8 text-xs/none">
			<div className="flex gap-2 pb-1">
				<button
					className={`flex h-9 shrink-0 items-center rounded-md border px-4 font-medium transition-colors duration-300 ${activeFilter === 'all' ? 'border-gray-700 bg-gray-700 text-white dark:border-gray-200' : 'border-gray-200 bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
					onClick={() => setActiveFilter('all')}
				>
					All
				</button>
				<div className="scrollbar flex w-full items-center gap-2 overflow-x-auto pb-1">
					{allTags.map(tag => (
						<button
							key={tag}
							className={`flex h-9 shrink-0 items-center rounded-md border px-4 font-medium transition-colors duration-300 ${activeFilter === tag ? 'bor border-gray-700 bg-gray-700 text-white dark:border-gray-200' : 'border-gray-200 bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
							onClick={() => setActiveFilter(tag)}
						>
							{tag}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

export default TagFilters;
