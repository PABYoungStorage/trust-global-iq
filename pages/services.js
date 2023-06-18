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

      <div className="rule-head">
        <h1>General Clauses</h1>
      </div>



      <div className="rule">
        {
          GeneralList.map(a => <div className="rule-box" key={a.value}>
            <img alt={a.value} src={a.src} />
            <span>{a.value}</span>
          </div>)

        }
      </div>

      {/* <div className="work">
        <h1>Whom We Work With</h1>
      </div>

      <div className="brand">
        <img alt="" src="/servicons/brand1.png" className="brd"/>
        <img alt="" src="/servicons/brand1.png" />
        <img alt="" src="/servicons/brand1.png" />
        <img alt="" src="/servicons/brand1.png" />
        <img alt="" src="/servicons/brand1.png" />
      </div> */}

    </div>
  );
};


const ServicesList = [
  {
    src: "/servicons/si1.png",
    value: "Expanding knowledge and skills."
  },
  {
    src: "/servicons/si2.png",
    value: "Encouraging personal growth and development."
  },
  {
    src: "/servicons/si3.png",
    value: "Providing equal educational chances."
  },
  {
    src: "/servicons/si4.png",
    value: "Offering guidance and assistance."
  },
  {
    src: "/servicons/si5.png",
    value: "Fostering collaboration and engagement."
  },
  {
    src: "/servicons/si6.png",
    value: "Ensuring education is available to all."
  },
  {
    src: "/servicons/si7.png",
    value: "Offering financial assistance for students."
  },
  {
    src: "/servicons/si10.png",
    value: "Providing guidance and role models."
  },
  {
    src: "/servicons/si11.png",
    value: " Promoting inquiry and innovation."
  },
  {
    src: "/servicons/si12.png",
    value: "Engaging with the wider community."
  },
  {
    src: "/servicons/si13.png",
    value: "Promoting diversity and equity in education."
  },
  {
    src: "/servicons/si14.png",
    value: " Focusing on measurable outcomes and positive change."
  },
];



const GeneralList = [
  {
    src: "/servicons/checkmark.png",
    value: "The Trust is irrevocable."
  },
  {
    src: "/servicons/checkmark.png",
    value: " The Trust will be open to all irrespective of Caste, creed or religion "
  },
  {
    src: "/servicons/checkmark.png",
    value: " The income and funds of the Trust will be solely utilized towards the objects and  no portion of it will be utilized for payment to trustees by way of profit, interest, dividends etc."
  },
  {
    src: "/servicons/checkmark.png",
    value: " The investment of the funds of the Trust will be in accordance with the provisions of Section 13 (1) (d) read with section 11 (5) of the Income-tax Act 1961."
  },
  {
    src: "/servicons/checkmark.png",
    value: " The activities of the Trust will be confined to the territorial areas of India and no activity will be carried out outside India"
  },
  {
    src: "/servicons/checkmark.png",
    value: "The accounts of the Trust will be maintained regularly and the accounts will be audited by qualified Auditor every year."
  },
  {
    src: "/servicons/checkmark.png",
    value: " Any amendments to the Trust Deed will be carried out only with prior approval of Honourable Commissioner of Income-tax, Salem. "
  },
  {
    src: "/servicons/checkmark.png",
    value: " In the event of Dissolution, the assets remaining with the trust on the date of dissolution will be transferred to the Trust established for similar objects."
  },
  {
    src: "/servicons/checkmark.png",
    value: "The Trust will not carry on any activity with the intention of earning profit"
  },

];