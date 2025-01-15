// src/components/form/form.test.tsx
import React from "react";
import FormComponent from "./form";
import FormComponentTwo from "./formTwo";

describe("FormComponent", () => {
	describe("Form Success", () => {
		it("renders the form", () => {
		cy.mount(<FormComponent />);
		cy.get("form").should("exist");
		});

		it("updates the name input value on change", () => {
		cy.mount(<FormComponent />);
		cy.get('input[name="name"]')
			.type("John Doe")
			.should("have.value", "John Doe");
		});

		it("updates the email input value on change", () => {
		cy.mount(<FormComponent />);
		cy.get('input[name="email"]')
			.type("john.doe@example.com")
			.should("have.value", "john.doe@example.com");
		});

		it("submits the form with the correct data", () => {
		cy.mount(<FormComponent />);
		cy.get('input[name="name"]').type("John Doe");
		cy.get('input[name="email"]').type("john.doe@example.com");
		cy.get("form").submit();
		cy.window().then((win) => {
			cy.stub(win.console, "log").as("consoleLog");
		});
		cy.get("@consoleLog");
		});
	});
	describe("Form empty", () => {
		it("shows an error message when the name input is empty", () => {
		cy.mount(<FormComponent />);
		cy.get("form").submit();
		cy.get('input[name="name"]').should('have.attr', 'aria-invalid', 'true');
		cy.get('input[name="name"]').next().should("contain", "Name is required");
		});

		it("shows an error message when the email input is empty", () => {
		cy.mount(<FormComponent />);
		cy.get("form").submit();
		cy.get('input[name="email"]').should('have.attr', 'aria-invalid', 'true');
		cy.get('input[name="email"]')
			.next()
			.should("contain", "Email is required");
		});
	});

	// check email format
	describe("Form email format", () => {
		it("shows an error message when the email format is incorrect", () => {
		cy.mount(<FormComponentTwo />);
		cy.get('input[name="email"]').type("john.doe");
		cy.get("form").submit();
		cy.get('input[name="email"]').should('have.attr', 'aria-invalid', 'true');
		cy.get('input[name="email"]')
			.next()
			.should("contain", "Email is required");
		});
	});
});
