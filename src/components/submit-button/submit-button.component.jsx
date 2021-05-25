import React from 'react';
import './submit-button.styles.css';

const SubmitButton = ({ children, handleSubmit }) => (
    <button class="submit-button" onClick={handleSubmit} >{children}</button>
);

export default SubmitButton;