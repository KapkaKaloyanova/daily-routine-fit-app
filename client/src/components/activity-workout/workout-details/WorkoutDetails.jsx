import { useEffect, useState } from "react";
import { useParams } from "react-router";
import activityService from "../../../api/activityService";

export default function WorkoutDetails({
  _id,
  title,
  category,
  time,
  intensity,
  instructor,
  imageUrl,
  videoLink,
  description,
}) {
  const [activity, setActivity] = useState({});
  const { activityId } = useParams();

  useEffect(() => {
    (async () => {
      const result = await activityService.getOne(activityId);
      setActivity(result);
    })();
  }, [activityId]);

  // Function to convert Google Drive URL to direct image URL
  const getDirectImageUrl = (url) => {
    if (!url) {
      return null;
    }
    const regex = /\/file\/d\/(.*)\/view/;
    const match = url.match(regex);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return url; // Return original URL if not a Google Drive link
  };

  return (
    <div className="container col-md-12">
      <div id="ho_shad" className="activity_box text_align_center">
        <div className="col-md-8">
          <h3>{activity.title}</h3>
          <div className="details_box text_align_center">
            <p>
              <span>{activity.time} MIN</span> |{" "}
              <span>{activity.intensity}</span>
            </p>
          </div>
          <p>{activity.description}</p>
        </div>

        <div className="col-md-8">
          <figure>
            {activity.imageUrl ? (
              <img
                src={getDirectImageUrl(activity.imageUrl)}
                alt={activity.title}
              />
            ) : (
              <p>No image available</p>
            )}
          </figure>

          <div className="play_icon">
            <a className="play-btn" href="javascript:void(0)">
              <img src="/images/play_icon.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
