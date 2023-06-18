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
            <div className="button">
              <button className="btn">Send Message</button>
            </div>
          </div>



        </div>
        <div className="demo">
          <h2>Contact Address</h2>
          <div>
            <img alt="" src="/Icons/email.png" className="msg" />
            <span>D.No,167,V O C Nagar,K N Colony, Ammapet<br/> Salem, TamilNadu – 636 014 (Rental Place)</span>
          </div>
          <div>
            <img alt="" src="/Icons/email.png" className="msg" />
            <span>iqglobaltrust@gmail.com</span>
          </div>
          <div>
            <img alt="" src="/Icons/email.png" className="msg" />
            <span>+917904060790</span>
          </div>
        </div>
      </div>

    </div>

  );
};