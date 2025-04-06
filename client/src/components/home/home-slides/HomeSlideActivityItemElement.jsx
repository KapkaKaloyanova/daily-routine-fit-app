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
                <div key={index} className="col-md-6">
                  <div className="agency">
                    <h2>{activity.title}</h2>
                    <figure>
                      <img src={imageUrl} alt={activity.title} />
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
