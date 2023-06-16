import { useRouter } from "next/router";
import { useEffect } from "react";
const Header = () => {
  const router = useRouter();
  const ChangeMenu = (name) => {
    router.push(name);
    Menu();
  };
  const Menu = () => {
    const res = document.getElementsByClassName("res-menu")[0].childNodes;
    const nav = document.getElementById("nav");
    if (nav.style.height == "" && document.body.clientWidth <= 600) {
      nav.style.height = "250px";
      res[0].style.animation = "resclose 0.5s ease-in-out forwards";
      res[1].style.animation = "resclose2 0.01s ease-in-out forwards";
      res[2].style.animation = "resclose3 0.5s ease-in-out forwards";
    } else {
      nav.style.height = "";
      res[0].style.animation = "resclosen 0.5s ease-in-out forwards";
      res[1].style.animation = "resclose2n 0.2s ease-in-out forwards";
      res[2].style.animation = "resclose3n 0.5s ease-in-out forwards";
    }
  };
  useEffect(() => {
    const link = document.getElementsByClassName("link");
    let rpath = router.pathname.split("/");
    rpath.shift(0);
    for (let i = 0; i < link.length; i++) {
      if (
        link[i].getAttribute("name") == rpath[0] ||
        (link[i].getAttribute("name") == "home" && rpath[0] == "")
      ) {
        link[i].className = "link active";
      } else {
        link[i].className = "link";
      }
    }
  }, [ChangeMenu]);

  return (
    <header>
      <div className="logoContainer">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h3>IQ Global Trust</h3>
      </div>
      <nav className="nav" id="nav">
        <span name="home" className="link" onClick={() => ChangeMenu("/")}>
          home
        </span>
        <span name="about" className="link" onClick={() => ChangeMenu("about")}>
          about
        </span>
        <span
          name="causes"
          className="link"
          onClick={() => ChangeMenu("causes")}
        >
          causes
        </span>
        <span
          name="services"
          className="link"
          onClick={() => ChangeMenu("services")}
        >
          services
        </span>
        <span
          name="contact"
          className="link"
          onClick={() => ChangeMenu("contact")}
        >
          contact
        </span>
      </nav>
      <div className="btn donate">donate now</div>
      <div className="res-menu" onClick={Menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
