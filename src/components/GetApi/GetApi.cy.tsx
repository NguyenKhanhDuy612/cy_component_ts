import GetApi from "./GetApi";

describe('MyComponent API response', () => {
	beforeEach(() => {
		cy.intercept('GET', 'http://localhost:3005/account', {
			statusCode: 200,
			body: [
			{ id: 1, name: 'Item One' },
			{ id: 2, name: 'Item Two' },
			{ id: 3, name: 'Item Three' }
			],
		}).as('getData');
	});

	it('displays data from API', () => {
		cy.mount(<GetApi />);
		
		cy.wait('@getData');

		cy.get('.data-item').should('have.length.greaterThan', 0);
		
		cy.get('.data-item').first().should('contain', 'Item One');
		cy.get('.data-item').first().should('contain', 'Expected Item Name');
	});
});