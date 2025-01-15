// SimpleButton.js
import React from 'react';

const SimpleButton: React.FC = () => {
	const handleClick = (): void => {
		console.log('Button clicked!');
	};

	return <button onClick={handleClick}>Click Me</button>;
};

export default SimpleButton;
