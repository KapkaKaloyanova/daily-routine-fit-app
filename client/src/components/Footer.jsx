import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="hedingh3 text_align_left">
                    <h3>Contact us</h3>
                    <ul className="top_infomation">
                      <li>
                        <i className="fa fa-phone" aria-hidden="true" />
                        +359 1234567890
                      </li>
                      <li>
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <Link to="Javascript:void(0)">demo@gmail.com</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="hedingh3 text_align_left">
                    <h3>Explore</h3>
                    <ul className="menu_footer">
                      <li>
                        <Link to="/activity/workout">Workout</Link>
                      </li>
                      <li>
                        <Link to="/activity/nutrition">Nutrition</Link>
                      </li>
                      <li>
                        <Link to="/activity/meditation">Meditation</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="hedingh3 text_align_left">
                    <h3>Menu</h3>
                    <ul className="menu_footer">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/activity">Explore</Link>
                      </li>
                      <li>
                        <Link to="#">Contact us</Link>
                      </li>
                      <li>
                        <Link to="#">Customer Review</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="hedingh3  text_align_left">
                    <h3>Newsletter</h3>
                    <form id="colof" className="form_subscri">
                      <input
                        className="newsl"
                        placeholder="Email"
                        type="text"
                        name="Email"
                      />
                      <button className="subsci_btn">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="follow text_align_center">
                  <h3>Follow Us</h3>
                  <ul className="social_icon ">
                    <li>
                      <Link to="Javascript:void(0)">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </Link>
                    </li>

                    <li>
                      <Link to="Javascript:void(0)">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link to="Javascript:void(0)">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <p>
                  © 2025 All Rights Reserved. Design based on{" "}
                  <Link to="https://html.design/"> Free html Templates</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
