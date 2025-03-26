import { Link } from "react-router";
import Reviews from "../Reviews";

export default function Slider(){
    return (
        <>
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
                        Explore <br />
                        Exercises{" "}
                      </h1>
                      <p>
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint
                      </p>
                      {/* <Link className="read_more" to="Javascript:void(0)">
                        Contact us
                      </Link> */}
                      <Link className="read_more" to="/activity/exercise">
                        Find out
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="row mar_right">
                      <div className="col-md-6">
                        <div className="agency">
                          <figure>
                            <img src="/images/img1.png" alt="#" />
                          </figure>
                          <div className="play_icon">
                            <Link className="play-btn" to="javascript:void(0)">
                              <img src="/images/play_icon.png" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="agency">
                          <figure>
                            <img src="/images/img7.png" alt="#" />
                          </figure>
                          <div className="play_icon">
                            <Link className="play-btn" to="javascript:void(0)">
                              <img src="/images/play_icon.png" />
                            </Link>
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
                        Explore <br />
                        Meditation{" "}
                      </h1>
                      <p>
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint
                      </p>
                      {/* <Link className="read_more" to="Javascript:void(0)">
                        Contact us
                      </Link> */}
                      <Link className="read_more" to="/activity/meditation">
                        Find out
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="row mar_right">
                      <div className="col-md-6">
                        <div className="agency">
                          <figure>
                            <img src="/images/img2.png" alt="#" />
                          </figure>
                          <div className="play_icon">
                            <Link className="play-btn" to="javascript:void(0)">
                              <img src="/images/play_icon.png" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="agency">
                          <figure>
                            <img src="/images/img4.png" alt="#" />
                          </figure>
                          <div className="play_icon">
                            <Link className="play-btn" to="javascript:void(0)">
                              <img src="/images/play_icon.png" />
                            </Link>
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
                        Explore <br />
                        Nutrition{" "}
                      </h1>
                      <p>
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint
                      </p>
                      {/* <Link className="read_more" to="Javascript:void(0)">
                        Contact us
                      </Link> */}
                      <Link className="read_more" to="/activity/nutrition">
                        Find out
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="row mar_right">
                      <div className="col-md-6">
                        <div className="agency">
                          <figure>
                            <img src="/images/img5.png" alt="#" />
                          </figure>
                          <div className="play_icon">
                            <Link className="play-btn" to="javascript:void(0)">
                              <img src="/images/play_icon.png" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="agency">
                          <figure>
                            <img src="/images/img6.png" alt="#" />
                          </figure>
                          <div className="play_icon">
                            <Link className="play-btn" to="javascript:void(0)">
                              <img src="/images/play_icon.png" />
                            </Link>
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
        {/* controls from bootstrap */}
               <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
               <i class="fa fa-angle-left" aria-hidden="true"></i>
               <span class="sr-only">Previous</span>
               </a>
               <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
               <i class="fa fa-angle-right" aria-hidden="true"></i>
               <span class="sr-only">Next</span>
               </a>
      </div>
    </div>
    <Reviews />
        </>
    );
}