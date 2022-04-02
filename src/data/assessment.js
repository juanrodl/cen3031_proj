import {data} from "./data.js";
export class Assessment {
    constructor()
    {   this.prevAssessment = null;
        if (sessionStorage.getItem('assessment')) //SesssionStorage can only store key-value pairs of string to string. Therefore, the object that we receive will be a stringified json that we turn into JSON
            this.prevAssessment = JSON.parse(sessionStorage.getItem('assessment'));
            console.log(this.prevAssessment);
        this.N = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.N)) : new Map());
        this.E = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.E)) : new Map()); //
        this.O = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.O)) : new Map()); // These statements refer to each of the 5 personality trait categories. If a previous session existed prior to page reload,
        this.A = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.A)) : new Map()); // these are set to the values contained in the previous session. Otherwise, we set the values to 0 if there was no page session
        this.C = (this.prevAssessment ? new Map(Object.entries(this.prevAssessment.C)) : new Map()); // or the assessment was restarted

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
            N: JSON.stringify(this.mapToObj(this.N)),
            E: JSON.stringify(this.mapToObj(this.E)),
            O: JSON.stringify(this.mapToObj(this.O)),
            A: JSON.stringify(this.mapToObj(this.A)),
            C: JSON.stringify(this.mapToObj(this.C)),
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
        this.N = this.mapToObj(this.N);
        this.E = this.mapToObj(this.E);
        this.O = this.mapToObj(this.O);
        this.A = this.mapToObj(this.A);
        this.C = this.mapToObj(this.C);
        sessionStorage.setItem('assessment', JSON.stringify(this));
        this.N = new Map(Object.entries(this.N));
        this.E = new Map(Object.entries(this.E));
        this.O = new Map(Object.entries(this.O));
        this.A = new Map(Object.entries(this.A));
        this.C = new Map(Object.entries(this.C));
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
            N: 0,
            E: 0,
            O: 0,
            A: 0,
            C: 0
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
