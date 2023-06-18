import Admin from "@/components/adminBase";

export default function Home() {
  return (
    <Admin>
      <Dashboard />
    </Admin>
  );
}


const Dashboard = () => {
  return (
    <div className="con-home">
      {/* <!-- breadcrumb for the current page location  --> */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb d-flex align-items-center">
          <i className="bi bi-link fs-4 me-2" style={{ color: "#a5adc6" }}></i>
          <li className="breadcrumb-item">
            <a>Admin</a>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
            style={{ color: "#a5adc6" }}
          >
            Dashboard
          </li>
        </ol>
      </nav>

      {/* <!-- dashboard list of events --> */}
      <div className="dashboard-card">
        <div className="card-d">
          <div className="icon-place">
            <img src="/admin/icons/event.png" alt="events" />
          </div>
          <div className="dash-detail">
            <span>No of Events</span>
            <b>20</b>
          </div>
        </div>

        <div className="card-d">
          <div className="icon-place">
            <img src="/admin/icons/volunteer.png" alt="events" />
          </div>
          <div className="dash-detail">
            <span>No of volunteers</span>
            <b>100</b>
          </div>
        </div>

        <div className="card-d">
          <div className="icon-place">
            <img src="/admin/icons/gallery.png" alt="events" />
          </div>
          <div className="dash-detail">
            <span>gallery total</span>
            <b>1020</b>
          </div>
        </div>
      </div>
    </div>
  );
};


const Volunteers = () => {
  return <>volunteers</>;
};
const Gallery = () => {
  return <>gallery</>;
};
const Banner = () => {
  return <>banner</>;
};
