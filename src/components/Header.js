import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router,Routes as Switch,Route,Link} from "react-router-dom";
import "../css/Header.css";
function Header () {
    return (
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
                            <Link to='/profilePage' className = "nav-link-custom"><FontAwesomeIcon icon={faUser} /></Link>
                            </a>
                        </li>
                      </ul>
                    </div>
              </div>
        </nav>
    );
}

export default Header;