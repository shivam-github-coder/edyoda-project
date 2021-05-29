import React from 'react'
import './Modules.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import html from '../img/tech-html.svg';
import css from '../img/tech-css.svg';
import js from '../img/tech-javascript.svg';
import treact from '../img/tech-reactjs.svg';
import dsa from '../img/tech-dsa.svg';


function Modules() {
    return (
        <div id="mode">
            <div className="mode_first">
                <h2 className="ml-4">Modules</h2>
                <div className="mode_list">
                <Router>
                    <div>
                    <Link style={{ textDecoration: 'none' }} className="mode-link py-2"  to="/" > <img src={html} /> <p>HTML5</p></Link>
                    </div>
                    <div>
                    <Link style={{ textDecoration: 'none' }} className="mode-link py-2"  to="/" > <img src={css} /> <p>CSS</p></Link>
                    </div>
                    <div>
                    <Link style={{ textDecoration: 'none' }} className="mode-link py-2 "  to="/" > <img src={js} /> <p>Javascript</p></Link>
                    </div>
                    <div>
                    <Link style={{ textDecoration: 'none' }} className="mode-link py-2"  to="/" > <img src={treact} /> <p>ReactJS</p></Link>
                    </div>
                    <div>
                    <Link style={{ textDecoration: 'none' }} className="mode-link py-2"  to="/" > <img src={dsa} /> <p>Data Structures & Algorithum</p></Link>
                    </div>
                </Router>
                </div>
            </div>
            <div className="mode_sec"> 
                <div className="container">
                    <div className="mode_sec_title ml-5">
                    <h3>Javascript</h3>
                    <p>7 February 2021, Monday</p>
                    </div>
                    <div className="mode_sec_data ml-5 mt-5">
                    <h4>Session Plan</h4>
                    <ol className="ml-3">
                        <li>Introduction to Javascript;</li>
                        <li>Language Basics: Variables,Data Types - Primitive and Reference,</li>
                        <li>Number (Add,Sub,Mul,NaN,Infinity),Inbuilt Function - Numbers;</li>
                        <li>Dialogs: Alert, Confirm, Input;</li>
                        <li>Control Flow;</li>
                    </ol>
                    </div>

                </div>
                <hr className="w-100 bg-secondary mx-5 mt-5"></hr>
            </div>
        </div>
    )
}

export default Modules
