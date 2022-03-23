import React from 'react';
import CustomCard from './CustomCard';
import Carousel from './Carousel';
import { data } from '../data/data'

function TestPage () {
    return (
        <div className = "enclosure">
            <Carousel cards={data}></Carousel>
        </div>
    );
}

export default TestPage;