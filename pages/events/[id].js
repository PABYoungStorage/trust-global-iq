import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
export default function EventId() {
  const router = useRouter();
  const { id } = router.query;
  const [media, setMedia] = useState("image");
  return (
    <>
      <Head>
        <title>Event {id}</title>
      </Head>
      <div className="id-event-list">
        <h1>EDUCATION</h1>
        <div className="media-type">
          <span
            className={media == "image" ? "active" : ""}
            onClick={() => setMedia("image")}
          >
            images
          </span>
          <span
            className={media == "video" ? "active" : ""}
            onClick={() => setMedia("video")}
          >
            videos
          </span>
        </div>

        <div className="list-of-medias">
          {media == "image" &&
            imglist.map((a) => (
              <div key={a} className="list-gallery">
                <img src={a} />
              </div>
            ))}
          {media == "video" &&
            vidlist.map((a) => (
              <div key={a} className="list-gallery">
                <img src={a} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

const imglist = [
  "/provide/edu.png",
  "/provide/i2.png",
  "/provide/i4.png",
  "/provide/skill.png",
];

const vidlist = ["/provide/edu.png", "/provide/i2.png"];
