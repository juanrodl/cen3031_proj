import React from 'react';
import Results from './Results';
import Carousel from './Carousel';
import { data } from '../data/data'
import { BrowserRouter as Router,Routes as Switch,Route,Link, useLocation} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Assessment } from '../data/assessment';
import "../css/TestPage.css";

function TestPage () {
    const location = useLocation();
    var assess = new Assessment();
    console.log(assess);
    return (
        <TransitionGroup component = {null}>
            <CSSTransition key = {location.key} classNames = 'fade' timeout={400}>
                <div className = "enclosure">
                    <Switch location = {location}> 
                        <Route path = "results" element={<Results assessmentState={assess}></Results>} />
                        <Route path = "" element={<Carousel cards={data} assessmentState={assess}></Carousel>} />
                    </Switch>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default TestPage;