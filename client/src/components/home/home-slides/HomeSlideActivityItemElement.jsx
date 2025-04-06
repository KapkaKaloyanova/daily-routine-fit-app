import processImageUrl from "../../../utils/processImageUrl";
import styles from './home-slide-activity.module.css';

export default function HomeSlideActivityItemElement({ latestActivities }) {
  return (
    <>
      <div className="col-md-7">
        <div className="row mar_right">
          {latestActivities.length > 0 
          ? (
            latestActivities.map((activity, index) => {
              // Check valid URLs
              const processedImageUrl = processImageUrl(activity.imageUrl) 

              return (
                <div key={index} className="col-md-6">
                  <div className="agency">
                    <h3 className={styles.h3}>{activity.title}</h3>
                    <figure>
                      <img 
                        className={styles.image}
                        src={processedImageUrl} 
                        alt={activity.title} />
                    </figure>
                    <p className={styles.p}>{activity.description}</p>
                  </div>
                </div>
              );
            })) 
          : (
            <p>No activities available for the selected category.</p>
          )}
        </div>
      </div>
    </>
  );
}
