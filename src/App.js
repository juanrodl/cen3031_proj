import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import DevPage from './components/DevPage';
import HomeContent from './components/HomeContent';
import Header from './components/Header'
import Footer from './components/Footer'
import TestPage from './components/TestPage' 
import AboutPage from './components/AboutPage'
import {AuthStateContext, simpleMachine} from './data/authState.xStateMachine';
import {useMachine, useInterpret} from '@xstate/react';
import { BrowserRouter as Router, Routes as Switch,Route,Link} from "react-router-dom";
function App() {

  const [state, send] = useMachine(simpleMachine);

  return (
      <div className="Applet">
        <AuthStateContext.Provider value={{send}}>
          <Router>
            <Header></Header>
            <Switch>
              <Route path = "/test/*" element={<TestPage></TestPage>}/>
              <Route path = "/about" element={<AboutPage></AboutPage>}/>
              <Route path ="/" element={<HomeContent></HomeContent>}/>
              <Route path ="/home" element={<HomeContent></HomeContent>}/>
              <Route path ="/devtest" element={<DevPage></DevPage>}/>
            </Switch>
          </Router>
          </AuthStateContext.Provider>
      </div>  
  );
}

export default App;
