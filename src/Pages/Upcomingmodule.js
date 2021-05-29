import React from 'react'
import defaultavatar from '../img/default-avatar.svg';
import './Home.css';

function Upcomingmodule({logo,name,weektime,weekname,asstime,assname,mcqtime,mcqname}) {
    return (
        <div className="upcoming p-3 mt-4 ml-2 w-100">
            <div id="upcoming_top">
                <div className="upcoming_logo">
                <img src={logo} />
                </div>
                <div className="upcoming_info">
                    <h5>{name}</h5>
                    <div className="upcoming_tag">
                        <img src={defaultavatar} className="mr-3" />
                        <h5>John</h5>
                    </div>
                </div>
            </div>
                <div className={name=="DATA ANALYSIS FUNDAMENTALS" ? "upcoming_bottom pb-1 mt-4" : "upcoming_bottom mt-5"}>
                   <div>
                       <h2>{weektime}</h2>
                       <p>{weekname}</p>
                   </div>
                   <div>
                       <h2>{asstime}</h2>
                       <p>{assname}</p>
                   </div>
                   <div>
                       <h2>{mcqtime}</h2>
                       <p>{mcqname}</p>
                   </div>
                </div>
        </div>
    )
}

export default Upcomingmodule
