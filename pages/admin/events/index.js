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
        <Events changeMenu={changeMenu} />
      </Admin>
    </>
  );
}

const Events = (props) => {
  return (
    <>
      <div className="con-event">
        {/* <!-- breadcrumb for the current page location  --> */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb d-flex align-items-center">
            <i
              className="bi bi-link fs-4 me-2"
              style={{ color: "#a5adc6" }}
            ></i>
            <li className="breadcrumb-item">
              <a>Admin</a>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ color: "#a5adc6" }}
            >
              Events
            </li>
          </ol>
        </nav>
        <div className="event-main">
          {/* <!-- add Events --> */}
          <div
            className="event-new"
            onClick={() => props.changeMenu("/admin/events/new")}
          >
            <div className="icon">
              <i className="bi bi-plus-circle"></i>
              <span>add Event</span>
            </div>
            <div className="details">
              Welcome, Admin! Manage content, users, and events effortlessly.
              Utilize the admin dashboard for seamless event creation, updates,
              and event management.
            </div>
          </div>
          {/* <!-- end add Events --> */}
        </div>

        {/* <!-- list of Events --> */}
        <div className="event-list">
          <h2>events list</h2>
          <div className="list-of-events">
            {[1, 2, 3, 4, 5].map((a) => (
              <div className="event-card">
                <div className="advance-tool">
                  <div className="edit">
                    <i class="bi bi-pencil-square"></i>
                    <span>edit</span>
                  </div>
                  <div className="delete">
                    <i class="bi bi-trash3"></i>
                    <span>delete</span>
                  </div>
                </div>
                <img src="/banner/banner4.jpg" />
                <div className="content">
                  <span className="title">EDUCATION</span>
                  <span className="dist">Education for all</span>
                  <p>₹86,800 Donated of ₹310,000</p>
                  <div className="progres">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <!-- end list of Events --> */}
      </div>
    </>
  );
};
