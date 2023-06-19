import { useRouter } from "next/router";
import Head from "next/head";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Event - IQ Global Trust</title>
      </Head>
      <div className="event-home-tab">
        <h1>List of Events</h1>
        <div className="list-of-events">
          {[1, 2, 3, 4, 5].map((a) => (
            <div className="event-card" key={a}>
              <img src="/banner/banner4.jpg" />
              <div className="content">
                <span className="title">EDUCATION</span>
                <span className="dist">Education for all</span>
                <p>₹86,800 Donated of ₹310,000</p>
                <div className="progres">
                  <span></span>
                  <span></span>
                </div>
                <button
                  className="btn"
                  onClick={() => router.push(`/events/${a}`)}
                >
                  View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="help-events">
          <h1>How you can Help</h1>
          <div className="help-details">
            <p>
              <b>&#9989;</b>
              We want to do more and you can help. By committing a small
              fraction of your income to protect children in need, you can help
              save a child and contribute to humanity. You can donate as low as
              INR 500 per month.
            </p>
            <p>
              <b>&#9989;</b>
              While Save the Children appreciates monthly donations more where
              you choose to donate a small fixed amount monthly for us to be
              able to plan our programs for longer term, a single donation can
              also help save a child.
            </p>
            <p>
              <b>&#9989;</b>
              You will get your tax exemption certificate within 15 days of your
              one time donation (quarterly in case of regular donors, who pledge
              monthly donations, after their first month’s donation). You will
              get quarterly updates on how you are making a difference.
            </p>
          </div>
          <button className="btn" onClick={() => router.push("/donate")}>
            i want to donate
          </button>
        </div>
      </div>
    </>
  );
}
