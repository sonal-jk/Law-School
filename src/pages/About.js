import '../style.scss'
import {HashLink} from 'react-router-hash-link' 
import { Link } from 'react-router-dom';
function About(){
return(
    <div className='about'>
        <strong>About Us</strong>
    <div className='cont'>
    <div id='index'><ul><li><HashLink to='/about/#i1'>Overview</HashLink></li>
    <li><HashLink to='/about/#i2'>Our Mission</HashLink></li>
    <li><HashLink to='/about/#i3'>Legacy</HashLink></li></ul></div>

    <div id='index-text'>
    <div id='i1'><h1>Overview</h1>
    <p><section>St. Andrews School of Law is located in the industrial hub of India Gurgaon, Delhi (NCR). It is spread across 22 acres of lush green campus with the globally acknowledged infrastructure. The Classrooms are centrally air-conditioned equipped with modern technology for teaching.</section>
    <section>Good Education encompasses instilling Moral, Aesthetic, Athletic and Intellectual values in the citizens of tomorrow. St. Andrews is the best place to achieve this kind of education. Affiliated to MDU and approved by the All India Council for Technical Education (AICTE), this college has lush green surroundings which provides a conducive environment for the students to grow not only as good Lawyers/Judges but as world class citizens too.</section>
    <section>The Teaching and Non-Teaching Staff of the Institute is a blend of Senior Experienced and Young, Dynamic faculty members devoted to the noble cause of education. We, at St. Andrews look towards creating a workforce that lives and breathes the same spirit. We give importance to Practical Training, Self-Learning, Coupled with Discipline, which attracts students from overall India.
</section></p></div>

<div id='i2'><h1>Our Mission</h1>
<ul><li>Transform lives and communities through education and research.</li>
<li>To achieve excellence in legal education through interactive teaching-learning process, clinical opportunities, exposure to the legal profession through internships and externships.</li>
<li>Attract talent through international partnerships and collaborations to achieve highest standards.</li>
<li> To groom the skills, knowledge and values of all the students to make them not only a competent legal professional but also complete human being.</li>
<li>To aim at Integration of the study of Law with Management subjects in not only developing our law students to excel as Lawyers but also as great managers.
</li></ul>
</div>

<div id='i3'><h1>Legacy</h1>
<p><section>The St. Andrews Education Group was formed with an aim to impart comprehensive quality education to develop the varied asset of a child’s personality i.e physical, intellectual, spiritual & emotional.</section>
<section>The First Institution was started in 1988 with the dedicated efforts of the management with a dream to establish educational institutions that would impart education to help students develop their potential to their fullest. Armed with confidence and determination, to achieve success in all their endeavours.
</section>
<section><h3><bold>Our other Schools-</bold></h3>
<ul><li><Link> School of Technology</Link></li>
            <li><Link> School of Management</Link></li>
            <li><Link> School of Science</Link></li>
            <li><Link> School of Nursing</Link></li>
            <li><Link> School of Architecture</Link></li></ul></section></p>
</div>
</div></div>
    </div>
)
}
export default About;