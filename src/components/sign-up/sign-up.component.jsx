import React from 'react';
import './sign-up.styles.css';

import PlayerForm from '../player-form/player-form.component';
import SubmitButton from '../submit-button/submit-button.component';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { firestore } from '../../firebase/firebase.utils';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstPlayer: {
                playerId: 1,
                firstName: '',
                lastName: '',
                email: '',
                level: ''
            },
            secondPlayer: {
                playerId: 2,
                firstName: '',
                lastName: '',
                email: '',
                level: ''
            }
        };
    }

    createSheetsObject = () => {
        const {firstPlayer, secondPlayer } = this.state;
        return {
            nombre1: firstPlayer.firstName,
            apellido1: firstPlayer.lastName,
            email1: firstPlayer.email,
            nivel1: firstPlayer.level,
            nombre2: secondPlayer.firstName,
            apellido2: secondPlayer.lastName,
            email2: secondPlayer.email,
            nivel2: secondPlayer.level
        }
    }

    checkFormFields = player => {
        let filled = true;
        Object.entries(player).forEach(item => {
            if (item[1] === "") {
                filled = false;
            }
        });
        return filled;
    }

    handleSubmit = async event => {
        event.preventDefault();
        const MySwal = withReactContent(Swal);
        const { firstPlayer, secondPlayer } = this.state;
        const axiosObject = this.createSheetsObject();
        if (this.checkFormFields(firstPlayer) && this.checkFormFields(secondPlayer)) {
            firestore.collection("mpt-june-2021").add(this.state)
            .then(() => {
                fetch("https://sheet.best/api/sheets/519e026b-9a05-4b1f-a3d4-14898516420f", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(axiosObject)
                    })
                }).then(() => MySwal.fire({
                    title: "¡Gracias!",
                    text: "Tu inscripción se ha realizado con éxito",
                    icon: "success",
                    confirmButtonText: "Vale"                
                    })
                    .then(res => this.setState({
                        firstPlayer: {
                            playerId: 1,
                            firstName: '',
                            lastName: '',
                            email: '',
                            level: ''
                        },
                        secondPlayer: {
                            playerId: 2,
                            firstName: '',
                            lastName: '',
                            email: '',
                            level: ''
                        }
                    }))
            )
            .catch(err => MySwal.fire({
                title: "Algo ha ido mal...",
                text: "Ha habido un error al enviar tu solicitud",
                icon: "error",
                confirmButtonText: "Vale"                
            }));
        } else {
            console.log(this.checkFormFields(firstPlayer));
            MySwal.fire({
                title: "Faltan campos por rellenar",
                text: "Necesitamos todos los campos del formulario",
                icon: "warning",
                confirmButtonText: "Vale"
            });
        }
    }

    handleChange = playerId => event => {
        const { name, value } = event.target;
    
        playerId === 1 ? this.setState( prevState => ({
            firstPlayer: {
                ...prevState.firstPlayer,
                [name]: value
            }
        }))
        : this.setState( prevState => ({
            secondPlayer: {
                ...prevState.secondPlayer,
                [name]: value
            }
        }));
      };

    render() {
        
        return (   
            <div className="sign-up">
                <div className="sign-up-form">
                    <PlayerForm formFields={this.state.firstPlayer} handleChange={this.handleChange(1)} miembro={1} />
                    <PlayerForm formFields={this.state.secondPlayer} handleChange={this.handleChange(2)} miembro={2} />
                </div>
                <div className="sign-up-layer"></div>
                <SubmitButton handleSubmit={this.handleSubmit}>Enviar</SubmitButton>
            </div> 
        )
    }

}

export default SignUpForm;