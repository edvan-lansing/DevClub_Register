import React from "react";
// ...existing code...

export const Input = ({ label, name, type = "text", value, onChange, required }) => (
	<div className="input-group">
		{label && <label htmlFor={name}>{label}</label>}
		<input
			id={name}
			name={name}
			type={type}
			value={value}
			onChange={onChange}
			required={required}
			className="input"
		/>
	</div>
);
