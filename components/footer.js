export const Footer = () => {
    return(
        <footer>
            <div className="footercontainer">
                <div className="col">
                    <h1>Our Address</h1>
                    <span>167. V.O.C Nagar K.N.Colony Post Salem- 636014</span>
                </div>

                <div className="col">
                    <h1>Contact Us</h1>
                    <span><a href="contact">Link to Contact</a>+91 79040 60790</span>
                </div>

                <div className="col">
                    <h1>Mail Us</h1>
                    <span>iqglobaltrust@gmail.com</span>
                </div>

                <div className="col">
                    <h1>Follow Us On</h1>
                    <img alt="" src="/Icons/twitter.png" className="icons"/>
                    <img alt="" src="/Icons/linkedin.png" className="icons"/>
                    <img alt="" src="/Icons/facebook.png" className="icons"/>
                    <img alt="" src="/Icons/whatsapp.png" className="icons"/>
                    <img alt="" src="/Icons/instagram.png" className="icons"/>
                </div>
            </div>

            <div className="copyrights">
                <span>&copy;2022 Save Poor. All rights reserved. Design by <b>Bloomskill Tech</b></span>
            </div>
        </footer>
    )
}