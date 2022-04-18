import React, {useState, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router,Routes as Switch,Route,Link} from "react-router-dom";
import {validateEmail, validatePassword} from '../data/regExTest';
import {AuthStateContext, simpleMachine} from '../data/authState.xStateMachine';
import LoginModal from './LoginModal';
import "../css/Header.css";
import MYMLogo from '../img/Meet_Your_Major-logos_white.png'
function Header () {


    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-primary-custom navbar-secondary-custom">
          <div className = 'container-fluid p-2 d-flex'>
              <Link to="/home" className = "navbar-brand-custom nav-link-custom"><img className="object-fit" src={MYMLogo}  height="80vh"></img></Link>
              <div className = "navbar-nav">
                    <ul className="navbar-nav align-items-center float-right">
                      
                      <li className="nav-item">
                        <p className="nav-link nav-link-custom">
                        <Link to='/about' className = "nav-link-custom">About</Link>
                        </p>
                      </li>
                      <li className="nav-item">
                        <p className="nav-link nav-link-custom" >
                        <Link to='/test' className = "nav-link-custom">Take Assessment</Link>
                        </p>
                      </li>
                      <li className="nav-item">
                          <p className="nav-link" href="#">
                          <button className= "btn btn-profile-custom" data-toggle= "modal" data-target = "#login-modal"><FontAwesomeIcon icon={faUser} /></button>
                          </p>
                      </li>
                    </ul>
              </div>
          </div>
        </nav>
        <LoginModal></LoginModal>
    </div>
    );
}
//<Link to='/profilePage' className = "nav-link-custom"><FontAwesomeIcon icon={faUser} /></Link>
export default Header;