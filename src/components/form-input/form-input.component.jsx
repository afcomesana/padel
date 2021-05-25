import React from 'react';
import './form-input.styles.css';

const FormInput = ({type, name, value, label, handleChange}) => {

    if (type !== 'select') {
        return(
            <div className="form-input">
                <label className={`player-label ${value === "" ? '' : 'shrink'}`}>{label}</label>
                <input type={type} name={name} value={value} label={label} onChange={handleChange} required />
            </div>
        )
    } else {
        return (
            <div className="form-input">
                <select className={`${value!=='' ? '' : 'default-option'}`} name={name} value={value} onChange={handleChange} required>
                    <option className="default-option" value="">Nivel</option>
                    <option value="principiante">Principiante</option>
                    <option value="medio">Medio</option>
                    <option value="avanzado">Avanzado</option>
                </select>
            </div>
        )
    }
};

export default FormInput;