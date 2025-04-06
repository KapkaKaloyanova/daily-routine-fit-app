import { Link } from "react-router";
import { useLatestActivity } from "../../../api/activityApi";

export default function HomeSlideNutrition() {
  const { latestActivities } = useLatestActivity("nutrition");

  console.log(latestActivities);
  return (
    <>
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
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint
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
    </>
  );
}
