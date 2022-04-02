import React from 'react';
import { Container } from 'react-bootstrap';
import "../css/AboutPage.css";
function AboutPage () {
    return (
        <div className = "enclosure">
            <div className = "about-header page-header text-center container">
               <h1 className = "display-3 custom-display-3">Welcome to Meet Your Major!</h1>
                <hr className="about"></hr>
            </div>
            <div className = "container d-flex justify-content-between space-between align-items-center p-4">
                <div class="card about-card-custom" id = "card-1">
                    <div class="card-body">
                        <h3 class="card-title text-center">Test yourself!</h3>
                        
                        <p class="card-text card-text-custom p-3">Take a test assessing your academic interests and other relevant information</p>
                        
                    </div>
                </div>
                <div class="card about-card-custom" id = "card-2">
                    <div class="card-body">
                        <h3 class="card-title text-center">Find your Best Fit Major!</h3>
                        <p class="card-text card-text-custom p-3">Review what your best fit major is according to our system in your results page!</p>
                        
                    </div>
                </div>
                <div class="card about-card-custom" id = "card-3">
                    <div class="card-body">
                        <h3 class="card-title text-center">See and download your Results!</h3>
                        
                        <p class="card-text card-text-custom p-3">Create an account to download your results page and share these results through your social media!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;