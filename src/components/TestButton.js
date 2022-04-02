import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router,Routes as Switch,Route,Link} from "react-router-dom";
import "../css/TestButton.css";
function TestButton () {
    return (
        <div className='TestButton p-4'>
            <button type="button" className = "btn-primary-custom"><Link to="/test" className = "btn-link-custom"> Take the test now by clicking here!</Link></button>
            <div className= "d-flex-inline text-center">
                <section className="lead custom-lead custom-lead-lesser text-center">
                    Have an account or want to create one? <Link to = "/loginPage" className = "link-custom">Log in</Link> or  <Link to = "/registerPage" className = "link-custom">Register</Link>
                </section>
            </div>
        </div>
    );
}

export default TestButton;