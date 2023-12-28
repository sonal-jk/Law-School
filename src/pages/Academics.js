import law1 from '../images/law1.jpg'
function Academics(){
    return(
        <div className="acad">
            <strong>Undergraduate Courses</strong>
            <div id="a1">
                <div id="c1">
                    <img src={law1} alt='none' />
                    <div id="para">
                        <h1>B.A.LL.B. (Hons.)</h1>
                        <p>B.A.LL.B. (Hons.) is a five-year degree program, which integrates Arts with Law. The subjects like Political Science, Economics, and History are taught along with Law subjects enabling students to develop expertise in verbal questioning and complex information elucidation.</p>
                    </div>
                </div>
                <div id="c2">
                    <img src={law1} alt='none' />
                    <div id="para">
                        <h1>B.B.A LL.B. (Hons.)</h1>
                        <p>B.B.A. LL.B. (Hons.) is a five-year degree program, which integrates Business Administration with Law. The knowledge of Management subjects like Business Organization, Business Accounting, Financial Management, Marketing Management, etc. enable students to deal with the important legal issues in corporate world, Banking and Financial sectors.</p>
                    </div>
                </div>
                <div id="c3">
                    <img src={law1} alt='none' />
                    <div id="para">
                        <h1>LL.B. (Hons.)</h1>
                        <p>LL.B. (Hons.) is a three-year program with the exclusive advantage of choosing this program after graduating in any discipline. It entrusts self-sustainability at any age through practicing law and establish recognition in the field. The honours program gives an additional edge by choosing varied specializations and hone an expertise.</p>
                    </div>
                </div>
                

            </div>
            <strong>Post Graduate Courses</strong>
            <div id="a2">
                <div id="c4">
                    <img src={law1} alt='none' />
                    <div id="para">
                        <h1>LL.M.</h1>
                    <p>LL.M. is a one-year degree program, which helps the law graduates/ professionals to bridge the gap between their education and the entry requirements of leading law firms, PSUs and areas requiring special expertise. The student will choose his area of specialization out of numerous options offered in the LL.M. program. LL.M is a one-year program divided into two semesters with enhanced emphasis on research through clinical legal education, case studies combined with theoretical lectures.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Academics;