// src/components/form/form.test.tsx
import FormComponentTwo from "./formTwo";
import FormComponentThree from "./formTwoProp";

describe("FormComponent", () => {
	// check email format
	describe("Form email format", () => {
		it("shows an error message when the email format is incorrect", () => {
			cy.mount(<FormComponentTwo />);
			cy.get('input[name="email"]').type("john.doe");
			cy.get("form").submit();
			cy.get('input[name="email"]').should('have.attr', 'aria-invalid', 'true');
			cy.get('input[name="email"]').next().should("contain", "Email is not valid");
			// cy.get('input[name="email"]').next().should("contain", "Email is required");
		});
	});

	describe('Check form', () => {
		beforeEach(() => {
			cy.mount(<FormComponentTwo />);
		});

		it('renders the form correctly', () => {
			cy.get('form').should('exist');
			// cy.get('label[htmlFor="name"]').should('contain', 'Name:');
			cy.get('input#name').should('exist');
			// cy.get('label[htmlFor="email"]').should('contain', 'Email:');
			cy.get('input#email').should('exist');
			cy.get('button[type="submit"]').should('contain', 'Submit');
		});

		it('shows error message when email is empty', () => {
			cy.get('input#name').type('John Doe');
			cy.get('button[type="submit"]').click();
			cy.get('span[role="alert"]').should('contain', 'Email is required');
		});

		it('shows error message when email is invalid', () => {
			cy.get('input#name').type('John Doe');
			cy.get('input#email').type('invalid-email');
			cy.get('button[type="submit"]').click();
			cy.get('span[role="alert"]').should('contain', 'Email is not valid');
		});

		it('submits the form with valid data', () => {
			cy.get('input#name').type('John Doe');
			cy.get('input#email').type('john.doe@example.com');
			cy.get('button[type="submit"]').click();
			cy.get('span[role="alert"]').should('not.exist');
		});
	});

	describe('Check form with props', () => {
		it('renders the form with given prop values', () => {
			const formData = { name: 'Jane Doe', email: 'jane.doe@example.com' };
			const setFormData = cy.stub();
			cy.mount(<FormComponentThree formData={formData} setFormData={setFormData} />);
			cy.get('input#name').should('have.value', formData.name);
			cy.get('input#email').should('have.value', formData.email);
		});
		it('validates the form with given prop values', () => {
			const formData = { name: 'Jane Doe', email: '' };
			const setFormData = cy.stub();
			cy.mount(<FormComponentThree formData={formData} setFormData={setFormData} />);
			cy.get('button[type="submit"]').click();
			cy.get('span[role="alert"]').should('contain', 'Email is required');
		});
	});
});
