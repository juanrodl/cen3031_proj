import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router,Routes as Switch,Route,Link} from "react-router-dom";
function TestButton () {
    return (
        <div className='TestButton p-4'>
            <button type="button" class = "btn-custom btn btn-primary btn-lg btn-block"><Link to="/test" className = "btn-custom"> to Take the test now by clicking here!</Link></button>
            <div class= "d-flex-inline text-center">
                <section class="lead p-1">
                    Have an account or want to create one? <Link to = "/loginPage">Log in</Link> or  <Link to = "register">Register</Link>
                </section>
            </div>
        </div>
    );
}

export default TestButton;