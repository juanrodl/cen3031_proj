import React, { useState } from 'react';
import Results from './Results';
import Carousel from './Carousel';
import { data } from '../data/data'
import { BrowserRouter as Router,Routes as Switch,Route,Link, useLocation} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Assessment } from '../data/assessment';
import "../css/TestPage.css";

function TestPage () {
    const [currIndex, setCurrIndex] = useState(1)
    const location = useLocation();
    const increment = () => {
        if (currIndex < assess.cardStates.length-1)
        {
            setCurrIndex(currIndex+1);
        }
    }
    const decrement = () => {
        if (currIndex > 1)
        {
            setCurrIndex(currIndex-1);
        }
        
    }
    var assess = new Assessment();
    console.log(assess);
    return (
        <TransitionGroup component = {null}>
            <CSSTransition key = {location.key} classNames = 'fade' timeout={400}>
                <div className = "enclosure">
                    <div className='questionCounter'> 
                        {currIndex} / {assess.cardStates.length -1}
                    </div>
                    <Switch location = {location}> 
                        <Route path = "results" element={<Results assessmentState={assess}></Results>} />
                        <Route path = "" element={<Carousel cards={data} assessmentState={assess} currIndex = {currIndex} increment = {increment} decrement = {decrement}></Carousel>} />
                    </Switch>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default TestPage;