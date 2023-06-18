import Admin from "@/components/adminBase";
import { useRouter } from "next/router";

export default function AdminEvents() {
  const router = useRouter();
  const changeMenu = (n) => {
    router.push(n);
  };
  return (
    <>
      <Admin>
        <Gallery changeMenu={changeMenu} />
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
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ color: "#a5adc6" }}
            >
              Gallery
            </li>
          </ol>
        </nav>

        <div className="gallery-list-event">
          <h1>Events Gallery</h1>
          <div className="gallery-list-box">
            {[1, 2, 3, 4, 5].map((a) => (
              <div className="gallery-card">
                <div className="gallery-details">
                  <img src="/banner/banner4.jpg" />
                  <div className="content">
                    <span className="title">EDUCATION</span>
                    <span className="images">
                      images<b>20</b>
                    </span>
                    <span className="videos">
                      videos<b>10</b>
                    </span>
                  </div>
                </div>
                <button
                  className="btn"
                  onClick={() => props.changeMenu(`/admin/gallery/${a}`)}
                >
                  view
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
