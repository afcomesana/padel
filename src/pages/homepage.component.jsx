import React from 'react';
import './homepage.styles.css';

import SignUpForm from '../components/sign-up/sign-up.component';

const Homepage = () => (
    <div className="homepage">
        <h1>Medtronic Padel Tour</h1>
        <SignUpForm />
    </div>
);

export default Homepage;