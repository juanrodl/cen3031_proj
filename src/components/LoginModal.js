import React, {useState, useEffect, useContext} from 'react';
import '../css/LoginModal.css'
import {useNavigate} from "react-router-dom";
import RegisterModal from './RegisterModal';
import {AuthStateContext, simpleMachine} from '../data/authState.xStateMachine';
import {validateEmail, validatePassword} from '../data/regExTest';

function LoginModal () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {send} = useContext(AuthStateContext);
    const navigate = useNavigate();

    const closeModals = () => {
            // get modals
            const modals = document.getElementsByClassName('modal');

            // on every modal change state like in hidden modal
            for(let i=0; i<modals.length; i++) {
              modals[i].classList.remove('show');
              modals[i].setAttribute('aria-hidden', 'true');
              modals[i].setAttribute('style', 'display: none');
            }
        
            // get modal backdrops
            const modalsBackdrops = document.getElementsByClassName('modal-backdrop');
    
            // remove every modal backdrop
            for(let i=0; i<modalsBackdrops.length; i++) {
              document.body.removeChild(modalsBackdrops[i]);
            }
    }
    const handleLogin = (e) => {
        e.preventDefault();
        let passwordPassed = validatePassword(password);
        let emailPassed = validateEmail(email);
        passwordPassed && true ? console.log("Password met requirements!") : console.log("Password did not meet requirements!");
        emailPassed && true ? console.log("Email met requirements!") : console.log("Email did not meet requirements!");
        send("LOG_IN");
        closeModals();
        navigate("/devtest");
    }
    useEffect(()=> {
        document.getElementById("login-modal").addEventListener('click', (e) => {
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
        <div className='LoginModal'>
            <div className="modal fade" id="login-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title modal-title-custom">Log in</div>
                    </div>
                    <div className="modal-body modal-body-custom">
                        <form onSubmit={(e) => handleLogin(e)} >
                            <div className="form-group d-flex flex-column justify-content-start">
                                <label id="email-incorrect-indicator-login" htmlFor="email-input-register"></label>
                                <label id="password-incorrect-indicator-login" htmlFor='password-input-register'></label>
                                <label htmlFor="email-input" className="form-label d-flex justify-content-start">Email Address</label>
                                <input type="email" className="form-control transparent-input" id="email-input-login" onChange={(e) => setEmail(e.target.value)} required="" value={email}/>
                                <div id="emailExtra" className="form-text">We will never share your personal information with anyone else</div>
                            </div>
                            <div className="form-group d-flex flex-column justify-content-start">
                                <label htmlFor="password-input" className="form-label d-flex justify-content-start">Password</label>
                                <input type="password" className="form-control transparent-input" id="password-input-login" onChange={(e) => setPassword(e.target.value)} required="" value={password}/>
                                <label className = "form-label">Don't have an account? <button className = "btn-modal-register" type="button" data-dismiss="modal" data-toggle="modal" data-target="#register-modal">Register here!</button></label>
                            </div><button type="submit" className="btn btn-modal-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <RegisterModal></RegisterModal>
        </div>
    );
}

export default LoginModal;