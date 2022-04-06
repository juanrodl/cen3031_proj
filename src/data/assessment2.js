import {data} from "./data.js";
export class Assessment {
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
        this.Eng = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Eng)) : new Map());
        this.Sci = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Sci)) : new Map());
        this.Eco = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Eco)) : new Map());
        this.Bus = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Bus)) : new Map());
        this.Pol = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Pol)) : new Map());
        this.Med = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.Med)) : new Map());

        this.currIndex = (this.prevAssessment ? this.prevAssessment.currIndex : 0); //currIndex keeps track of the user's current question during the test session

        this.cardStates = (this.prevAssessment ? this.prevAssessment.cardStates : new Array(data.length).fill(7)); //Pretty sure {data} is an array of objects, so .length works fine
    };
    
    allocatePoints = (category, q_type, value, index) => {
        if (q_type == '1')
        {
            try {this.set(category, value, index)}
            catch(err) {console.log(err)}
        } //They tell me stop eval-maxxing but I dont want to https://i.imgur.com/VIZwvjv.png
        else if (q_type == 2);
         //Do something else for slider. like if (value) > 70,000 (if debt is greater than 70,000) doSomething();
        else;
    };
    //Obtained from StackOverflow https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map#:~:text=You%20can't.,impossible%20in%20a%20general%20case.
    mapToObj = m => {
        return Array.from(m).reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {});
    };

    toStringify = () => {
        return JSON.stringify({
            Psy: JSON.stringify(this.mapToObj(this.Psy)),
            Art: JSON.stringify(this.mapToObj(this.Art)),
            Hum: JSON.stringify(this.mapToObj(this.Hum)),
            Eng: JSON.stringify(this.mapToObj(this.Eng)),
            Law: JSON.stringify(this.mapToObj(this.Law)),
            Eng: JSON.stringify(this.mapToObj(this.Eng)),
            Sci: JSON.stringify(this.mapToObj(this.Sci)),
            Eco: JSON.stringify(this.mapToObj(this.Eco)),
            Bus: JSON.stringify(this.mapToObj(this.Bus)),
            Pol: JSON.stringify(this.mapToObj(this.Pol)),
            Med: JSON.stringify(this.mapToObj(this.Med)),
            
            currIndex: this.currIndex,
            cardStates: this.cardStates
        });
    };
    //deletes sessionStorage data and returns an entirely new assessment object
    assessmentErase = () => { 
        //Erase the instance of the assessment present in the sessionStorage. if it is present
        sessionStorage.removeItem('assessment');
        return new Assessment();
    };
    
    onChange = () => {
        //Run this command whenever a change has been made to the assessment object. For instance, if points were allocated or deallocated from any categories
        this.prevAssessment = null;
        this.Psy = this.mapToObj(this.Psy);
        this.Art = this.mapToObj(this.Art);
        this.Hum = this.mapToObj(this.Hum);
        this.Eng = this.mapToObj(this.Eng);
        this.Law = this.mapToObj(this.Law);
        this.Eng = this.mapToObj(this.Eng);
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
        this.Eng = new Map(Object.entries(this.Eng));
        this.Sci = new Map(Object.entries(this.Sci));
        this.Eco = new Map(Object.entries(this.Eco));
        this.Bus = new Map(Object.entries(this.Bus));
        this.Pol = new Map(Object.entries(this.Pol));
        this.Med = new Map(Object.entries(this.Med));
    };

    set = (category, value, index) => {
        switch(category) {
            case 'N':
                (this.N).set((index), (value)); 
                break;
            case 'E': 
                (this.E).set((index), (value));
                break;
            case 'O':
                (this.O).set((index), (value));
                break;
            case 'A':
                (this.A).set((index), (value));
                break;    
            case 'C':
                (this.C).set((index), (value));
                break;   
            default:
                throw 'Input was invalid!';
        }
    }
    getCardState = (index) => { //Function used by cards on page reload to remember what option was checked
        return this.cardStates[index]
    }
    setCardState = (index, selection) =>  {
        this.cardStates[index] = selection;
    }
    getTotalPoints = () => {
        let resultsObj = {
            Psy: 0,
            Art: 0,
            Hum: 0,
            Eng: 0,
            Law: 0,
            Eng: 0,
            Sci: 0,
            Eco: 0,
            Bus: 0,
            Pol: 0,
            Med: 0
        };
        (this.N).forEach((value) => {
            resultsObj.N += value
        });
        (this.E).forEach((value) => {
            resultsObj.E += value
        });
        (this.O).forEach((value) => {
            resultsObj.O += value
        });
        (this.A).forEach((value) => {
            resultsObj.A += value
        });
        (this.C).forEach((value) => {
            resultsObj.C += value
        });
        return resultsObj;
    }
};
