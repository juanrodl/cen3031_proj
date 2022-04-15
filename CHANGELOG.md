All notable changes to this project will be documented in this file.
## 0.3.1 - 2022-04-14
### Added
- CustomCardSlider, which serves as a component and template for questions (mostly financials-related) that make use of a value range --Angel
- Question Counter, which counts and inform the user of the amount of questions, as well as the question that the user is on --Juan
- Assessment and component testing, which uses react-jest to test that all of our components render correctly, as well as making sure that the assessment values are allocated correctly --Jorge
- Assessment point setting functions that update the Object's state to reflect changes to the points each major has --Jorge
- Django backend (not on github yet but REAL  (REAL LIVELEAK JERMA REACTION)) developed largely by shehzad that includes functionality for storing past user results, as well as users on the website. --Shehzad
- Results page, which displays your best fit major as of now (planned to display the 3 runner-ups as well, will be implemented soon) --Angel
- Registration and Login Modals, largely based on the UI design done by Juan, which contain password and email checking using RegExps, which validate or invalidate user input. User is informed if their password/email does not meet requirements --Angel

### Deprecated
- getFinancialAid() in change for getFinancials(string: category) which is able to gather all other types of aid
- toStringify() function in assessment.js because it does NOTHING and it SUCKS
### Removed
- A considerable amount of assessment functionality that was based on the Big 5, now more related to actual majors
### Fixed
- Authstate, register modal, and login modal literally dying
- React-Jest testing functionality acting up due to some unknown infinite loop --Jorge.

### notes
- for all the developers, getFinancials() works the same as getFinancialAid(), just make sure to input the correct keyword in the parameters (for instance, to get financial aid, you can put 'FinancialAid' through the parameter of the function. Likewise, for parental aid you would pass in 'ParentalAid')
- Refer to assessment.js or data.js to get a better idea of the keywords (look at the cat: sections of type: 2 questions on data.js)

## 0.2.3 - 2022-04-02
### Added
- Literally the entire results page and most if not all the testing functionality
- The Assessment class, which essentially holds all assessment information until results are either saved to the backend or discarded.
### Deprecated
- The "card" class for anything other than bootstrap cards
### Removed
- A good chunk of previous css and html for Carousel and CustomCard components
### Fixed
- The assessment actually does something now using SessionStorage.

## 0.2.1 - 2022-03-26
### Added
- README and CHANGELOG info
### Deprecated
- Nothing
### Removed
- Certain unusued dependencies like gh-pages and an unused font-awesome dependencies
### Fixed
- Moved dev-dependencies to dev-dependency section on package.json

## 0.2.0 - 2022-03-23
### Added
- Basic HTML Structure and CSS added for About and Assessment Pages
### Deprecated
- Nothing.
### Removed
- Nothing.
### Fixed
- Nothing.