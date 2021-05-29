import React from 'react'
import './Header2.css'
import dropdown from '../img/dropdown-icon-white.svg'
import LinearProgress from '@material-ui/core/LinearProgress';

function Header2({select,nav,one}) {
    const dis = () =>{
        var x = document.getElementById('header-25');
        if(x.style.display == "none"){
            x.style.display = "block";
        }else{
            x.style.display = "none";
        }
    }
    const progress="38";
    return (
        <>
        <div className={nav ? "Header22 py-1" : "Header2 py-1" }>
         <div>
         <div className="first">
                <h6  onClick={dis}>TEST-010120 <img className="mx-2" src={dropdown} /></h6>
                <h4>Full Stack Developer Program</h4>
            </div>
            {select ? <div className="sec_2"> 
                <p>BEGINS IN 12 MINS</p>
                <button className=" btn px-5">JOIN SESSION</button>
            </div> :
            <div className="sec">
                <p>38%</p>
                <LinearProgress className="Progress" variant="determinate" value={progress} />
            </div> 
            
            }
         </div>
         <div> 
             <div id="header-25">
                 <div className="container w-75">

                 <p>Select Program</p>
                 <div>
                     <p>TEST-010120</p>
                     <p>TEST-020220</p>
                     <p>TEST-030320</p>
                 </div>
                 </div>
             </div> 
             
         </div>
            
        </div>
        
        
        </>
    )
}

export default Header2
