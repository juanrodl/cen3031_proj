import React, {useEffect} from 'react';
import "../css/CustomCard.css";
import { Assessment } from '../data/assessment';

const CustomCard = (props) => {
    
    useEffect( () => { //Very complicated-looking line that just sets the checkmark on whatever dot the user clicked, removes it from all other dots
        const elements = (document.getElementsByName("check"));
        let index = props.assessmentState.getCardState(props.index);
        if (index < 7 && index > -1)
            {
                elements.item(index).classList.add('bigdot-checked');
            }
        elements.forEach(element => {
            element.addEventListener('click', (e)=> {
                if (!((e.target).classList.contains("bigdot-checked")))
                {   let target = e.target;
                    target.classList.add("bigdot-checked"); //add the class to the clicked element, which makes it permanently have the red thing on it.
                    elements.forEach(element2 => { //For each element that is not the currently checked element, uncheck them. If none are checked, this function does nothing for said element
                        element2 != target ? element2.classList.remove("bigdot-checked") : console.log("did nothing");
                    });
                }
            })
        });
    })

    return (
            <div className = 'custom-card' id = 'question-card'>
                <h2 className="question-custom p-3">{props.question}</h2>
                <hr className="custom-card-line"></hr>
                <div className = "coolCircles d-flex justify-content-between align-items-center">
                    <div className="disagree-label">Disagree 😎</div>
                    <div className = "circle-holder bigdot-extrafullydisagree d-flex align-items-center"><span name = "check" className = "bigdot" onClick ={() => props.stateChanger1(props.cat, '1', props.supports*(-10), props.index, 0)}></span></div>
                    <div className = "circle-holder bigdot-fullydisagree d-flex align-items-center"><span name = "check" className = "bigdot" onClick ={() => props.stateChanger1(props.cat, '1', props.supports*(-5), props.index, 1)}></span></div>
                    <div className = "circle-holder bigdot-disagree d-flex align-items-center"><span name = "check" className = "bigdot" onClick ={() => props.stateChanger1(props.cat, '1', props.supports*(-1), props.index, 2)}></span></div>
                    <div className = "circle-holder bigdot-neutral d-flex align-items-center"><span name = "check" className = "bigdot" onClick ={() => props.stateChanger1(props.cat, '1', props.supports*(0), props.index, 3)}></span></div>
                    <div className = "circle-holder bigdot-agree d-flex align-items-center"><span name = "check" className = "bigdot" onClick ={() =>props.stateChanger1(props.cat, '1', props.supports*(1), props.index, 4)}></span></div>
                    <div className = "circle-holder bigdot-fullyagree d-flex align-items-center"><span name = "check" className = "bigdot" onClick ={() => props.stateChanger1(props.cat, '1', props.supports*(5), props.index, 5)}></span></div>
                    <div className = "circle-holder bigdot-extrafullyagree d-flex align-items-center"><span name = "check" className = "bigdot" onClick ={() => props.stateChanger1(props.cat, '1', props.supports*(10), props.index, 6)}></span></div>
                    <div className="agree-label">Agree 😨</div>
                </div>
            </div>
    );
}

export default CustomCard;