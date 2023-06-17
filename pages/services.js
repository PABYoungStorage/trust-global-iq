export default function Services() {
  return (
    <Service />
  );
}














const Service = () => {
  return (
    <div className="servecontainer">
      <div className="cont">
        <h1>Our Service</h1>
      </div>

      <div className="card">
        {
          ServicesList.map(a => <div className="card-box" key={a.value}>
            <img alt={a.value} src={a.src} />
            <span>{a.value}</span>
          </div>)
        }

      </div>

      <div className="work">
        <h1>Whom We Work With</h1>
      </div>

      <div className="brand">
        <img alt="" src="/servicons/brand1.png" className="brd"/>
        <img alt="" src="/servicons/brand1.png" />
        <img alt="" src="/servicons/brand1.png" />
        <img alt="" src="/servicons/brand1.png" />
        <img alt="" src="/servicons/brand1.png" />
      </div>

    </div>
  );
};


const ServicesList = [
  {
    src: "/servicons/si1.png",
    value: "Community Nursing Care"
  },
  {
    src: "/servicons/si2.png",
    value: "High Intensity Personal Activities."
  },
  {
    src: "/servicons/si3.png",
    value: "Assistance with Daily Personal Activities."
  },
  {
    src: "/servicons/si4.png",
    value: "Assistance with Household Tasks."
  },
  {
    src: "/servicons/si5.png",
    value: "Assistance with Community and Civic Participation."
  },
  {
    src: "/servicons/si6.png",
    value: "Innovative Community Participation & Development of Daily Living and Life Skills ."
  },
  {
    src: "/servicons/si7.png",
    value: "High intensity nursing care."
  },
  {
    src: "/servicons/si10.png",
    value: "PEG Feeding."
  },
  {
    src: "/servicons/si11.png",
    value: "Wound Care."
  },
  {
    src: "/servicons/si12.png",
    value: "Subcutaneous Injections."
  },
  {
    src: "/servicons/si13.png",
    value: "Catheter care."
  },
  {
    src: "/servicons/si14.png",
    value: "Wound Care."
  },
];