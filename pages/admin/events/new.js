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
              <a onClick={() => props.changeMenu("/admin")}>Admin</a>
            </li>
            <li className="breadcrumb-item">
              <a onClick={() => props.changeMenu("/admin/events")}>Events</a>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ color: "#a5adc6" }}
            >
              New
            </li>
          </ol>
        </nav>
        {/* <!-- add Events --> */}
        <div className="new-event">
          <h1>new event</h1>
          <form action="" method="post">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="number"
                className="form-control"
                id="title"
                name="title"
                placeholder="Title"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="event_for" className="form-label">
                Event For
              </label>
              <input
                type="number"
                className="form-control"
                id="event_for"
                name="event_for"
                placeholder="Event for"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="tumbnail" className="form-label">
                Tumbnail
              </label>
              <input
                className="form-control"
                type="file"
                id="tumbnail"
                name="tumbnail"
                accept="image/*"
              />
              <div id="previewthumnail"></div>
            </div>

            <div className="mb-3">
              <label htmlFor="amount_e" className="form-label">
                Amount Expected
              </label>
              <input
                type="number"
                className="form-control"
                id="amount_e"
                name="amount_e"
                placeholder="amount expected"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="amount_c" className="form-label">
                Amount Collected
              </label>
              <input
                type="number"
                className="form-control"
                id="amount_c"
                name="amount_c"
                placeholder="amount Collected"
              />
            </div>

            <input type="submit" value="Creat Event" className="btn" />

            {/* <div className="gallery-images">
              <h2>Images of the event</h2>
              <div className="mb-3">
                <label htmlFor="event_images" className="form-label">
                  Add Images
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="event_images"
                  name="event_images"
                  multiple
                  accept="image/*"
                />
              </div>
              <div className="gallery-preview" id="gallery-preview"></div>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};
