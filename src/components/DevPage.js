import React from 'react';
import CustomCardSlider from './CustomCardSlider';
import UserProfile from './UserProfile';
import UserLanding from './UserLanding';
import '../css/DevPage.css';
function DevPage () {
    return (
        <div className='DevPage'>
            <UserProfile></UserProfile>
        </div>
    );
}

export default DevPage;

/**<section className = "display-6 container-fluid text-center">
                This page is meant to serve as a component testing page. Components meant to be tested can be inserted below.
            </section>*/