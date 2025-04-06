import { useContext } from "react";
import { NavLink } from "react-router";
import { UserContext } from "../../contexts/UserContext";

export default function Header(){
  const { email } = useContext(UserContext);


    return (
        <>
            <header className="header-area">
      <div className="container">
        <div className="row d_flex">
          <div className=" col-md-3 col-sm-3">
            <div className="logo">
              <NavLink to="/">Daily Fit Routine</NavLink>
            </div>
          </div>
          <div className="col-md-9 col-sm-9">
            <div className="navbar-area">
              <nav className="site-navbar">
                <ul>
                  <li>
                    <NavLink to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/activity">Explore</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  {/* Logged-in users */}
                  {email 
                    ? (<>
                        <li>
                          <NavLink to="/activity/create">Create</NavLink>
                        </li>
                        <li>
                          <NavLink to="/logout">Logout {email}</NavLink>
                        </li>
                      </>)
                    : (<>                    
                        <li>
                          <NavLink to="/register">Register</NavLink>
                        </li>
                        <li className="d_none">
                          <NavLink to="/login">
                            <i className="fa fa-user" aria-hidden="true" />
                          </NavLink>
                        </li>
                      </>)
                  }
                  <li className="d_none">
                    <NavLink to="Javascript:void(0)">
                      <i className="fa fa-search" aria-hidden="true" />
                    </NavLink>
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