import React from 'react';

const CustomCard = ({question, points, stateChanger1, stateChanger2}) => {
    
    return (
            <div className = 'custom-card'>
                <h2 className="question-custom p-3">{question}</h2>
                <hr className="custom-card-line"></hr>
                <div className = "coolCircles d-flex justify-content-between align-items-center">
                    <div className="disagree-label">Disagree 😎</div>
                    <div className = "circle-holder bigdot-extrafullydisagree d-flex align-items-center"><span className = "bigdot" onClick ={() => stateChanger1()}></span></div>
                    <div className = "circle-holder bigdot-fullydisagree d-flex align-items-center"><span className = "bigdot" onClick ={() => stateChanger1()}></span></div>
                    <div className = "circle-holder bigdot-disagree d-flex align-items-center"><span className = "bigdot" onClick ={() => stateChanger1()}></span></div>
                    <div className = "circle-holder bigdot-neutral d-flex align-items-center"><span className = "bigdot"></span></div>
                    <div className = "circle-holder bigdot-agree d-flex align-items-center"><span className = "bigdot" onClick ={() => stateChanger2()}></span></div>
                    <div className = "circle-holder bigdot-fullyagree d-flex align-items-center"><span className = "bigdot" onClick ={() => stateChanger2()}></span></div>
                    <div className = "circle-holder bigdot-extrafullyagree d-flex align-items-center"><span className = "bigdot" onClick ={() => stateChanger2()}></span></div>
                    <div className="agree-label">Agree 😨</div>
                </div>
            </div>
    );
}

export default CustomCard;