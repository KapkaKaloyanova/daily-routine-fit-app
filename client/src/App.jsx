
function App() {
  return (
    <>
  {/* body */}
  {/* loader  */}
  <div className="loader_bg">
    <div className="loader">
      <img src="images/loading.gif" alt="#" />
    </div>
  </div>
  {/* end loader */}
  <div className="full_bg">
    {/* header */}
    <header className="header-area">
      <div className="container">
        <div className="row d_flex">
          <div className=" col-md-3 col-sm-3">
            <div className="logo">
              <a href="index.html">Bliss</a>
            </div>
          </div>
          <div className="col-md-9 col-sm-9">
            <div className="navbar-area">
              <nav className="site-navbar">
                <ul>
                  <li>
                    <a className="active" href="index.html">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="service.html">Service</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact us</a>
                  </li>
                  <li className="d_none">
                    <a href="Javascript:void(0)">
                      <i className="fa fa-user" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="d_none">
                    <a href="Javascript:void(0)">
                      <i className="fa fa-search" aria-hidden="true" />
                    </a>
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
    {/* end header inner */}
    {/* top */}
    <div className="slider_main">
      {/* carousel code */}
      <div id="banner1" className="carousel slide">
        <ol className="carousel-indicators">
          <li data-target="#banner1" data-slide-to={0} className="active" />
          <li data-target="#banner1" data-slide-to={1} />
          <li data-target="#banner1" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          {/* first slide */}
          <div className="carousel-item active">
            <div className="container">
              <div className="carousel-caption relative">
                <div className="row d_flex">
                  <div className="col-md-5">
                    <div className="creative">
                      <h1>
                        Spa <br />
                        Center{" "}
                      </h1>
                      <p>
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint
                      </p>
                      <a className="read_more" href="Javascript:void(0)">
                        Contact us
                      </a>
                      <a className="read_more" href="Javascript:void(0)">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="row mar_right">
                      <div className="col-md-6">
                        <div className="agency">
                          <figure>
                            <img src="images/img1.png" alt="#" />
                          </figure>
                          <div className="play_icon">
                            <a className="play-btn" href="javascript:void(0)">
                              <img src="images/play_icon.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="agency">
                          <figure>
                            <img src="images/img2.png" alt="#" />
                          </figure>
                          <div className="play_icon">
                            <a className="play-btn" href="javascript:void(0)">
                              <img src="images/play_icon.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second slide */}
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption relative">
                <div className="row d_flex">
                  <div className="col-md-5">
                    <div className="creative">
                      <h1>
                        Spa <br />
                        Center{" "}
                      </h1>
                      <p>
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint
                      </p>
                      <a className="read_more" href="Javascript:void(0)">
                        Contact us
                      </a>
                      <a className="read_more" href="Javascript:void(0)">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="row mar_right">
                      <div className="col-md-6">
                        <div className="agency">
                          <figure>
                            <img src="images/img1.png" alt="#" />
                          </figure>
                          <div className="play_icon">
                            <a className="play-btn" href="javascript:void(0)">
                              <img src="images/play_icon.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="agency">
                          <figure>
                            <img src="images/img2.png" alt="#" />
                          </figure>
                          <div className="play_icon">
                            <a className="play-btn" href="javascript:void(0)">
                              <img src="images/play_icon.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* third slide*/}
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption relative">
                <div className="row d_flex">
                  <div className="col-md-5">
                    <div className="creative">
                      <h1>
                        Spa <br />
                        Center{" "}
                      </h1>
                      <p>
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint
                      </p>
                      <a className="read_more" href="Javascript:void(0)">
                        Contact us
                      </a>
                      <a className="read_more" href="Javascript:void(0)">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="row mar_right">
                      <div className="col-md-6">
                        <div className="agency">
                          <figure>
                            <img src="images/img1.png" alt="#" />
                          </figure>
                          <div className="play_icon">
                            <a className="play-btn" href="javascript:void(0)">
                              <img src="images/play_icon.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="agency">
                          <figure>
                            <img src="images/img2.png" alt="#" />
                          </figure>
                          <div className="play_icon">
                            <a className="play-btn" href="javascript:void(0)">
                              <img src="images/play_icon.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* controls */}
        <a
          className="carousel-control-prev"
          href="#banner1"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-angle-left" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#banner1"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-angle-right" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
  {/* end banner */}
  {/* appointment */}
  <div className="appointment">
    <div className="container">
      <div className="row">
        <div className="col-md-12 ">
          <div className="titlepage text_align_center">
            <h2>Make Appointment</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <form id="request" className="main_form">
            <div className="row">
              <div className="col-md-6 ">
                <input
                  className="form_control"
                  placeholder="Your name"
                  type="type"
                  name=" Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form_control"
                  placeholder="Email"
                  type="type"
                  name="Email"
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form_control"
                  placeholder="Phone Number"
                  type="type"
                  name="Phone Number"
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form_control"
                  placeholder="Select Massage spa"
                  type="type"
                  name="Select"
                />
              </div>
              <div className="col-md-6 ">
                <input
                  className="form_control"
                  placeholder="Time"
                  type="type"
                  name=" Time"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form_control"
                  id="my_date_picker"
                  placeholder="Select Date"
                />
              </div>
              <div className="col-md-12">
                <textarea
                  style={{ color: "#d0d0cf" }}
                  className="textarea"
                  placeholder="Message"
                  type="type"
                  name="message"
                  defaultValue={"message "}
                />
              </div>
              <div className="col-md-12">
                <button className="send_btn">Send Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* end appointment */}
  {/* services */}
  <div className="services">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage text_align_center ">
            <h2>Our Massage Services</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div id="ho_shad" className="services_box text_align_left">
            <h3>Ayurveda Spa</h3>
            <figure>
              <img src="images/service1.jpg" alt="#" />
            </figure>
            <p>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
            <a className="read_more" href="service.html">
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div id="ho_shad" className="services_box text_align_left">
            <h3>Massage Spa</h3>
            <figure>
              <img src="images/service2.jpg" alt="#" />
            </figure>
            <p>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
            <a className="read_more" href="service.html">
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div id="ho_shad" className="services_box text_align_left">
            <h3>Luxury Spa</h3>
            <figure>
              <img src="images/service3.jpg" alt="#" />
            </figure>
            <p>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
            <a className="read_more" href="service.html">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end services */}
  {/* priceing */}
  <div className="priceing">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage text_align_center">
            <h2>Our Priceing </h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="row">
            <div className="col-md-6">
              <div className="our_priceing text_align_center">
                <div className="our_pri">
                  <h3>Regular Price</h3>
                  <span>
                    $<strong>50</strong>
                  </span>
                  <p>
                    sed do eiusmod <br />
                    tempor incididunt ut <br />
                    labore et dolore
                    <br /> magna aliqua. Utenim <br /> ad minim aliquip
                  </p>
                </div>
                <a className="read_more" href="javascript:void(0)">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="our_priceing text_align_center">
                <div className="our_pri">
                  <h3>Special Price</h3>
                  <span>
                    $<strong>100</strong>
                  </span>
                  <p>
                    sed do eiusmod <br />
                    tempor incididunt ut <br />
                    labore et dolore
                    <br /> magna aliqua. Utenim <br /> ad minim aliquip
                  </p>
                </div>
                <a className="read_more" href="javascript:void(0)">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end priceing */}
  {/* blog */}
  <div className="blog">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage text_align_center ">
            <h2>Latest Blog</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu
            </p>
          </div>
        </div>
      </div>
      <div className="row d_flex">
        <div className=" col-md-4">
          <div className="latest">
            <figure>
              <img src="images/blog1.jpg" alt="#" />
            </figure>
            <span>16 March</span>
            <div className="nostrud">
              <h3>Quis Nostrud </h3>
              <p>
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
              </p>
              <a className="read_more" href="blog.html">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className=" col-md-4">
          <div className="latest">
            <figure>
              <img src="images/blog2.jpg" alt="#" />
            </figure>
            <span className="yellow">17 March</span>
            <div className="nostrud">
              <h3>Veniam, Quis </h3>
              <p>
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
              </p>
              <a className="read_more" href="blog.html">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className=" col-md-4">
          <div className="latest">
            <figure>
              <img src="images/blog3.jpg" alt="#" />
            </figure>
            <span>18 March</span>
            <div className="nostrud">
              <h3>Tempor incididunt </h3>
              <p>
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
              </p>
              <a className="read_more" href="blog.html">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end blog */}
  {/* about */}
  <div className="about">
    <div className="container_width">
      <div className="row d_flex grig">
        <div className="col-md-6">
          <div className="about_img">
            <figure>
              <img src="images/about_img.jpg" alt="#" />
            </figure>
          </div>
        </div>
        <div className="col-md-6 order">
          <div className="titlepage text_align_left">
            <h2>About Our Center</h2>
            <p>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquipsed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
            </p>
            <a className="read_more" href="about.html">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end about */}
  {/* customers */}
  <div className="customers">
    <div className="clients_bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="titlepage text_align_center">
              <h2>What is Says Customers</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* start slider section */}
    <div
      id="myCarousel"
      className="carousel slide clients_banner"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to={0} className="active" />
        <li data-target="#myCarousel" data-slide-to={1} />
        <li data-target="#myCarousel" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="carousel-caption relative">
              <div className="row d_flex">
                <div className="col-md-2 col-sm-8">
                  <div className="pro_file">
                    <i>
                      <img src="images/test2.png" alt="#" />
                    </i>
                    <h4>English.Many</h4>
                    <span>normal distribution</span>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="test_box text_align_left">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="carousel-caption relative">
              <div className="row d_flex">
                <div className="col-md-2 col-sm-8">
                  <div className="pro_file">
                    <i>
                      <img src="images/test2.png" alt="#" />
                    </i>
                    <h4>English.Many</h4>
                    <span>normal distribution</span>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="test_box text_align_left">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="carousel-caption relative">
              <div className="row d_flex">
                <div className="col-md-2 col-sm-8">
                  <div className="pro_file">
                    <i>
                      <img src="images/test2.png" alt="#" />
                    </i>
                    <h4>English.Many</h4>
                    <span>normal distribution</span>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="test_box text_align_left">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <i className="fa fa-angle-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <i className="fa fa-angle-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
  {/* end customers */}
  {/*  footer */}
  <footer>
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
                      <a href="service.html">Service</a>
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
                  <ul className="top_infomation">
                    <li>
                      <i className="fa fa-phone" aria-hidden="true" />
                      +01 1234567890
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
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="Javascript:void(0)">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="Javascript:void(0)">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <p>
                © 2020 All Rights Reserved. Design by{" "}
                <a href="https://html.design/"> Free html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end footer */}
  {/* Javascript files*/}
    </>
  );
}

export default App;
