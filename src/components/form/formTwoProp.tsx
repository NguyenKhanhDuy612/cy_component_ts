import React, { useState } from "react";

interface FormData {
	name: string;
	email: string;
}

interface FormComponentTwoProps {
	formData: FormData;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormComponentTwoP: React.FC<FormComponentTwoProps> = ({ formData, setFormData }) => {
	const [formErrors, setFormErrors] = useState({ mess: "" });

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
		} else if (!validateEmail(formData.email)) {
			setFormErrors({ ...formErrors, mess: "Email is not valid" });
		} else {
			console.log("Form data submitted:", formData);
		}
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
				/>
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

export default FormComponentTwoP;
