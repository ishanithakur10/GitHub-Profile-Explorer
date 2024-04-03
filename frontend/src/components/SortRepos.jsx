const SortRepos = ({onSort,sortType}) => {
	return (
		<div className='mb-2 flex justify-center lg:justify-end'>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass
					${sortType==="recent" ? "border-yellow-500":""}
				`}
				onClick={()=>onSort("recent")}
			>
				Most Recent
			</button>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass
				${sortType==="stars" ? "border-yellow-500":""}
				`}
				onClick={()=>onSort("stars")}
			>
				Most Stars
			</button>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass
				${sortType==="forks" ? "border-yellow-500":""}
				`}
				onClick={()=>onSort("forks")}
			>
				Most Forks
			</button>
		</div>
	);
};

export default SortRepos;