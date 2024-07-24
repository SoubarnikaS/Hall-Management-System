import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import '../css/LoginForm.css'

const FormContainer = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className='login-container'>
            <div className="container">
                <div className="toggle-button-container">
                    <div className='button-container'>
                        <button className={`toggle-button ${isSignIn ? 'active' : ''}`} onClick={() => setIsSignIn(true)}>
                            Sign In
                        </button>
                        <button className={`toggle-button ${!isSignIn ? 'active' : ''}`}
                            onClick={() => setIsSignIn(false)}>
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="form-container">
                    {isSignIn ? (
                        <form className="sign-in-form">
                            <SignInForm/>
                        </form>
                    ) : (
                        <form className="sign-up-form">
                            <SignUpForm/>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormContainer;