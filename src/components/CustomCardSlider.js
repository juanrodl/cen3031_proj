import { faBalanceScaleLeft } from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
import "../css/CustomCard.css";
import { Assessment } from '../data/assessment';

const CustomCardSlider = (props) => {
    
    let FA = props.assessmentState.getFinancialAid();
    let max_val = props.max_val && props.max_val ? props.max_val: 100000;
    let min_val = props.min_val && props.min_val ? props.min_val: 0;
    let question = props.question && props.question ? props.question: "How much MONEY do you need BRO";
    let [value, setValue] = useState(FA >= 0 ? FA : 0);
    let handleAssessment = (e) => {
        let submit_button = document.getElementsByClassName('lock-answer-range')[0];
        submit_button = document.getElementsByClassName('lock-answer-range')[0]
        if (submit_button.disabled == false)
        {
            props.stateChanger1(props.cat, '2', roundThousands(value), props.index, value);
            submit_button.setAttribute('disabled', '');
            submit_button.innerHTML = "Submitted!"
        }
    }

    //Just a display method.
    let roundThousands = (num) => {
        return 1000*Math.trunc(num/1000);
    }
    useEffect(() => {
        let submit_button = document.getElementsByClassName('lock-answer-range')[0];
        submit_button.disabled = (FA >= 0 ? true : false);
        submit_button.innerHTML = (FA >= 0 ? "Submitted!" : "Submit Answer")
        document.getElementById('answer-range').addEventListener('change', (e) => {
            document.getElementsByClassName('lock-answer-range')[0].removeAttribute('disabled');
            document.getElementsByClassName('lock-answer-range')[0].innerHTML = "Submit Answer";
        });
    });

    return (
            <div className = 'custom-card d-flex flex-column' id = 'question-card'>
                <section className = "custom-card-question-section">
                    <h2 className="question-custom p-4">{question}</h2>
                    <div className = "question-range d-inline justify-content-center align-items-center">
                        <h1 className="d-inline display-3 display-3-custom">&lt;= ${roundThousands(value)}</h1>
                    </div>
                </section>
                <hr className="custom-card-line"></hr>
                <div className = "coolSlider">
                    <div className="slider-container">
                        <label htmlFor="#answer-range" className="d-inline range-min-label"> min </label><input type="range" className="custom-slider" id = "answer-range" min = {min_val} max = {max_val} value = {value} onChange={(e) => {setValue(e.target.value)}}></input> <label htmlFor="#answer-range" className="range-max-label"> max </label>
                    </div>
                </div>
                <button type="button" className="lock-answer-range" aria-details="this thing is what submits the changes to the assessment" onClick={handleAssessment}>Submit Range</button>
            </div>
    );
}

export default CustomCardSlider;