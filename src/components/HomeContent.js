import React from 'react';
import { Container } from 'react-bootstrap';
import TestButton from './TestButton';
function HomeContent () {
    return (
        <div className='HomeContent text-center w-100 p-2'>
            <div className='TitleDrop'>
                <Container className= "display-1">Meet your Major</Container>
                <div className = "lead">Take a quick assessment to see which college major is best fit for you!</div>
            </div>
            <TestButton></TestButton>
        </div>
    );
}

export default HomeContent;