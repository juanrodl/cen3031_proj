import React, {useState} from 'react';
import '../css/RegisterModal.css';
function RegisterModal () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className='RegisterModal'>
            <div className="modal fade" id="register-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title modal-title-custom">Register</div>
                    </div>
                    <div className="modal-body modal-body-custom">
                        <form>
                            <div className="form-group d-flex flex-column justify-content-start">
                                <label htmlFor="email-input" className="form-label d-flex justify-content-start">Email Address</label>
                                <input type="email" className="form-control transparent-input" id="email-input" onChange={(e) => setUsername(e.target.value)} required="" value={username}/>
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
                                <input type="password" className="form-control transparent-input" id="password-input" onChange={(e) => setPassword(e.target.value)} required="" value={password}/>
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