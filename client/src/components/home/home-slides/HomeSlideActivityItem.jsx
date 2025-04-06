import { Link } from "react-router";
import { useLatestActivity } from "../../../api/activityApi";
import HomeSlideActivityItemElement from "./HomeSlideActivityItemElement";

export default function HomeSlideActivityItem({category, index }) {
  const { latestActivities } = useLatestActivity({category});

  return (
    <>
      
      <div className={`carousel-item ${index === 0 ? "active" : ""} `} >
        <div className="container">
          <div className="carousel-caption relative">
            <div className="row d_flex">
              <div className="col-md-5">
                <div className="creative">
                  <h1>
                    Explore <br />
                    {category}
                  </h1>
                  <p>
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint
                  </p>
                  <Link className="read_more" to={`/activity/${category}`}>
                    More {category}
                  </Link>
                </div>
              </div>
              <HomeSlideActivityItemElement latestActivities={latestActivities} />

            </div>
          </div>
        </div>
      </div>

    </>
  );
}
