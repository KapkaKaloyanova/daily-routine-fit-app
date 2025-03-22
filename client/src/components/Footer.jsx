export default function Footer(){
    return (
        <>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="hedingh3 text_align_left">
                  <h3>About</h3>
                  <p>
                    {" "}
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable sourc
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="hedingh3 text_align_left">
                  <h3>Blog</h3>
                  <p>
                    Which don't look even slightly believable. If you are going
                    to use a passage of Lorem Ipsum, you need to be sure there
                    isn't anythin
                  </p>
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
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="service.html">Explore</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="hedingh3  text_align_left">
                  <h3>Account login</h3>
                  <form id="colof" className="form_subscri">
                    <input
                      className="newsl"
                      placeholder="Email"
                      type="text"
                      name="Email"
                    />
                    <button className="subsci_btn">Log in</button>
                  </form>
                  <ul className="top_infomation">
                    <li>
                      <i className="fa fa-phone" aria-hidden="true" />
                      +359 1234567890
                    </li>
                    <li>
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <a href="Javascript:void(0)">demo@gmail.com</a>
                    </li>
                  </ul>
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
                    <a href="Javascript:void(0)">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>

                  <li>
                    <a href="Javascript:void(0)">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="Javascript:void(0)">
                      <i className="fa fa-tiktok" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <p>
                © 2025 All Rights Reserved. Design based on{" "}
                <a href="https://html.design/"> Free html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}