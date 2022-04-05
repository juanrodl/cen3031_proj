import React, {useEffect, useState} from 'react';
import {Assessment} from '../data/assessment';
import CustomCardEnd from './CustomCardEnd';
import { data } from '../data/data';
import CustomCard from './CustomCard';
import '../css/Carousel.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'
const Carousel = ({cards, assessmentState}) => {
    const [current, setCurrent] = useState(0)
    const length = cards.length;
    const placeHolderFunction = () => {
        console.log("just for debugging!");
    }
    const nextSlide = () => {
        setCurrent(current === length-1 ? current : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? current : current -1);
    };
    
    //Here, I'll have all of the functions related to the assessment handling.
    //gonna create a javadoc for this one cuz this one HELLA complicated oh my lawd
    const updateAssessment = (cat, q_type, value, index, dot_index) => {
        assessmentState.allocatePoints(cat, q_type,value, index);
        assessmentState.onChange();
        assessmentState.setCardState(index, dot_index);
        console.log(assessmentState);
    }

    if(!Array.isArray(cards) || cards.length <= 0) {
        return null;
    }
    return (
        <div className='container-fluid d-flex flex-column justify-content-center'>
            <div className='Carousel'>
                <div className = "col-xs-2 align-content-center justify-content-center" onClick = {prevSlide}>
                <FontAwesomeIcon className = "carousel-chevron" icon={Icons.faChevronLeft}/>
                </div>
                {cards.map((question, index) => {
                    return ( 
                        <div className = {index === current ? 'cardc active' : 'cardc'} key={index}>
                            {index === current && question.type === -1 ? <CustomCardEnd question = {"Would you like to submit your answers?"} stateChanger1 = {placeHolderFunction}></CustomCardEnd>
                            : index === current && question.type === 1 ? (<CustomCard assessmentState = {assessmentState} question = {question.question} supports = {question.supports} cat = {question.cat} index = {index} stateChanger1 = {updateAssessment}></CustomCard>)
                            : index === current && question.type === 2 ? <h1>This should be a slider card</h1>
                            : index === current && question.type === 3 ? <h1>This should be a yes/no card</h1>
                            : false && <h1></h1>
                            }
                        </div>
                            )
                        }
                    )}
                <div className = "col-xs-2 align-content-center justify-content-center" onClick = {nextSlide}>
                <FontAwesomeIcon className = "carousel-chevron" icon={Icons.faChevronRight}/>
                </div>     
            </div>
        </div>
    );
}

export default Carousel;