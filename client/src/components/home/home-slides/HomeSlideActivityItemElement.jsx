import processImageUrl from "../../../utils/processImageUrl";
import {
  isBase64,
  fixBase64URL,
  isHttpUrl,
  isValidUrl,
} from "../../../utils/validateUrls";

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
                    <h2>{activity.title}</h2>
                    <figure>
                      <img src={processedImageUrl} alt={activity.title} />
                    </figure>
                    <p>{activity.description}</p>
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
