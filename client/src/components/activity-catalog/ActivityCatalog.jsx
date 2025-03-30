import { useEffect, useState } from "react";
import { Link } from "react-router";
import activityService from "../../api/activityService";

export default function ActivityCatalog() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    activityService.getAll().then(setActivities);
  }, []);

  return (
    <>
      <div className="activity">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center ">
                <h2>Explore</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div id="ho_shad" className="activity_box text_align_left">
                <h3>Exercise</h3>
                <figure>
                  <img src="/images/service1.jpg" alt="#" />
                </figure>
                <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip
                </p>
                <Link className="read_more" to="/activity/workout">
                  Find out
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div id="ho_shad" className="activity_box text_align_left">
                <h3>Nutrition</h3>
                <figure>
                  <img src="/images/service2.jpg" alt="#" />
                </figure>
                <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip
                </p>
                <Link className="read_more" to="/activity/nutrition">
                  Find out
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div id="ho_shad" className="activity_box text_align_left">
                <h3>Meditation</h3>
                <figure>
                  <img src="/images/service3.jpg" alt="#" />
                </figure>
                <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip
                </p>
                <Link className="read_more" to="/activity/meditation">
                  Find out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
