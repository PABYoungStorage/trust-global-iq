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
      <div className="trust-home">
        <Head>
          <title>Home - IQ Global Trust</title>
        </Head>
        <HomeImageGallery imageList={imageList} />
      </div>
    </>
  );
}
const HomeImageGallery = (props) => {
  return (
    <>
      <div id="imageContainer">
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
