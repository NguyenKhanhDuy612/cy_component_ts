import Modal from "./Modal";

describe('Modal Component', () => {
	it('does not render when isOpen is false', () => {
		cy.mount(<Modal isOpen={false} onClose={() => {}} title="Test Modal"><p>Content</p></Modal>);
		cy.get('div').should('not.exist');
	});

	it('renders correctly when isOpen is true', () => {
		cy.mount(<Modal isOpen={true} onClose={() => {}} title="Test Modal"><p>Content</p></Modal>);
		
		cy.get('h2').should('contain', 'Test Modal');
		cy.get('p').should('contain', 'Content');
		cy.get('button').should('contain', 'Close');
		cy.get('div').should('exist');
	});

	it('calls onClose when close button is clicked', () => {
		const onCloseSpy = cy.spy();
		cy.mount(<Modal isOpen={true} onClose={onCloseSpy} title="Test Modal"><p>Content</p></Modal>);
		
		cy.get('button').contains('Close').click();
		
		cy.wrap(onCloseSpy).should('have.been.called');
	});
});