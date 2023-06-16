export default function Contact() {
  return (
    <Info />
  );
}


const Info = () => {
  return (
    <div className="imagecontainer">
      <div className="into">
        <img />
        <h1>Contact Us</h1>
      </div>
      <div className="dent">
        <div className="details">
          <h1>Send Us a Message</h1>
          <p>Your email address will not be published. Required fields are marked </p>
          <div className="box">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="number" placeholder="phNo" />
            <input type="text" placeholder="subject" />
            <input type="text" placeholder="message" />
          </div>

        </div>
        <div className="demo">
          <h2>Contact Address</h2>
          <span>167. V.O.C Nagar, K.N.Colony Post, Salem- 636014</span>
          <img alt="" src="/Icons/email.png" className="msg"/>
          <span>iqglobaltrust@gmail.com</span>
          <img alt="" src="/Icons/email.png" className="msg1"/>
          <span>+917904060790</span>
          <img alt="" src="/Icons/email.png" className="msg2"/>
        </div>
      </div>
        <div className="button">
          <button className="btn">Submit</button>
        </div>
    </div>

  );
};