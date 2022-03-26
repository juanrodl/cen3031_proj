import React, {useState} from 'react';
import CustomCardEnd from './CustomCardEnd';
import { data } from '../data/data';
import CustomCard from './CustomCard';
import '../Carousel.css';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({cards}) => {
    const [current, setCurrent] = useState(0)
    const length = cards.length;

    const nextSlide = () => {
        setCurrent(current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? current : current -1);
    };
    console.log(current);

    if(!Array.isArray(cards) || cards.length <= 0) {
        return null;
    }
    return (
        <div className='container-fluid d-flex flex-column justify-content-center'>
            <div className='Carousel'>
                {cards.map((question, index) => {
                    return ( 
                        <div className = {index === current ? 'card active' : 'card'} key={index}>
                            {index === current && index === length-1 ? <CustomCardEnd question = {"Would you like to submit your answers?"} stateChanger1 = {prevSlide}></CustomCardEnd>
                            : index === current && (<CustomCard question = {question.question} points={question.points} stateChanger1 = {prevSlide} stateChanger2 = {nextSlide}></CustomCard>)}
                        </div>
                )})}     
            </div>
        </div>
    );
}

export default Carousel;