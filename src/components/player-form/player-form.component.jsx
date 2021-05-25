import React from 'react';
import './player-form.styles.css';

import FormInput from '../form-input/form-input.component';

const PlayerForm = ({ formFields, handleChange, miembro }) => {
    const { firstName, lastName, email, level } = formFields;
    return (
        <div className="player-form">
            <h3>{`${miembro === 1 ? 'Primer' : 'Segundo'} miembro:`}</h3>
            <form>
                <FormInput type="text" name="firstName" value={firstName} label="Nombre" handleChange={handleChange} />
                <FormInput type="text" name="lastName" value={lastName} label="Apellidos" handleChange={handleChange} />
                <FormInput type="email" name="email" value={email} label="Correo electrónico" handleChange={handleChange} />
                <FormInput type="select" name="level" value={level} label="Nivel" handleChange={handleChange} />
            </form>
        </div>
    )
}

export default PlayerForm;