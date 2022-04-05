import React from 'react';
import "../css/CustomCard.css";
import {Link} from "react-router-dom";
const CustomCard = ({question, stateChanger1}) => {
    
    return (
            <div className = 'custom-card' id = 'question-card'>
                <h2 className="question-custom p-3">{question}</h2>
                <hr className="custom-card-line"></hr>
                <div className = "coolCircles d-flex justify-content-center align-items-center">
                <Link to = "results" className='custom-card-link'><button className = "button btn-primary-custom">Yes! 😨😨🤯🤯😩</button></Link>
                </div>
            </div>
    );
}

export default CustomCard;