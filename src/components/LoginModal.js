import React, {useState} from 'react';
import '../css/LoginModal.css'
import RegisterModal from './RegisterModal';
function LoginModal () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    return (
        <div className='LoginModal'>
            <div className="modal fade" id="login-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title modal-title-custom">Log in</div>
                    </div>
                    <div className="modal-body modal-body-custom">
                        <form>
                            <div className="form-group d-flex flex-column justify-content-start">
                                <label htmlFor="email-input" className="form-label d-flex justify-content-start">Email Address</label>
                                <input type="email" className="form-control transparent-input" id="email-input" onChange={(e) => setUsername(e.target.value)} required="" value={username}/>
                                <div id="emailExtra" className="form-text">We will never share your personal information with anyone else</div>
                            </div>
                            <div className="form-group d-flex flex-column justify-content-start">
                                <label htmlFor="password-input" className="form-label d-flex justify-content-start">Password</label>
                                <input type="password" className="form-control transparent-input" id="password-input" onChange={(e) => setPassword(e.target.value)} required="" value={password}/>
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