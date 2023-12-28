function Schools(){
    return(
        <div className="contact">
            <div className="form">
                <form>
                    <section>
                    <label>Name</label><br />
                    <input type="text" />
                    </section>
                    <section>
                    <label>Mobile No.</label><br />
                    <input type="number" />
                    </section>
                    <section>
                    <label>Email</label><br />
                    <input type="email" />
                    </section>
                    <section>
                    <label>Course Interested In</label><br />
                   <select>
                    <option disabled>--Choose--</option>
                    <option>B.A.LL.B. (Hons.)</option>
                   <option>B.B.A LL.B. (Hons.)</option>
                   <option>LL.B. (Hons.)</option>
                   <option>LL.M.</option></select>
                    </section>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Schools;