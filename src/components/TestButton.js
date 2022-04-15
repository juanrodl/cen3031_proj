import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router,Routes as Switch,Route,Link} from "react-router-dom";
import "../css/TestButton.css";
function TestButton () {
    return (
        <div className='TestButton p-4'>
            <button type="button" className = "btn-primary-custom"><Link to="/test" className = "btn-link-custom"> Take the test now by clicking here!</Link></button>
            <div className= "d-flex-inline text-center">
                <section className="lead custom-lead custom-lead-lesser text-center d-flex flex-column">
                   
                    Have an account or want to create one? 
                    <section className = "d-flex flex-row justify-content-around">
                    <section className = "d-flex"><p data-toggle ="modal" data-target="#login-modal" className = "link-custom">Log in</p>&nbsp;or&nbsp;<p data-toggle="modal" data-target="#register-modal" className = "link-custom">Register</p></section>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default TestButton;