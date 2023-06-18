import Admin from "@/components/adminBase";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminEvents() {
  const router = useRouter();
  const [media, setMedia] = useState("exist");
  const changeMenu = (n) => {
    router.push(n);
  };
  return (
    <>
      <Admin>
        <Volunteers changeMenu={changeMenu} media={media} setMedia={setMedia} />
      </Admin>
    </>
  );
}

const Volunteers = (props) => {
  return (
    <>
      <div className="con-volunteer">
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

            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ color: "#a5adc6" }}
            >
              volunteer
            </li>
          </ol>
        </nav>
        <div className="volunteer-list">
          <h1>volunteers list</h1>
          <div className="volunteer-select">
            <span
              className={props.media == "exist" ? "active" : ""}
              onClick={() => props.setMedia("exist")}
            >
              exist volunteer
            </span>
            <span
              className={props.media == "new" ? "active" : ""}
              onClick={() => props.setMedia("new")}
            >
              new volunteer
            </span>
          </div>
          <div className="list-of-volunteer">
            {props.media == "exist" &&
              users.map((a, i) => (
                <div className="volunteer-card" key={a.name + i}>
                  <img src={a.src} />
                  <span>
                    name <b>{a.name}</b>
                  </span>
                  <span>
                    country <b>{a.country}</b>
                  </span>
                  <span>
                    start <b>{a.state}</b>
                  </span>
                </div>
              ))}
              {props.media == "new" &&
              users.map((a, i) => (
                <div className="volunteer-card" key={a.name + i}>
                  <img src={a.src} />
                  <span>
                    name <b>{a.name}</b>
                  </span>
                  <span>
                    country <b>{a.country}</b>
                  </span>
                  <span>
                    start <b>{a.state}</b>
                  </span>
                  <div className="appr">
                    <button className="btn deny">deny</button>
                    <button className="btn accept">accept</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const users = [
  {
    name: "sadf",
    src: "/banner/banner2.jpg",
    country: "india",
    state: "TamilNadu",
  },
  {
    name: "sadf",
    src: "/banner/banner2.jpg",
    country: "india",
    state: "TamilNadu",
  },
  {
    name: "sadf",
    src: "/banner/banner2.jpg",
    country: "india",
    state: "TamilNadu",
  },
  {
    name: "sadf",
    src: "/banner/banner2.jpg",
    country: "india",
    state: "TamilNadu",
  },
];
