import { Assessment } from '../data/assessment';
import { render, screen } from '@testing-library/react';

test('Simple test for setting individual', () => {
   let vars = new Assessment
   var questionn = 0
   questionn = indvaddointsto(vars, 50, 1, questionn);
   //expect(vars.getTotalPoints()).toBe(50)
   expect(vars.getTotalPoints().MAX).toBe("Psychology")
  });

  test('Simple test for setting multiple', () => { 
   let vars = new Assessment
   var questionn = 0
   questionn = addpointsto(vars, 50, 'N', questionn);
   //expect(vars.getTotalPoints()).toBe(50)
   expect(vars.getTotalPoints().MAX).toBe("Psychology")
  });

  test('Simple test for finacials', () => { 
   let vars = new Assessment
   var questionn = 0
   questionn = vars.allocatePoints("FinancialAid", 2, 20, questionn);
   questionn = indvaddointsto(vars,5,5,questionn)
   expect(vars.getTotalPoints().MAX).toBe("Law")
  });

  test('Simple test for negative finacials', () => { 
   let vars = new Assessment
   var questionn = 0
   questionn = vars.allocatePoints("Loan", 2, 20000, questionn);
   questionn = indvaddointsto(vars,5,2,questionn)
   expect(vars.getTotalPoints().MAX).toBe("Arts")
  });

  test('Simple test using all of finacials', () => { 
   let vars = new Assessment
   var questionn = 0
   questionn = vars.allocatePoints("FinancialAid", 2, 20000, questionn);
   questionn = vars.allocatePoints("ParentalAid", 2, 20000, questionn);
   questionn = vars.allocatePoints("Scholarships", 2, 20000, questionn);
   questionn = vars.allocatePoints("Loan", 2, 20000, questionn);
   questionn = vars.allocatePoints("Salary", 2, 20000, questionn);
   questionn = indvaddointsto(vars,5,5,questionn)
   expect(vars.getTotalPoints().MAX).toBe("Law")
  });

  test('Final result PSY, check name', () => { //tests for the final result to be the same
   let vars = new Assessment
   var questionn = 0
   questionn = addpointsto(vars,20,'N', questionn)
   questionn = addpointsto(vars,-10,'E', questionn)
   questionn = addpointsto(vars,10,'O', questionn)
   questionn = addpointsto(vars,10,'A', questionn)
   questionn = addpointsto(vars,10,'C', questionn)
   //expect( vars.getMax(vars)).toBe(200);
   expect( vars.getTotalPoints().MAX).toBe("Psychology");
});

test('Final result Art, check points', () => { //tests that the final result is the expected amount of points
    let vars = new Assessment
    var questionn = 0
    questionn = addpointsto(vars,20,'N', questionn)
    questionn = addpointsto(vars,-10,'E', questionn)
    questionn = addpointsto(vars,10,'O', questionn)
    questionn = addpointsto(vars,10,'A', questionn)
    questionn = addpointsto(vars,10,'C', questionn)
    questionn = indvaddointsto(vars,50,2,questionn)
   // expect( vars.getMax(vars)).toBe(210);
    expect( vars.getTotalPoints().MAX).toBe("Arts");
 });

 test('Final result Hum, check points', () => { //tests that the final result is the expected amount of points
    let vars = new Assessment
    var questionn = 0
    questionn = addpointsto(vars,20,'N', questionn)
    questionn = addpointsto(vars,-10,'E', questionn)
    questionn = addpointsto(vars,10,'O', questionn)
    questionn = addpointsto(vars,10,'A', questionn)
    questionn = addpointsto(vars,10,'C', questionn)
    questionn = indvaddointsto(vars,50,3,questionn)
    //expect( vars.getMax(vars)).toBe(210);
    expect( vars.getTotalPoints().MAX).toBe("Humanity");
 });

 test('Final result Eng, check points', () => { //tests that the final result is the expected amount of points
    let vars = new Assessment
    var questionn = 0
    questionn = addpointsto(vars,20,'N', questionn)
    questionn = addpointsto(vars,-10,'E', questionn)
    questionn = addpointsto(vars,10,'O', questionn)
    questionn = addpointsto(vars,10,'A', questionn)
    questionn = addpointsto(vars,10,'C', questionn)
    questionn = indvaddointsto(vars,110,4,questionn)
    //expect( vars.getMax(vars)).toBe(210);
    expect( vars.getTotalPoints().MAX).toBe("Engineering");
 });

 test('Final result Law, check points', () => { //tests that the final result is the expected amount of points
    let vars = new Assessment
    var questionn = 0
    questionn = addpointsto(vars,20,'N', questionn)
    questionn = addpointsto(vars,-10,'E', questionn)
    questionn = addpointsto(vars,10,'O', questionn)
    questionn = addpointsto(vars,10,'A', questionn)
    questionn = addpointsto(vars,10,'C', questionn)
    questionn = indvaddointsto(vars,130,5,questionn)
    //expect( vars.getMax(vars)).toBe(210);
    expect( vars.getTotalPoints().MAX).toBe("Law");
 });

 test('Final result Sci, check points', () => { //tests that the final result is the expected amount of points
    let vars = new Assessment
    var questionn = 0
    questionn = addpointsto(vars,20,'N', questionn)
    questionn = addpointsto(vars,-10,'E', questionn)
    questionn = addpointsto(vars,10,'O', questionn)
    questionn = addpointsto(vars,10,'A', questionn)
    questionn = addpointsto(vars,10,'C', questionn)
    questionn = indvaddointsto(vars,90,6,questionn)
   // expect( vars.getMax(vars)).toBe(210);
    expect( vars.getTotalPoints().MAX).toBe("Science");
 });

 test('Final result Eco, check points', () => { //tests that the final result is the expected amount of points
    let vars = new Assessment
    var questionn = 0
    questionn = addpointsto(vars,20,'N', questionn)
    questionn = addpointsto(vars,-10,'E', questionn)
    questionn = addpointsto(vars,10,'O', questionn)
    questionn = addpointsto(vars,10,'A', questionn)
    questionn = addpointsto(vars,10,'C', questionn)
    questionn = indvaddointsto(vars,150,7,questionn)
    //expect( vars.getMax(vars)).toBe(210);
    expect( vars.getTotalPoints().MAX).toBe("Economics");
 });

 test('Final result Bus, check points', () => { //tests that the final result is the expected amount of points
    let vars = new Assessment
    var questionn = 0
    questionn = addpointsto(vars,20,'N', questionn)
    questionn = addpointsto(vars,-10,'E', questionn)
    questionn = addpointsto(vars,10,'O', questionn)
    questionn = addpointsto(vars,10,'A', questionn)
    questionn = addpointsto(vars,10,'C', questionn)
    questionn = indvaddointsto(vars,190,8,questionn)
   // expect( vars.getMax(vars)).toBe(210);
    expect( vars.getTotalPoints().MAX).toBe("Business");
 });
 test('Final result Poli, check points', () => { //tests that the final result is the expected amount of points
    let vars = new Assessment
    var questionn = 0
    questionn = addpointsto(vars,20,'N', questionn)
    questionn = addpointsto(vars,-10,'E', questionn)
    questionn = addpointsto(vars,10,'O', questionn)
    questionn = addpointsto(vars,10,'A', questionn)
    questionn = addpointsto(vars,10,'C', questionn)
    questionn = indvaddointsto(vars,210,9,questionn)
    //expect( vars.getMax(vars)).toBe(210);
    expect( vars.getTotalPoints().MAX).toBe("Poli. Science");
 });
 test('Final result Med, check points', () => { //tests that the final result is the expected amount of points
    let vars = new Assessment
    var questionn = 0
    questionn = addpointsto(vars,20,'N', questionn)
    questionn = addpointsto(vars,-10,'E', questionn)
    questionn = addpointsto(vars,10,'O', questionn)
    questionn = addpointsto(vars,10,'A', questionn)
    questionn = addpointsto(vars,10,'C', questionn)
    questionn = indvaddointsto(vars,170,10,questionn)
    //expect( vars.getMax(vars)).toBe(210);
    expect( vars.getTotalPoints().MAX).toBe("Medicine");
 });

 test('Sample assessment with all questions and financials', () => { //tests that the final result is the expected amount of points
   let vars = new Assessment
   var questionn = 0
   questionn = addpointsto(vars,20,'N', questionn)
   questionn = addpointsto(vars,-10,'E', questionn)
   questionn = addpointsto(vars,10,'O', questionn)
   questionn = addpointsto(vars,10,'A', questionn)
   questionn = addpointsto(vars,10,'C', questionn)
   questionn = vars.allocatePoints("FinancialAid", 2, 20000, questionn);
   questionn = vars.allocatePoints("ParentalAid", 2, 20000, questionn);
   questionn = vars.allocatePoints("Scholarships", 2, 20000, questionn);
   questionn = vars.allocatePoints("Loan", 2, 20000, questionn);
   questionn = vars.allocatePoints("Salary", 2, 20000, questionn);
   vars.getTotalFinancials();
   //expect( vars.getTotalPoints()).toBe(210);
   //questionn = indvaddointsto(vars,170,10,questionn)
   expect( vars.getTotalPoints().MAX).toBe("Medicine");
});
 
 test('Checking negative values', () => { //tests that the final result is the expected amount of points
    let vars = new Assessment
    var questionn = 0
    questionn = addpointsto(vars,-20,'N', questionn)
    questionn = addpointsto(vars,10,'E', questionn)
    questionn = addpointsto(vars,-10,'O', questionn)
    questionn = addpointsto(vars,-10,'A', questionn)
    questionn = addpointsto(vars,-10,'C', questionn)
    questionn = indvaddointsto(vars,-50,2,questionn)
    
    //expect( vars.getTotalPoints()).toBe(210);
    expect( vars.getTotalPoints().MAX).toBe("Poli. Science");
 });



let addpointsto = (asses, amountofp, category, qnum) =>{ //helper function for allocating points to a category
    for(var i=qnum; i<(4+qnum); i++){ //check how many question we have in total
        asses.set(category, amountofp, i)
    }
    return qnum+4
}

let indvaddointsto = (asses, amountofp, category, qnum)=>{
    asses.setIndv(category, amountofp, qnum);
    return qnum+1
}