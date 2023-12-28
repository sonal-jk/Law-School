import React from "react";
import hero from '../images/hero.png';
import "../style.scss"
function Home(){
    return(
        <div className="home">
        <div className="image" > 
            <img id="heropic" src={hero} alt="none" />
    </div>
    <div className="but">
        <button>APPLY NOW</button>
        <button>BROCHURE</button>
    </div>
    <div className="paras">
        <h1>School of Law</h1>
        <p>
            <section>St. Andrews School of Law is among the top Law Schools of country. The School has been conferred numerous awards for academic excellence for years making it an ace law college in the millennial city Gurgaon. It is ranked as one of the top promising law schools. It is a top- notch institution with outstanding credentials committed to the cause of excellence in legal education in Delhi/NCR.
</section>
<section>Faculty members at this school have numerous publications in International and National journals of repute that have been cited by various leading International journals and think tanks contributing immensely to the process of knowledge sharing at the global level. Students on their part have won numerous prizes and special mentions in Debating, Model United Nations (MUN) and Parliamentary debating competitions.</section>
        </p>
        <h1>Advantages</h1>
        <ul>
            <li>Highly qualified faculty and advisors with multinational experiences and qualifications.</li>
            <li>Strong linkages with Industry, Law Firms, Corporate Business Houses, Senior Advocates of High Courts, Supreme Court and regulatory bodies.</li>
            <li>Emphasis on Clinical Legal Education.</li>
            <li>Students’ participation in National and International Moot Court Competitions.</li>
            <li>Outreach Programmes (Lok Adalat, Legal Literacy Camps, Seminars, and Conferences, etc.)Individualized mentoring for each students.</li>
            <li>The School promotes Inter-disciplinary research and has done various Joint research projects with International Organizations like United Nations</li>
        </ul>
    </div>
    </div>
    )
}
export default Home;