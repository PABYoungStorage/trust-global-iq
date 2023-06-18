export default function Donate() {
    return(
        <QrCode />
    )
}






const QrCode = () => {
    return(
        <div className="qrcontainer">
            <div className="qr-title">
                <h1>Donate for Quality Education</h1>
            </div>

            <div className="description">
                <p>Welcome to [IQ Global Trust], where small acts of kindness create a ripple effect. Your donation, regardless of size, has the power to transform lives, support worthy causes, and make a lasting impact. We collaborate with trusted nonprofits to address pressing issues such as poverty, hunger, education, healthcare, and environmental conservation. Choose a cause, select your preferred donation method, and join us in spreading love, compassion, and hope to communities worldwide. Together, we can change the world, one act of generosity at a time. Thank you for considering donating to [IQ Global Trust].</p>
                <img alt="" src="/servicons/qr.img.jpg" className="qr"/>
            </div>
        </div>
    )
}