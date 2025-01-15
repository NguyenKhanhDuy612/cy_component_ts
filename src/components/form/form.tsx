// create a new form component.tsx
import React, { useState } from "react";

const FormComponent: React.FC = () => {
	const [formData, setFormData] = useState({ name: "", email: "" });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form data submitted:", formData);
	};

	return (
		<form onSubmit={handleSubmit}>
		<div>
			<label htmlFor="name">Name:</label>
			<input
			type="text"
			id="name"
			name="name"
			value={formData.name}
			onChange={handleChange}
			aria-invalid={formData.name === "" ? "true" : "false"}
			/>
			{formData.name === "" && <span role="alert">Name is required</span>}
		</div>
		<div>
			<label htmlFor="email">Email:</label>
			<input
			type="email"
			id="email"
			name="email"
			value={formData.email}
			onChange={handleChange}
			// aria-invalid={formData.email === "" ? "true" : "false"}
			/>
			{/* {formData.email === "" && <span role="alert">Email is required</span>} */}
		</div>
		<button type="submit">Submit</button>
		</form>
	);
};

export default FormComponent;
