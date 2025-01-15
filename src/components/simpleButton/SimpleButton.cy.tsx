// SimpleButton.cy.tsx
import SimpleButton from './SimpleButton';

describe('SimpleButton Component', () => {
	it('logs to console when button is clicked', () => {
		cy.mount(<SimpleButton />); // Mount the component

		// Stub console.log and create an alias
		cy.window().then((win) => {
			cy.stub(win.console, 'log').as('consoleLog');
		  });

		// Click the button
		cy.get('button').click();

		// Check that console.log was called with the expected message
		cy.get('@consoleLog').should('be.calledWith', 'Button clicked!');
	});
});
