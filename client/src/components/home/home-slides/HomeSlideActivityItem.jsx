import { Link } from "react-router";
import { useLatestActivity } from "../../../api/activityApi";
import { isBase64, fixBase64URL, isHttpUrl, isValidUrl } from "../../../utils/validateUrls";

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
              {latestActivities.length > 0
                ? 
                latestActivities.map((activity, index) => {
                // Check valid URL (Base64, HTTP or plain URL)
                let imageUrl = "/images/default-workout-image.png"; // alternate image
                if (isBase64(activity.imageUrl)) {
                imageUrl = fixBase64URL(activity.imageUrl); // if Base64 use directly
                } else if (isHttpUrl(activity.imageUrl)) {
                imageUrl = activity.imageUrl; // use if valid HTTP(S) URL 
                } else if (isValidUrl(activity.imageUrl)) {
                imageUrl = activity.imageUrl; // if valid URL (not Base64 and not HTTP)
                }            
                return (
              <div key={index} className="col-md-7">
                <div className="row mar_right">
                  <div className="col-md-6">
                    <div className="agency">
                      <h2>{activity.title}</h2>
                      <figure>
                        <img 
                            src={imageUrl} 
                            alt={activity.title}  
                        />
                      </figure>
                      <p>{activity.description}</p>
                    </div>
                  </div>                  
                </div>
              </div>
            );
        })
    : (
            <p>No activities available for the selected category.</p>
        )}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
