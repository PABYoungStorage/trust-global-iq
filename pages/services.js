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
              ServicesList.map(a=><div className="card-box" key={a.value}>
                <img alt={a.value} src={a.src}/>
                <span>{a.value}</span>
                </div>)
            }
            
          </div>

          <div className="work">
            <h1>Whom We Work With</h1>
          </div>
          
        </div>
      )
}


const ServicesList = [
  {
    src: "/Icons/profile.png",
    value: "Community Nursing Care"
  },
  {
    src: "/Icons/profile.png",
    value: "High Intensity Personal Activities."
  },
  {
    src: "/Icons/profile.png",
    value: "Assistance with Daily Personal Activities."
  },
  {
    src: "/Icons/profile.png",
    value: "Assistance with Household Tasks."
  },
  {
    src: "/Icons/profile.png",
    value: "Assistance with Community and Civic Participation."
  },
  {
    src: "/Icons/profile.png",
    value: "Innovative Community Participation & Development of Daily Living and Life Skills ."
  },
  {
    src: "/Icons/profile.png",
    value: "High intensity nursing care."
  },
  {
    src: "/Icons/profile.png",
    value: "PEG Feeding."
  },
  {
    src: "/Icons/profile.png",
    value: "Wound Care."
  },
  {
    src: "/Icons/profile.png",
    value: "Subcutaneous Injections."
  },
  {
    src: "/Icons/profile.png",
    value: "Catheter care."
  },
  {
    src: "/Icons/profile.png",
    value: "Wound Care."
  },
]