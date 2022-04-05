import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import HomeContent from './components/HomeContent';
import Header from './components/Header'
import Footer from './components/Footer'
import TestPage from './components/TestPage' 
import AboutPage from './components/AboutPage'
import { BrowserRouter as Router,Routes as Switch,Route,Link} from "react-router-dom";
function App() {

  return (
      <div className="App">
        <Router>
        <Header></Header>
            <Switch>
              <Route path = "/test/*" element={<TestPage></TestPage>}/>
              <Route path = "/about" element={<AboutPage></AboutPage>}/>
              <Route path ="/" element={<HomeContent></HomeContent>}/>
              <Route path ="/home" element={<HomeContent></HomeContent>}/>
            </Switch>
        </Router>
      </div>  
  );
}

export default App;
