import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'
import "../css/Results.css";
function Results ({assessmentState}) {
    const test_results = assessmentState.getTotalPoints();
    assessmentState = assessmentState.assessmentErase();
    useEffect(() => {
        window.addEventListener('beforeunload', alertUser)
        window.addEventListener('unload', handleEnd)
        return () => {
            window.removeEventListener('beforeunload', alertUser)
            window.removeEventListener('unload', handleEnd)
        }
      }, [])
      const alertUser = e => {
        e.preventDefault()
        e.returnValue = ''
      }
      const handleEnd = () => {
          assessmentState = assessmentState.assessmentErase();
      }
    return (
        <div className='Results d-flex justify-content-center'>
                <div className = 'd-flex flex-row justify-content-center m-5 results-box'>
                        <div className = "custom-col-flex align-items-center">
                            <div className = 'lesser-lead'>Your best fit major is:</div>
                                <div className = 'results-header'>{test_results.MAX}</div> {/*This is where we would place our JS variable for major*/}
                            <img className = 'results-image' src = 'https://i.imgur.com/d1NHftJ.jpeg' width = "300vw" height = "300vw"></img>
                        </div>
                        <div className = "custom-col-flex">
                            <div className = 'greater-lead m-2'>Other majors you may find interesting</div>
                            <ul className = "list-group list-group-flush custom-list-group m-3">
                                <li className = "list-group-item">(2nd best fit major)</li> {/*Likewise, this is also where js variables would be placed*/}
                                <li className = "list-group-item">(3rd best fit major)</li>
                                <li className = "list-group-item">(4th best fit major)</li>
                            </ul>
                            <div className = 'lesser-lead m-2'>We found that your interests also aligned with these majors so we listed them out for you as options</div>
                            <button className = "btn-save-results" href = "">Save Results?</button>
                            <div className = 'd-flex flex-column align-items-center m-3 results-share'>
                                <header className = 'lesser-lead'>Share To:</header>
                                <ul className = 'social-media-list'>
                                    <a><li><FontAwesomeIcon icon={Icons.faCake}/></li></a>
                                    <a><li><FontAwesomeIcon icon={Icons.faHeart}/></li></a>
                                    <a><li><FontAwesomeIcon icon={Icons.faBook}/></li></a>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className = 'd-flex flex-column justify-content-center m-5 results-box'>
                    <div className = "d-flex flex-row justify-content-center cat-values">Psychology: {test_results.Psy}</div>
                    <div className = "d-flex flex-row justify-content-center cat-values">Arts: {test_results.Art}</div>
                    <div className = "d-flex flex-row justify-content-center cat-values">Humanities: {test_results.Hum}</div>
                    <div className = "d-flex flex-row justify-content-center cat-values">Engineering: {test_results.Eng}</div>
                    <div className = "d-flex flex-row justify-content-center cat-values">Law: {test_results.Law}</div>
                    <div className = "d-flex flex-row justify-content-center cat-values">Science: {test_results.Sci}</div>
                    <div className = "d-flex flex-row justify-content-center cat-values">Economics: {test_results.Eco}</div>
                    <div className = "d-flex flex-row justify-content-center cat-values">Business: {test_results.Bus}</div>
                    <div className = "d-flex flex-row justify-content-center cat-values">Poli. Sci: {test_results.Pol}</div>
                    <div className = "d-flex flex-row justify-content-center cat-values">Medicine: {test_results.Med}</div>
                </div>
        </div>
    );
}

export default Results;