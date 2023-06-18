import Admin from "@/components/adminBase";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminEvents() {
  const router = useRouter();
  const [media, setMedia] = useState("image");
  const { id } = router.query;
  const changeMenu = (n) => {
    router.push(n);
  };
  return (
    <>
      <Admin>
        <Gallery
          changeMenu={changeMenu}
          id={id}
          media={media}
          setMedia={setMedia}
        />
      </Admin>
    </>
  );
}

const Gallery = (props) => {
  return (
    <>
      <div className="gallery-event">
        {/* <!-- breadcrumb for the current page location  --> */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb d-flex align-items-center">
            <i
              className="bi bi-link fs-4 me-2"
              style={{ color: "#a5adc6" }}
            ></i>
            <li className="breadcrumb-item">
              <a onClick={() => props.changeMenu("/admin")}>Admin</a>
            </li>
            <li className="breadcrumb-item">
              <a onClick={() => props.changeMenu("/admin/gallery")}>Gallery</a>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ color: "#a5adc6" }}
            >
              {props.id}
            </li>
          </ol>
        </nav>

        <div className="gallery-list-media">
          <h1>Gallery Media</h1>
          <div className="media-type">
            <span
              className={props.media == "image" ? "active" : ""}
              onClick={() => props.setMedia("image")}
            >
              images
            </span>
            <span
              className={props.media == "video" ? "active" : ""}
              onClick={() => props.setMedia("video")}
            >
              videos
            </span>
          </div>
          <div className="list-of-medias">
            {props.media == "image" &&
              imglist.map((a) => (
                <div key={a} className="list-gallery">
                  <img src={a} />
                </div>
              ))}
            {props.media == "video" &&
              vidlist.map((a) => (
                <div key={a} className="list-gallery">
                  <img src={a} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const imglist = [
  "/provide/edu.png",
  "/provide/i2.png",
  "/provide/i4.png",
  "/provide/skill.png",
];

const vidlist = ["/provide/edu.png", "/provide/i2.png"];
