import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <a
        className="social"
        href="https://www.linkedin.com/in/eduardo-cruz-b9928562/"
        target="blank"
      >
        <BsLinkedin size={28} color="#fff" />
      </a>
      <a
        className="social"
        href="https://www.instagram.com/edubehemoth/"
        target="blank"
      >
        <BsInstagram size={28} color="#fff" />
      </a>
      <Link to="/links" className="menu-item">
        Meus Links
      </Link>
    </div>
  );
}
