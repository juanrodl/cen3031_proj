import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router,Routes as Switch,Route,Link} from "react-router-dom";
function Header () {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class = 'container-fluid'>
                <a class = "navbar-brand" href=''> MeetYourMajor</a>
                <div class = "navbar-nav">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link" aria-current="page" href="#">
                            <Link to='/home'>Home</Link>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                          <Link to='/test'>Test</Link>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                          <Link to='/about'>About</Link>
                          </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                              <FontAwesomeIcon icon={faUser} />
                            </a>
                        </li>
                      </ul>
                    </div>
              </div>
        </nav>
    );
}

export default Header;