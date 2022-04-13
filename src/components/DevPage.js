import React from 'react';
import CustomCardSlider from './CustomCardSlider';
import '../css/DevPage.css';
function DevPage () {
    return (
        <div className='DevPage'>
            <section className = "display-6 container-fluid text-center">
                This page is meant to serve as a component testing page. Components meant to be tested can be inserted below.
            </section>
            <div className = "component-container container-fluid">
                <CustomCardSlider></CustomCardSlider>
            </div>
        </div>
    );
}

export default DevPage;