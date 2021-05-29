import React from 'react'
import techjavascript from '../img/tech-javascript.svg';
import defaultavatar from '../img/default-avatar.svg';
import './Home.css'
import LinearProgress from '@material-ui/core/LinearProgress';
import Upcomingmodule from './Upcomingmodule';
import treact from '../img/tech-reactjs.svg';
import django from '../img/tech-django.svg';
import aws from '../img/tech-aws.svg';
import tda from '../img/tech-data-analysis.svg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



function Home() {
    return (
        <div className="tp">
        <div className="container mt-5">
            <h1>Continue Learning</h1>
        </div>    
            <p className="d-flex justify-content-center text-primary"><b>VIEW MODULE DETAILS</b></p>
            <div className="container firsts">
              <div className="one mr-5">
                    <div className="parent">
                        <div className="head mt-4">
                            <img src={techjavascript} />
                            <div className="head_info">
                                <h4>JAVASCRIPT</h4>
                                <div>
                                <img src={defaultavatar} />
                                <h5>John Doe</h5>
                                </div>
                            </div>
                        </div>
                        <div className="buttom mt-4">
                            <div className="same mt-5">
                                <div  className="py-2">
                                    <p>Progress</p>
                                </div>
                                <div  className="py-2">
                                    <p>Live Session</p>
                                </div>
                                <div  className="py-2">
                                    <p>Assignment</p>
                                </div>
                                <div className="py-2">
                                    <p>MCQ Quiz</p>
                                </div>
                            </div>

                            <div className="sames">
                                <div>
                                    <p>45%</p>
                                    <LinearProgress className="Progres" variant="determinate" value={45} />
                                </div>
                                <div>
                                <p>15/35</p>
                                    <LinearProgress className="Progres" variant="determinate" value={15} />
                                </div>
                                <div>
                                <p>1/4</p>
                                    <LinearProgress className="Progres" variant="determinate" value={25} />
                                </div>
                                <div>
                                <p>5/6</p>
                                    <LinearProgress className="Progres" variant="determinate" value={90} />
                                </div>
                            </div>
                           
                            
                        </div>
                    </div>
                    <div className="child">
                        <div id="child" className="container p-4">
                            <div className="plan mt-2">
                                    <h3>Today's Plan</h3>
                                    <p>7 February 2021</p>
                            </div>
                            <div className="plan_info mt-5">
                                    <h3>JavaScript</h3>
                                    <div className="Quiz">
                                    <p> Quiz / Assignment  </p>
                                    <p>opens at 7 Pm</p>
                                    </div>
                            </div>
                            <div className="buttom_info">
                                    <button className="btn btn-large px-5">JOIN LIVE SESSION</button>
                                    <p>SESSION IN PROGRESS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="two">
                    <div id="over_right" className="container mt-4">
                        <h4>Progress Overview</h4>
                        <div className="overall p-2 mt-5">
                            <div>
                                <h3>94%</h3>
                                <p>Overall Grade</p>
                            </div>
                            <LinearProgress className="Progres"  color="primary" variant="determinate" value={94} />
                        </div>
                        <div className="alter p-2 mt-5">
                            <div>
                                <h3>32%</h3>
                                <p>Attendance</p>
                            </div>
                            <LinearProgress className="Progres"  color="secondary" variant="determinate" value={32} />
                        </div>
                        <p className="h-25 d-flex align-items-end text-primary"><b>VIEW DETAILED PROGRESS</b></p>
                    </div>
                </div>
                
            </div>
            <div className="container mt-5">
            <h1 className="">Upcoming Modules</h1>
            <div id="module" className="Module">
                <Upcomingmodule logo={treact} name="REACTJS" weektime="2" weekname="Weeks" asstime="6" assname="Assignment" mcqtime="9" mcqname="MCQ Quiz"  />
                <Upcomingmodule logo={django} name="DJANGO" weektime="2" weekname="Weeks" asstime="6" assname="Assignment" mcqtime="9" mcqname="MCQ Quiz"  />
                <Upcomingmodule logo={aws} name="INTRO TO AWS" weektime="2" weekname="Weeks" asstime="6" assname="Assignment" mcqtime="9" mcqname="MCQ Quiz"  />
                <Upcomingmodule logo={tda} name="DATA ANALYSIS FUNDAMENTALS" weektime="2" weekname="Weeks" asstime="6" assname="Assignment" mcqtime="9" mcqname="MCQ Quiz"  />
                
            </div>
            </div>
       
            <div id="arrow-id" className="container mt-4 pb-5">
                   <ArrowBackIcon id="Arrow" className="mx-3" />
                   <ArrowForwardIcon id="Arrow" />
            </div>
        </div>
        
    )
}

export default Home
