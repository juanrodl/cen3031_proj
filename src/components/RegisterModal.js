import React, {useState, useEffect} from 'react';
import {validateEmail, validatePassword} from '../data/regExTest';
import {useNavigate} from "react-router-dom";
import '../css/RegisterModal.css';
function RegisterModal () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        let passwordPassed = validatePassword(password);
        let emailPassed = validateEmail(email);
        passwordPassed && true ? console.log("Password met requirements!") : document.getElementById("password-incorrect-indicator-register").innerHTML = "Password did not meet requirements!";
        emailPassed && true ? console.log("Email met requirements!") : document.getElementById("email-incorrect-indicator-register").innerHTML = "Email did not meet requirements!";
    }
    
    useEffect(()=> {
        document.getElementById("register-modal").addEventListener('click', (e) => {
        if (e.target.classList.contains("modal") == true)
        {
            document.getElementById("password-incorrect-indicator-login").innerHTML = "";
            document.getElementById("email-incorrect-indicator-login").innerHTML = "";
            setEmail("");
            setPassword("");
            document.getElementById("password-input-login").value = "";
            document.getElementById("email-input-login").value = "";
        }
    });
});

    return (
        <div className='RegisterModal'>
            <div className="modal fade" id="register-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title modal-title-custom">Register</div>
                    </div>
                    <div className="modal-body modal-body-custom">
                        <form onSubmit = {(e) => handleRegister(e)}>
                            <div className="form-group d-flex flex-column justify-content-start">
                                <label id="email-incorrect-indicator-register" htmlFor="email-input-register"></label>
                                <label id="password-incorrect-indicator-register" htmlFor='password-input-register'></label>
                                <label htmlFor="email-input" className="form-label d-flex justify-content-start">Email Address</label>
                                <input type="email" className="form-control transparent-input" id="email-input-register" onChange={(e) => setEmail(e.target.value)} required="" value={email}/>
                            </div>
                            <div className="form-group d-flex flex-column justify-content-start">
                                <p className = "form-label password-list">Passwords are required to satisfy the following requirements:</p>
                                <ul className = "d-flex flex-column">
                                    <li className = "password-list">1. minimum length of 8 characters</li>
                                    <li className = "password-list">2. at least one symbol</li>
                                    <li className = "password-list">3. at least one uppercase letter</li>
                                    <li className = "password-list">4. at least one lowercase letter</li>
                                    <li className = "password-list">5. at least one number</li>
                                </ul>
                                <label htmlFor="password-input" className="form-label d-flex justify-content-start">Password</label>
                                <input type="password" className="form-control transparent-input" id="password-input-register" onChange={(e) => setPassword(e.target.value)} required="" value={password}/>
                                <label className = "form-label">Already have an account? <button className = "btn-modal-register" type="button" data-dismiss="modal" data-toggle="modal" data-target="#login-modal">Log in!</button></label>
                            </div><button type="submit" className="btn btn-modal-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default RegisterModal;