import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [imageList, setImageList] = useState([
    {
      name: "image1",
      src: "/banner1.jpg",
      title: "Charity Life",
      details: "Charity, Faith and Hope. Help the Homeless. Charity life.",
    },
    {
      name: "image2",
      src: "/banner2.jpg",
      title: "Save Children",
      details: "Donate with Kindness. Every amount Donated by you Counts.",
    },
    {
      name: "image3",
      src: "/banner3.jpg",
      title: "Unconditional Help",
      details:
        "Give a Helping hand. We all need to come together. Our Mission.",
    },
    {
      name: "image4",
      src: "/banner4.jpg",
      title: "Unconditional Help",
      details: "Should Children suffer this way? Don't leave Orphans alone",
    },
  ]);

  useEffect(() => {
    let current = 0;
    const images = setInterval(() => {
      const imagelis = document.getElementById("imageContainer").childNodes;
      console.log(imagelis[0].childNodes);
      const imagelength = imagelis.length;
      imagelis[current].style.opacity = "0";
      imagelis[current].childNodes[0].style.animation =
        "homeh6c 1s ease-in-out forwards";
      imagelis[current].childNodes[1].style.animation =
        "homeh6c 1s ease-in-out forwards";
      imagelis[current].childNodes[3].style.animation =
        "homeh6c 1s ease-in-out forwards";
      current = (current + 1) % imagelength;
      imagelis[current].style.opacity = "1";
      imagelis[current].childNodes[0].style.animation =
        "homeh6 1s 1s ease-in-out forwards";
      imagelis[current].childNodes[1].style.animation =
        "homeh6 1s 1.7s ease-in-out forwards";
      imagelis[current].childNodes[3].style.animation =
        "homeh6 1s 2.5s ease-in-out forwards";
    }, 5000);

    return () => {
      clearInterval(images);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Home - IQ Global Trust</title>
      </Head>
      <div className="trust-home">
        <HomeImageGallery imageList={imageList} />
        <HomeSecction2 />
      </div>
    </>
  );
}
const HomeImageGallery = (props) => {
  return (
    <>
      <div id="imageContainer" className="section">
        {props.imageList.map((a) => (
          <div className="img-col" key={a.name}>
            <h6>{a.title}</h6>
            <h1>{a.details}</h1>
            <img key={a.name} src={a.src} alt={a.name} />
            <button className="btn">read more</button>
          </div>
        ))}
      </div>
    </>
  );
};

const HomeSecction2 = () => {
  return (
    <div className="trust-home2 section">
      <div className="be-box">
        <div className="box-b">be the best</div>
        <div className="box-b">be safe</div>
        <div className="box-b">be open & honest</div>
      </div>
      <div className="sec-1">
        <h1>Over 93% of all Donations go directly to Projects.</h1>
        <span>Under 7% for admin, fundraising, and salaries.</span>
        <b>Thank you for your continued Support</b>
        <button className="btn">
          <i className="bi bi-emoji-heart-eyes-fill"></i>donate now
        </button>
      </div>
      <div className="we-provide">
        <h1>We Provide</h1>
        <div className="provide-box">
          {weProvide.map((a) => (
            <div className="pro-sub-box" key={a.name}>
              <img src={a.src} alt={a.name} />
              <main>
                <b>{a.name}</b>
                <span>{a.dis}</span>
              </main>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mission">
        <h1>
          Our mission is to help people by distributing Money and Service
          globally.
        </h1>
        <div className="mission-box">

        </div>
      </div> */}
    </div>
  );
};

const weProvide = [
  {
    name: "High Quality Education",
    dis: "To provide Education to all sections of society from children to youth.",
    src: "/provide/edu.png",
  },
  {
    name: "Supports for elderly",
    dis: "High quality,person centred supports for people with a disability and the elderly",
    src: "/provide/i2.png",
  },
  {
    name: "Skill Developments",
    dis: "To Conduct Skill Development courses among Students & Youth.",
    src: "/provide/skill.png",
  },
  {
    name: "Assistance with Community and Civic Participation.",
    dis: "We are here to help you to engage with community and to enjoy your hobbies",
    src: "/provide/i4.png",
  },
];
