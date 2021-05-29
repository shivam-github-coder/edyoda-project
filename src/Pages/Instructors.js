import React from 'react'
import './Instructor.css'
import defaultavatar from '../img/default-avatar.svg';
import linkedin from '../img/linkedin.svg';
import website from '../img/website.svg';
import github from '../img/github.svg';
import ivplace from '../img/intro-video-placeholder.jpg';
import treact from '../img/tech-reactjs.svg';
import html from '../img/tech-html.svg';
import css from '../img/tech-css.svg';
import js from '../img/tech-javascript.svg';


function Instructors() {
    return (
        <div id="Instructor">
            <div className="Instructor_first">
                <h3>Instructors</h3>
                <div className="Instructor_first_Data mt-5">
                    <img src={defaultavatar} />
                    <div className="Instructor_first_Data_info">
                        <p>John Doe</p>    
                        <p>HTML 5</p>    
                        <p>CSS</p>    
                        <p>JAVASCRIPT</p>    
                    </div>    
                </div>
                <div className="Instructor_first_Data mt-5">
                    <img src={defaultavatar} />
                    <div className="Instructor_first_Data_info">
                        <p>Daphne Doe</p>    
                        <p>PYTHON</p>    
                        <p>Data Structures & Algorithum</p>      
                    </div>    
                </div>
            </div>
            <div className="Instructor_sec">
                <div className="Instructor_sec_first">
                    <div className="Instructor_sec_first_one">
                        <div className="Instructor_sec_firs_info">
                            <img src={defaultavatar} />
                            <div>
                            <img src={linkedin} />
                            <img src={website} />
                            <img src={github} />
                            </div>
                        </div>
                        <p>John Doe</p>
                        <img src={ivplace} />
                    </div>
                    <div className="container w-75">
                    <div className="Instructor_sec_first_two">
                        <h4>STATS</h4>
                        <div className="Stats">
                            <div className="mr-5">
                                <h1>1320</h1>
                                <p>Total Hours Taught</p>
                            </div>
                            <div>
                                <h1>468</h1>
                                <p>Students Taught</p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="Instructor_sec_first_three mt-5">
                        <h4>TECHNICAL EXPERTISE</h4>
                        <div className="Instructor_sec_first_three_info mt-3">
                            <div>
                                <img src={html} />
                                <p>HTML 5</p>
                            </div>
                            <div>
                                <img src={css} />
                                <p>CSS</p>
                            </div>
                            <div>
                                <img src={js} />
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <img src={treact} />
                                <p>ReactJS</p>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
                <div className="Instructor_sec_two">
                    <div className="container w-75 mt-5">
                        <div className="">
                            <h4>TAGLINE</h4>
                            <p>"Everything you want is outside of your comfort zone."</p>
                        </div>
                        <div className="mt-5">
                            <h4>ABOUT</h4>
                            <p>John is a Computer Science graduate. He has been part of the comporte circle since
                                his college days. In his early days. he was part of a startup team delivering
                                production grid android apps. Currently, he is a lead developer at www.edyoda.com. 
                                He is responsible for the entire front-end development & integration with the 
                                back-end React, Python, Django are his areas of expertise. He has been delivering
                                corporate training for Android, React, Javascript,Python & Django.
                            </p>
                        </div>
                    </div>
                    
                </div>

            </div>
           
        </div>
    )
}

export default Instructors
