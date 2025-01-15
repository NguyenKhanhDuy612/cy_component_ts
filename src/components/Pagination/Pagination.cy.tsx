import Pagination from "./Pagination";

describe('Pagination Component', () => {
	const totalPages = 5;

	beforeEach(() => {
		cy.mount(
			<Pagination totalPages={totalPages} currentPage={1} onChange={() => {}} />
		);
	});

	it('renders the correct number of page buttons', () => {
		cy.get('button').should('have.length', totalPages);
	});

	it('highlights the current page button', () => {
		cy.mount(
			<Pagination totalPages={totalPages} currentPage={3} onChange={() => {}} />
		);
		cy.get('button').contains('3').should('have.css', 'font-weight', '700');
		cy.get('button').contains('1').should('not.have.css', 'font-weight', '700');
	});

	it('calls onChange when a page button is clicked', () => {
		const onChangeSpy = cy.spy();
		cy.mount(
			<Pagination totalPages={totalPages} currentPage={1} onChange={onChangeSpy} />
		);

		cy.get('button').contains('2').click();
		cy.wrap(onChangeSpy).should('have.been.calledWith', 2);
	});
});