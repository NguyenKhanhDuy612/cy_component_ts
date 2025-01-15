// create a new form component.tsx
import React, { useState } from "react";

const FormComponentTwo: React.FC = () => {
	const [formData, setFormData] = useState({ name: "", email: "" });
	const [formErrors, setFormErrors] = useState({ mess: ""});
	const validateEmail = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!formData.email) {
			setFormErrors({ ...formErrors, mess: "Email is required" });
			console.log("Form data submitted111:", formData);
			console.log("Form data formErrors:", formErrors);

			
		}else if (!validateEmail(formData.email)) {
				console.log("Form data submitted222:", formData);
				
				setFormErrors({ ...formErrors, mess: "Email is not valid" });
		} else {
			console.log("Form data submitted123131:", formData);
		}
		console.log("Form data formErrors:", formErrors);
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
			// aria-invalid={formData.name === "" ? "true" : "false"}
			/>
			{/* {formData.name === "" && <span role="alert">Name is required</span>} */}
		</div>
		<div>
			<label htmlFor="email">Email:</label>
			<input
			type="text"
			id="email"
			name="email"
			value={formData.email}
			onChange={handleChange}
			aria-invalid={formData.email !== "" ? "true" : "false"}
			/>
			{formErrors.mess !== "" && <span role="alert">{formErrors.mess}</span>}
		</div>
		<button type="submit">Submit</button>
		</form>
	);
};

export default FormComponentTwo;
