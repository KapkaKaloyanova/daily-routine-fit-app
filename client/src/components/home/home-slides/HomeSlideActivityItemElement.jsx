import { Link } from "react-router";
import processImageUrl from "../../../utils/processImageUrl";
import styles from './HomeSlide.module.css';

export default function HomeSlideActivityItemElement({ latestActivities }) {
  
  return (
    <>
      <div className="col-md-7">
        <div className="row mar_right">
          {latestActivities.length > 0 
          ? (
            latestActivities.map((activity) => {
              const processedImageUrl = processImageUrl(activity.imageUrl);
              const activityId = activity._id; 

              return (
                <div key={activityId} className="col-md-6">
                  <div className="agency">
                    <h3 className={styles.h3}>{activity.title}</h3>
                    <figure>
                      <img 
                        className={styles.image}
                        src={processedImageUrl} 
                        alt={activity.title} />
                    </figure>
                    <div className="play_icon">
                        <Link 
                          className="play-btn" 
                          to={`/activity/${activity.category}/${activityId}/details`}
                        >
                          <img src="images/play_icon.png" alt="Play" />
                        </Link>
                    </div>
                    <p className={styles.lineclamp}>{activity.description}</p>
                  </div>
                </div>
              );
            })
            ) 
          : (
                <h3>No activities available for the selected category.</h3>
          )}
        </div>
      </div>
    </>
  );
}
