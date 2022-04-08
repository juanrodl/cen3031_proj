import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router,Routes as Switch,Route,Link} from "react-router-dom";
import "../css/Header.css";
function Header () {
  //handles the form state and stores the most concurrent username and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Handles form submission for registration/login
  let onSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);;
  };

  let validateEmail = (email) => {

  };

  /**
   * https://stackoverflow.com/a/40923568
   *  Used to validate the password that the user inputted
   *  Imposes certain requirements
   * 1. minimum length of 8 characters
   * 2. at least one symbol
   * 3. at least one uppercase letter
   * 4. at least one lowercase letter
   * 5. at least one number
   */
  let validatePassword = (password) => {
    var re = new RegExp('^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$');
    let passed = re.test(password);
    return passed;
  };
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-primary-custom navbar-secondary-custom">
          <div className = 'container-fluid p-2'>
              <Link to="/home" className = "navbar-brand-custom nav-link-custom display-6">MeetYourMajor</Link>
              <div className = "navbar-nav">
                    <ul className="navbar-nav float-right">
                      
                      <li className="nav-item">
                        <a className="nav-link nav-link-custom" href="#">
                        <Link to='/about' className = "nav-link-custom">About</Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link nav-link-custom" href="#">
                        <Link to='/test' className = "nav-link-custom">Take Assessment</Link>
                        </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link nav-scale nav-link-custom" href="#">
                          <button className= "btn btn-primary" data-toggle= "modal" data-target = "#reg-log-modal"><FontAwesomeIcon icon={faUser} /></button>
                          </a>
                      </li>
                    </ul>
              </div>
          </div>
        </nav>
        <div className="modal fade" id ="reg-log-modal" tabIndex = "-1">
          <div className= "modal-dialog">
            <div className = "modal-content">
              <div className ="modal-header">
                <div className = "modal-title modal-title-custom">Register/Log in</div>
              </div>
              <div className = "modal-body modal-body-custom">
                <form onSubmit = {onSubmit}>
                  <div className = "form-group d-flex flex-column justify-content-start">
                    <label htmlFor = "email-input" className= "form-label d-flex justify-content-start">Email Address</label>
                    <input type = "email" className = "form-control transparent-input" id= "email-input" value={email} onChange = {(e) => setEmail(e.target.value)} required></input>
                    <div id= "emailExtra" className = "form-text">We WILL share all your personal information with someone else</div>
                  </div>
                  <div className = "form-group d-flex flex-column justify-content-start">
                    <label htmlFor = "password-input" className= "form-label d-flex justify-content-start">Password</label>
                    <input type = "password" className = "form-control transparent-input" id= "password-input" value={password} onChange = {(e) => setPassword(e.target.value)} required></input>
                  </div>
                  <button type = "submit" className ="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
//<Link to='/profilePage' className = "nav-link-custom"><FontAwesomeIcon icon={faUser} /></Link>
export default Header;