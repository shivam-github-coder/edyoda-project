import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Pages/Header';
import Header2 from './Pages/Header2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Modules from './Pages/Modules';
import Instructors from './Pages/Instructors';
import Homedark from './img/home-dark.svg'
import Homewhite from './img/home-white.svg'
import modulesdark from './img/modules-dark.svg'
import instructorswhite from './img/instructors-white.svg'
import instructorsdark from './img/instructors-dark.svg'
import DomainIcon from '@material-ui/icons/Domain';

function App() {
  const [name, setname] = useState({
    one:"",
    two:"",
    three:"",
  })

  
  useEffect(() => {
    setname({one :"home",two:"",three:""}) 
  }, [])


  return (
    <div className="App">
      <Header />
      <Header2 select={name.two} nav={name.three} one={name.one} />

        <Router>
          <div className="Main">
        <div className="left">
        <nav>
          <ul>
            <li className={name.one ? "py-3 Homedark" : "hwhite py-3"} style={{cursor:"pointer"}} onClick={() => setname({one :"home",two:"",three:""}) }>
              <img src={ name.one ? Homedark : Homewhite } />
              <Link style={{ textDecoration: 'none' }} className={name.one ? "link" : "link-white"} to="/" >HOME</Link>
            </li>
            <li className={name.two ? "py-3 Homedark" : "hwhite py-3"} style={{cursor:"pointer"}} onClick={() => setname({one :"",two:"module",three:""}) }>
            { name.two ?<img src={modulesdark} /> : <DomainIcon style={{color:"white"}} /> } 
              <Link style={{ textDecoration: 'none' }} to="/Modules" className={name.two ? "link" : "link-white"} >MODULES</Link>
            </li>
            <li className={name.three ? "py-3 Homedark" : "hwhite py-3"} style={{cursor:"pointer"}} onClick={() => setname({one :"",two:"",three:"instructor"})}>
              <img src={ name.three ? instructorsdark : instructorswhite } />
              <Link style={{ textDecoration: 'none' }} to="/Instructor" className={name.three ? "link" : "link-white"} >INSTRUCTORS</Link>
            </li>
          </ul>
        </nav>
        </div>
        <div className="right">
        <Switch>
          <Route path="/Instructor">
            <Instructors />
          </Route>
          <Route path="/Modules">
            <Modules />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </div>
        </div>
        </Router>

    </div>
  );
}

export default App;
