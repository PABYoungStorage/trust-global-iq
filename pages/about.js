export default function About() {
  return (
    <Alter />
  );
}



const Alter = () => {
  return (
    <div className="aboutcontainer">

      <div className="about-box"> 
        <div className="heading">
          <h1>About us</h1>
        </div>

        <div className="heading1">
          <div className="main">
            <h2>Anytime Anywhere</h2>
            <h1>We Are Leading Community Care <br />Providers</h1>
            <p>We are a team of registered nurses with over 25 years of experience in various clinical setings including critical care <br /> emergency, aged care, disability and community care. We are committed to provide customized care to meet individual needs.</p>
            <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla <br />ut sed diam libero erat. Aenean faucibus nibh et justo cursus.</p>
            <h1>"Over 20 Years of Accomplishments”</h1>
            <div className="button">
              <button className="btn">Learn More about Us</button>
            </div>
          </div>

          <div className="image">
            <img alt="" src="/Icons/about.png" className="img1" />
          </div>
        </div>


        <div className="content">
          <div className="point">
            <h1>Who we are</h1>
            <p>We are a team of registered nurses with <br />over 25 years of experience in various<br /> clinical setings including critical care<br /> emergency, aged care, disability and <br />community care. We are committed to <br />provide customized care to meet <br />individual needs.</p>
          </div>

          <div className="point2">
            <h1>What We provide</h1>
            <span className='emoji'>&#9989; Community Nursing Care</span>
            <span className='emoji'>&#9989;High Intensity Personal Activities</span>
            <span className='emoji'>&#9989; Assistance with Daily Personal Activities</span>
            <span className='emoji'>&#9989; Assistance with Household Tasks</span>
            <span className='emoji'>&#9989; Assistance with Community and Civic Participation</span>
            <span className='emoji'>&#9989; Innovative Community Participation & Development of Daily Living & Life Skills</span>
            <span className='emoji'>&#9989; High Intensity Nursing Care</span>
            <span className='emoji'>&#9989; PEG Feeding</span>
            <span className='emoji'>&#9989; Wound Care</span>
            <span className='emoji'>&#9989; Subcutaneous Injections</span>
            <span className='emoji'>&#9989; Bowel Care</span>
            <span className='emoji'>&#9989; Catheter care</span>
            <span className='emoji'>&#9989; Transportation Services</span>
          </div>
        </div>

        <div className="peoples">
          <div className="head">
            <h1>Happy Voulenteers</h1>
          </div>
          <div className="person">
            <img alt="" src="/Icons/team1.png" className="perimg" />
            <img alt="" src="/Icons/team1.png" className="perimg" />
            <img alt="" src="/Icons/team1.png" className="perimg" />
            <img alt="" src="/Icons/team1.png" className="perimg" />
            <img alt="" src="/Icons/team1.png" className="perimg" />
            <img alt="" src="/Icons/team1.png" className="perimg" />
            <img alt="" src="/Icons/team1.png" className="perimg" />
            <img alt="" src="/Icons/team1.png" className="perimg" />

          </div>
        </div>
      </div>
    </div>
  );
};