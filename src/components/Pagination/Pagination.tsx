import React from 'react';

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onChange }) => {
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

	return (
		<div>
		{pages.map(page => (
			<button
			key={page}
			onClick={() => onChange(page)}
			style={{ fontWeight: currentPage === page ? 'bold' : 'normal' }}
			>
			{page}
			</button>
		))}
		</div>
	);
};

export default Pagination;
