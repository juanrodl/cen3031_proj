import React from 'react';
import { Container } from 'react-bootstrap';

function AboutPage () {
    return (
        <div className = "enclosure">
            <div className = "display-3">
                About Meet Your Major
                <hr className="about"></hr>
            </div>
            <div className = "align-items-center p-1">
                <div className = "AppInfo row">
                    <section className='text-justify-left p-1 display-6'>
                        What is MeetYourMajor?
                    </section>
                    <section className="lead text-justify-left col-6">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat J
                    on proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    <hr></hr>
                    <br></br>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat J
                    on proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </section>
                    <div className = "text-center col-6">
                   <img src="https://media.istockphoto.com/photos/handsome-young-man-gesturing-thumbs-up-isolated-picture-id175440771?k=20&m=175440771&s=612x612&w=0&h=IT3aJmh1YwH2jaMc9g1izSW2ieLnG6-MbOdV5M5OvMI=" length="30%" class="rounded img-fluid"></img>
                </div>
                </div>
               
            </div>
        </div>
    );
}

export default AboutPage;