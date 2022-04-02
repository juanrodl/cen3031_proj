import React from 'react';
import { Container } from 'react-bootstrap';
import TestButton from './TestButton';
import "../css/HomeContent.css"
function HomeContent () {
    return (
        <div className='HomeContent text-center w-100'>
            <div className="position-absolute w-100 circle-holder-home"><div className="circle-span"></div></div>
            <div className="position-absolute w-100 circle-holder-home-2"><div className="circle-span-2"></div></div>
            <div className='TitleDrop container-fluid d-flex flex-inline justify-content-center p-3'>
                <Container className= "display-1 custom-display d-flex flex-inline">Meet your Major</Container>
                <div className = "d-flex flex-column">
                    <div className = "lead custom-lead">Take a quick assessment to see which college major is best fit for you!</div>
                    <hr className="hr-custom"></hr>
                    <TestButton></TestButton>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;