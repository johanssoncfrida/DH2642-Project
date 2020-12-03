import { Link } from "react-router-dom";
import image from "../img/logo.png";

const HeaderView = ({ goTo, links }) => {
  return (
    <nav className="nav-wrapper black">
      <div className="container">
        <Link to={goTo} className="brand-logo">
          <img src={image} alt=""></img>
        </Link>
        {links}
      </div>
    </nav>
  );
};

export default HeaderView;
