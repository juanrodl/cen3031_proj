import { toStatePaths } from "xstate/lib/utils";
import {data} from "./data.js";
import BusinessPic from '../img/business.jpg'
import ArtsPic from '../img/arts.jpg'
import EconomicsPic from '../img/economics.jpg'
import EnglishPic from '../img/english.jpg'
import HumanitiesPic from '../img/humanities.jpg'
import LawPic from '../img/law.jpg'
import MedicinePic from '../img/medicine.jpg'
import PoliPic from '../img/poliscience.png'
import PsychologyPic from '../img/psychology.jpg'
import SciencePic from '../img/science.jpg'
import { sendTo } from "xstate/lib/actions";
/*
 * @Class
 * Represents the assessment as seen from the front-end. Handles sessionstorage allocations as well as how
 * front-end components understand and keep track of the assessment.
 * 
 */
export class Assessment {
    /**
     * @constructor
     * Creates an assessment instance in one of two ways
     * If the sessionStorage of the user's browser contains a value for the 'assessment' key, the constructor
     * pulls this key and instantiates itself and its variables with this key.
     * Otherwise, the assessment object instantiates itself using default values, which would include empty maps for all
     * majors, a currIndex of 0, and a default cardState array (by default, cardState array has 7 as the value for all indices)
     */
    constructor()
    {   this.prevAssessment = null;
        if (sessionStorage.getItem('assessment')) //SesssionStorage can only store key-value pairs of string to string. Therefore, the object that we receive will be a stringified json that we turn into JSON
            this.prevAssessment = JSON.parse(sessionStorage.getItem('assessment'));
            console.log(this.prevAssessment);
        this.Psy = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Psy)) : new Map());
        this.Art = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Art)) : new Map()); //
        this.Hum = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Hum)) : new Map()); // These statements refer to each of the 5 personality trait categories. If a previous session existed prior to page reload,
        this.Eng = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Eng)) : new Map()); // these are set to the values contained in the previous session. Otherwise, we set the values to 0 if there was no page session
        this.Law = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Law)) : new Map()); // or the assessment was restarted
        this.Sci = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Sci)) : new Map());
        this.Eco = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Eco)) : new Map());
        this.Bus = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Bus)) : new Map());
        this.Pol = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Pol)) : new Map());
        this.Med = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Med)) : new Map());

        this.currIndex = (this.prevAssessment ? this.prevAssessment.currIndex : 0); //currIndex keeps track of the user's current question during the test session

        this.cardStates = (this.prevAssessment ? this.prevAssessment.cardStates : new Array(data.length).fill(-1)); //Pretty sure {data} is an array of objects, so .length works fine
        //Default values for all financial questions is =1, feel free to change to anything like NaN or null. Whatever suits you best :)
        this.FA = this.prevAssessment ? this.prevAssessment.FA : -1;
        this.PA = this.prevAssessment ? this.prevAssessment.PA : -1;
        this.SCH = this.prevAssessment ? this.prevAssessment.SCH : -1;
        this.L = this.prevAssessment ? this.prevAssessment.L : -1;
        this.S = this.prevAssessment ? this.prevAssessment.S : -1;
    };
    
    /**
     * allocates points to a set of majors based on the question and the answer to the question
     * @param {string} category Corresponds to the type of personality trait the question concerns
     * @param {string} q_type The question type, which matters for how points are allocated
     * @param {integer} value The point value that will be allocated/subtracted from the majors the question corresponds with.
     * @param {integer} index The index, from 0 to cards.length of the CustomCard component that this function was called from.
     * @note the index serves the purpose of assuring that no question allocates/deallocates points twice. each index can only have one value of points allocated by it.
     */
    allocatePoints = (category, q_type, value, index) => {
        if (q_type == '1')
        {
            try {this.set(category, value, index)}
            catch(err) {console.log(err)}
        } //They tell me stop eval-maxxing but I dont want to https://i.imgur.com/VIZwvjv.png
        else if (q_type == 2);
        {
            switch (category) {
                case 'FinancialAid':
                    this.FA = value;
                    break;
                case 'ParentalAid':
                    this.PA = value;
                    break;
                case 'Scholarships':
                    this.SCH = value;
                    break;
                case 'Loan':
                    this.L = value;
                    break;  
                case 'Salary':
                    this.S = value;
                    break;
            }
        }//Do something else for slider. like if (value) > 70,000 (if debt is greater than 70,000) doSomething();

    };
    /**
     * Converts a map to an object
     * @param {Map} m 
     * @returns {Object} 
     */
    //Obtained from StackOverflow https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map#:~:text=You%20can't.,impossible%20in%20a%20general%20case.
    mapToObj = m => {
        return Array.from(m).reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {});
    };
    /**
     * 
     * 
     */
    getFinancials = (aidType) =>{
        switch (aidType) {
            case 'FinancialAid':
                return this.FA;
                break;
            case 'ParentalAid':
                return this.PA;
                break;
            case 'Scholarships':
                return this.SCH;
                break;
            case 'Loan':
                return this.L
                break;  
            case 'Salary':
                return this.S;
                break;
        }
    }
    
/**
 * Is meant to override the stringify method.
 * @returns {string} literally does not work
 * @deprecated because it literally does not work
 */
    toStringify = () => {
        return JSON.stringify({
            Psy: JSON.stringify(this.mapToObj(this.Psy)),
            Art: JSON.stringify(this.mapToObj(this.Art)),
            Hum: JSON.stringify(this.mapToObj(this.Hum)),
            Eng: JSON.stringify(this.mapToObj(this.Eng)),
            Law: JSON.stringify(this.mapToObj(this.Law)),
            Sci: JSON.stringify(this.mapToObj(this.Sci)),
            Eco: JSON.stringify(this.mapToObj(this.Eco)),
            Bus: JSON.stringify(this.mapToObj(this.Bus)),
            Pol: JSON.stringify(this.mapToObj(this.Pol)),
            Med: JSON.stringify(this.mapToObj(this.Med)),
            
            currIndex: this.currIndex,
            cardStates: this.cardStates
        });
    };
    //
    
    /**
     * deletes sessionStorage data and returns an entirely new assessment object
     * @returns a new assessment that would essentially replace the previous one in the case that it were needed.
     * @note Most likely would be called if the user requests to re-begin the assessment.
     */
    assessmentErase = () => { 
        //Erase the instance of the assessment present in the sessionStorage. if it is present
        sessionStorage.removeItem('assessment');
        return new Assessment();
    };


    /**
     * Is meant to be called whenever a change has been made to the assessment object. Primarily informs sessionStorage of the changes.
     * @note usually called by the component on which the change was made, likely off of some event listener in a react hook.
     */
    onChange = () => {
        //Run this command whenever a change has been made to the assessment object. For instance, if points were allocated or deallocated from any categories
        this.prevAssessment = null;
        this.Psy = this.mapToObj(this.Psy);
        this.Art = this.mapToObj(this.Art);
        this.Hum = this.mapToObj(this.Hum);
        this.Eng = this.mapToObj(this.Eng);
        this.Law = this.mapToObj(this.Law);
        this.Sci = this.mapToObj(this.Sci);
        this.Eco = this.mapToObj(this.Eco);
        this.Bus = this.mapToObj(this.Bus);
        this.Pol = this.mapToObj(this.Pol);
        this.Med = this.mapToObj(this.Med);
        sessionStorage.setItem('assessment', JSON.stringify(this));
        this.Psy = new Map(Object.entries(this.Psy));
        this.Art = new Map(Object.entries(this.Art));
        this.Hum = new Map(Object.entries(this.Hum));
        this.Eng = new Map(Object.entries(this.Eng));
        this.Law = new Map(Object.entries(this.Law));
        this.Sci = new Map(Object.entries(this.Sci));
        this.Eco = new Map(Object.entries(this.Eco));
        this.Bus = new Map(Object.entries(this.Bus));
        this.Pol = new Map(Object.entries(this.Pol));
        this.Med = new Map(Object.entries(this.Med));
    };
    /**
     * Helper function to the allocatePoints method. Manages the switch statements that handle updating the Map object that stores points
     * @param {string} category Denotes the personality trait these points are related to
     * @param {integer} value The point value that will be allocated/subtracted from the majors the question corresponds with.
     * @param {integer} index The index, from 0 to cards.length of the CustomCard component that this function was called from.
     */
    set = (category, value, index) => {
        switch(category) {
            case 'N':
                (this.Psy).set((index), (value));
                (this.Art).set((index), (value)); 
                (this.Hum).set((index), (value)); 
                (this.Eng).set((index), (0.50 * value));
                (this.Law).set((index), (0.50 * value));
                (this.Sci).set((index), (0.50 * value));
                (this.Eco).set((index), (0.25 * value));
                (this.Bus).set((index), (0.25 * value));
                break;
            case 'E': 
                (this.Eco).set((index), (value));
                (this.Law).set((index), (value));
                (this.Pol).set((index), (value));
                (this.Med).set((index), (value));
                (this.Art).set((index), (0.50 * value));
                (this.Hum).set((index), (0.50 * value));
                (this.Sci).set((index), (0.50 * value));
                break;
            case 'O':
                (this.Hum).set((index), (value));
                (this.Art).set((index), (value));
                (this.Psy).set((index), (value));
                (this.Pol).set((index), (value));
                (this.Eco).set((index), (0.50 * value));
                (this.Eng).set((index), (0.50 * value));
                (this.Law).set((index), (0.50 * value));
                (this.Sci).set((index), (0.50 * value));
                break;
            case 'A':
                (this.Med).set((index), (value));
                (this.Psy).set((index), (value));
                (this.Art).set((index), (value));
                (this.Hum).set((index), (value));
                (this.Sci).set((index), (value));

                (this.Law).set((index), (0.50 * value));
                (this.Bus).set((index), (0.50 * value));
                (this.Eco).set((index), (0.50 * value));
                break;    
            case 'C':
                (this.Sci).set((index), (value));
                (this.Law).set((index), (value));
                (this.Eco).set((index), (value));
                (this.Eng).set((index), (value));
                (this.Med).set((index), (value));
                (this.Psy).set((index), (value));
                
                (this.Art).set((index), (0.50 * value));
                (this.Hum).set((index), (0.50 * value));
                break;   
            default:
                throw 'Input was invalid!';
        }
    }

    /**
     * Function used by the Card Components when rendering to webpage. Helps figure out whether the card's question has been answered
     * @param {integer} index refers to the index of the questiion card we are getting the state for
     * @returns {integer} an index value, from 0 to 6, that corresponds to the dot/option (from left to right) that was selected as the answer
     */
    getCardState = (index) => { //Function used by cards on page reload to remember what option was checked
        return this.cardStates[index]
    }
    /**
     * Function used by the Card Components when rendering to webpage. Helps figure out whether the card's question has been answered
     * @param {integer} index refers to the index of the questiion card we are setting the state for
     * @param {integer} selection an index value, from 0 to 6, that corresponds to the dot/option (from left to right) that was selected as the answer
     */
    setCardState = (index, selection) =>  {
        this.cardStates[index] = selection;
    }

    /**
     * Function used for obtaining the name (string) of the major that received the most points after the assessment is finalized
     * @param {Object} resultsObj Object containing the total point values for all majors
     * @returns {string} the name of the major that was calculated as most ideal for the user
     * @note This function is mainly a helper function for the getTotalPoints() function. Limited usecase outside of it.
     * @also if you want the max value major, just use getTotalPoints().MAX, that should give you the major
     */
    getMax = (resultsObj) => {
        let values = Object.values(resultsObj);
        const index = values.indexOf(Math.max(...values));
        switch(index) {
            case 0:
                return "Psychology";
                break;
            case 1:
                return "Arts";
                break;
            case 2:
                return "Humanity";
                break;
            case 3:
                return "Engineering";
                break;
            case 4:
                return "Law";
                break;
            case 5:
                return "Science";
                break;
            case 6:
                return "Economics"
                break;
            case 7:
                return "Business"
                break;
            case 8:
                return "Poli. Science"
                break;
            case 9:
                return "Medicine"
                break;

        }
    }

    setIndv = (category, value, index) => {
        switch(category) {
            case 1 :
                (this.Psy).set((index), (value));
                break;
            case 2 :
                (this.Art).set((index), (value));
                break;
            case 3 :
                (this.Hum).set((index), (value));
                break;
            case 4 :
                (this.Eng).set((index), (value));
                break;
            case 5 :
                (this.Law).set((index), (value));
                break;
            case 6 :
                (this.Sci).set((index), (value));
                break; 
            case 7 :
                (this.Eco).set((index), (value));
                break;
            case 8 :
                (this.Bus).set((index), (value));
                break;
            case 9 :
                (this.Pol).set((index), (value));
                break;
            case 10 :
                (this.Med).set((index), (value));
                break;
        }
    }

    /**
     * Returns a JavaScript Object with majors and their total points, and the name of the major that won
     * @returns {Object} an Object containing point values for each major, as well as the name of the major with the maximum amount
     * of points
     */
    getTotalPoints = () => {
        let resultsObj = {
            Psy: 0,
            Art: 0,
            Hum: 0,
            Eng: 0,
            Law: 0,
            Sci: 0,
            Eco: 0,
            Bus: 0,
            Pol: 0,
            Med: 0,
            MAX: 0
        };
        (this.Psy).forEach((value) => {
            resultsObj.Psy += value
        });
        (this.Art).forEach((value) => {
            resultsObj.Art += value
        });
        (this.Hum).forEach((value) => {
            resultsObj.Hum += value
        });
        (this.Eng).forEach((value) => {
            resultsObj.Eng += value
        });
        (this.Law).forEach((value) => {
            resultsObj.Law += value
        });
        (this.Sci).forEach((value) => {
            resultsObj.Sci += value
        });
        (this.Eco).forEach((value) => {
            resultsObj.Eco += value
        });
        (this.Bus).forEach((value) => {
            resultsObj.Bus += value
        });
        (this.Pol).forEach((value) => {
            resultsObj.Pol += value
        });
        (this.Med).forEach((value) => {
            resultsObj.Med += value
        });
        resultsObj.MAX = this.getMax(resultsObj);
        //console.log(resultsObj.MAX);
        return resultsObj;
    }

    getTotalFinancials = () =>{ 
        // i want to call this function when the assessment is submitted         
        let total = 0         
        total += this.getFinancials("FinancialAid");         
        total += this.getFinancials("ParentalAid");         
        total += this.getFinancials("Scholarships");         
        total += this.getFinancials("Loan");         
        total += this.getFinancials("Salary");       
        if(total >= -20000 && total < 0){             
            this.setIndv(1,-5,20); //Psy             
            this.setIndv(2,15,21);             
            this.setIndv(3,15,22);             
            this.setIndv(4,10,23);             
            this.setIndv(5,-5,24);//Law             
            this.setIndv(6,15,25);             
            this.setIndv(7,10,26);             
            this.setIndv(8,-5,27);             
            this.setIndv(9,10,28);             
            this.setIndv(10,-5,29);         
        }         
        else if(total <= -20000 && total >= -70000){             
            this.setIndv(1,-10,20); //Psy             
            this.setIndv(2,10,21);             
            this.setIndv(3,10,22);            
            this.setIndv(4,5,23);            
            this.setIndv(5,-10,24);//Law
            this.setIndv(6,10,25);
            this.setIndv(7,5,26);
            this.setIndv(8,-10,27);
            this.setIndv(9,5,28);
            this.setIndv(10,-10,29);
        }
        else if(total < -70000){
            this.setIndv(1,-15,20); //Psy
            this.setIndv(2,5,21);
            this.setIndv(3,5,22);
            this.setIndv(4,0,23);
            this.setIndv(5,-15,24);//Law
            this.setIndv(6,5,25);
            this.setIndv(7,0,26);
            this.setIndv(8,-15,27);
            this.setIndv(9,0,28);
            this.setIndv(10,-15,29);
        }
        else if(total >= 0 && total <= 20000){
            this.setIndv(1,5,20); //Psy
            this.setIndv(2,-5,21);
            this.setIndv(3,-5,22);
            this.setIndv(4,0,23);
            this.setIndv(5,5,24);//Law
            this.setIndv(6,-5,25);
            this.setIndv(7,0,26);
            this.setIndv(8,5,27);
            this.setIndv(9,0,28);
            this.setIndv(10,5,29);
        }
        else if(total > 20000 && total <= 50000){
            this.setIndv(1,10,20); //Psy
            this.setIndv(2,0,21);
            this.setIndv(3,0,22);
            this.setIndv(4,5,23);
            this.setIndv(5,10,24);//Law
            this.setIndv(6,0,25);
            this.setIndv(7,5,26);
            this.setIndv(8,10,27);
            this.setIndv(9,5,28);
            this.setIndv(10,10,29);
        }
        else if(total > 50000){
            this.setIndv(1,15,20); //Psy
            this.setIndv(2,5,21);
            this.setIndv(3,5,22);
            this.setIndv(4,10,23);
            this.setIndv(5,15,24);//Law
            this.setIndv(6,5,25);
            this.setIndv(7,10,26);
            this.setIndv(8,15,27);
            this.setIndv(9,10,28);
            this.setIndv(10,15,29);
        }
    }

    getSortedMajors = () => {
        let resultsObj = this.getTotalPoints();
        let values = Object.values(resultsObj);
        let keys = Object.keys(resultsObj);
        let secondaryMajors = [];
        let data = [
            { name: 'Psychology', value: resultsObj.Psy },
            { name: 'Arts', value: resultsObj.Art },
            { name: 'Humanities', value: resultsObj.Hum },
            { name: 'Engineering', value: resultsObj.Eng },
            { name: 'Law', value: resultsObj.Law },
            { name: 'Science', value: resultsObj.Sci },
            { name: 'Economics', value: resultsObj.Eco },
            { name: 'Business', value: resultsObj.Bus },
            { name: 'Poli. Science', value: resultsObj.Pol },
            { name: 'Medicine', value: resultsObj.Med }
        ]

        data.sort(this.customCompare).reverse();
        //values.sort();
        for (var i = 0; secondaryMajors.length <= 3; i++)
        {
            if (data.at(i).name !== resultsObj.MAX)
            {
                secondaryMajors.push(data.at(i).name);
            }
            else
            {
                console.log('was equal');
                //i--;
            }

            //if (secondaryMajors.length == 3) break;
        }
        console.log(data);
        console.log(secondaryMajors);
        return secondaryMajors;
    }

    customCompare = (a,b) => {
        return a.value - b.value;
    }

    getMajorRelatedPic = (resultsObj) => {
        let relatedImages = {
            Psy: PsychologyPic,
            Art: ArtsPic,
            Hum: HumanitiesPic,
            Eng: EnglishPic,
            Law: LawPic,
            Sci: SciencePic,
            Eco: EconomicsPic,
            Bus: BusinessPic,
            Pol: PoliPic,
            Med: MedicinePic,
            MAX: ''
        };

        //let resultsObj = this.getTotalPoints();
        console.log(resultsObj);
        let major = resultsObj.MAX;
        //console.log(major);
        if (major === "Psychology") { relatedImages.MAX = relatedImages.Psy; }
        else if (major === "Arts") { relatedImages.MAX = relatedImages.Art; }
        else if (major === "Humanity") { relatedImages.MAX = relatedImages.Hum; }
        else if (major === "Engineering") { relatedImages.MAX = relatedImages.Eng; }
        else if (major ==="Law") { relatedImages.MAX = relatedImages.Law; }
        else if (major === "Science") { relatedImages.MAX = relatedImages.Sci; }
        else if (major === "Economics") { relatedImages.MAX = relatedImages.Eco; }
        else if (major === "Business") { relatedImages.MAX = relatedImages.Bus; }
        else if (major === "Poli. Science") { relatedImages.MAX = relatedImages.Pol; }
        else if (major === "Medicine") { relatedImages.MAX = relatedImages.Med; }
        //else { relatedImages.MAX = relatedImages.Psy; }

        return relatedImages;
    }
};
