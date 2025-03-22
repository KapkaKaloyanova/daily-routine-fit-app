import { Link } from "react-router";

export default function Header(){
    return (
        <>
            <header className="header-area">
      <div className="container">
        <div className="row d_flex">
          <div className=" col-md-3 col-sm-3">
            <div className="logo">
              <Link to="/">Daily Fit Routine</Link>
            </div>
          </div>
          <div className="col-md-9 col-sm-9">
            <div className="navbar-area">
              <nav className="site-navbar">
                <ul>
                  <li>
                    <Link className="active" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">Explore</Link>
                  </li>
                  <li>
                    <Link to="/services/create">Create</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li className="d_none">
                    <Link to="/login">
                      <i className="fa fa-user" aria-hidden="true" />
                    </Link>
                  </li>
                  <li className="d_none">
                    <Link to="Javascript:void(0)">
                      <i className="fa fa-search" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
                <button className="nav-toggler">
                  <span />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
        </>
    );
}