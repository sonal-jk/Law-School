import React, { useState } from "react";
import logo from './images/logo.png'
import {Outlet, Link } from "react-router-dom";
import "./style.scss"
import call from './images/call.png'
import mail from './images/mail.png'
import Hamburger from "./pages/Hamburger";

/*const z=document.getElementById("#list")
const y=document.querySelector(".hamburger")

y.addEventListener("click",()=>{
  z.classList.toggle("show")

})*/

function Layout(){
  
  const [ham,setham]=useState(false);
  const toggleham=()=>{
    setham(!ham);
    
  }
  
    return(
        <div className="container">
         <nav>
        <img src={logo} alt="LOGO"/>
        <ul id="list">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/academics">ACADEMICS</Link>
          </li>
          <li id="apply">
            <Link id="ap" to="/apply">APPLY</Link>
          </li>
        </ul>
       <div className="hamburger" onClick={toggleham}>
        <Hamburger Open={ham} />
       </div>
      </nav>
      <style jsx>{`
      .hamburger{
        width:20%;   
      }
        @media screen and (max-width:763px){
          
         nav ul {
          display: ${ ham ? "flex" : "none"};
            flex-direction: column;
            justify-content: center;
            position: absolute;
            top: calc(10vmin);
            background-color: #176B87;
            padding: 2%;
            right: 2vmin;
            width: 20vmax;
          }
        }
      `}</style>
      <Outlet/>
      <footer>
        <div className="foot">
        <div id="row1">
            <div><section><strong>For Admission Query</strong></section>
            <section><img src={call} alt="none" />+91 1234567890</section></div>
            <div><section><strong>Email us on:</strong></section>
            <section><img src={mail} alt="none" />saitmlaw@gmail.com</section></div>
        </div>
        
        <div id="row2">
          <div id="sub-row1">
            <div><section><strong>Other Schools</strong></section>
            <section><ul><li><Link> School of Technology</Link></li>
            <li><Link> School of Management</Link></li>
            <li><Link> School of Science</Link></li>
            <li><Link> School of Nursing</Link></li>
            <li><Link> School of Architecture</Link></li></ul></section></div>
            
            <div><section><strong>Admissions</strong></section>
            <section><ul><li><Link> Overview</Link></li>
            <li><Link> Process:How to Apply</Link></li>
            <li><Link> Eligibility</Link></li>
            <li><Link> Fee Structure</Link></li>
            <li><Link> FAQs</Link></li>
            <li><Link> Apply Now</Link></li></ul></section></div>
            </div>
            <div id="sub-row2">
            <div><section><strong>Examination</strong></section>
            <section><ul><li><Link> Rules</Link></li>
            <li><Link> Datesheets</Link></li>
            <li><Link> Notices</Link></li>
            <li><Link> Results</Link></li>
            </ul></section></div>
            
            <div><section><strong>Quick Links</strong></section>
            <section><ul><li><Link> Life at SAITM</Link></li>
            <li><Link> Events</Link></li>
            <li><Link> Scholarships</Link></li>
            <li><Link> Blog</Link></li>
            <li><Link> Terms & Conditions</Link></li>
            <li><Link> List of Committe</Link></li></ul></section></div></div>
        </div>
        <div id="row3">Copyright SAIL. All rights reserved.</div>
        </div>


       
      </footer>


        </div>
    );
}
export default Layout;