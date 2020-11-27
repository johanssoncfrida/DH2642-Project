import { Link } from "react-router-dom";

const HeaderView = ({ goTo, links }) => {
    return (
        <nav className="nav-wrapper black">
      <div className="container">
        <Link to={goTo} className="brand-logo">
          MovieQuizinezz
        </Link>
        {links}
      </div>
    </nav>
    )
}

export default HeaderView