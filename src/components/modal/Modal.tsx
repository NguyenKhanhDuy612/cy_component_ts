import React from 'react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	if (!isOpen) return null;

	return (
		<div style={overlayStyle}>
		<div style={modalStyle}>
			<h2>{title}</h2>
			<div>{children}</div>
			<button onClick={onClose}>Close</button>
		</div>
		</div>
	);
};

// Styles
const overlayStyle = {
	position: 'fixed' as 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

const modalStyle = {
	backgroundColor: 'white',
	padding: '20px',
	borderRadius: '5px',
};

export default Modal;
