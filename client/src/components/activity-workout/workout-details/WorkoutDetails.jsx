import { useEffect, useState } from "react";
import { Link } from "react-router";
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
  const [activity,setActivity] = useState({});
  
  const { activityId } = useParams();

  useEffect(() => {
    (async () => {
      const result = await activityService.getOne(activityId);
      setActivity(result);
    })();
  }, [activityId]);

  return (
    <>
      <div className="container col-md-12">
        <div id="ho_shad" className="activity_box  text_align_center">
          <div className="col-md-8">
            <h3>{activity.title}</h3>
            <div>with {activity.instructor}</div>
            <div className="details_box text_align_center">
              <p>
                <span>{activity.time} MIN</span> | <span>{activity.intensity}</span>
              </p>
            </div>
            <p>{activity.description}</p>
          </div>
          <div className="col-md-8">
            <figure>
              <img src={activity.imageUrl} alt="#" />
            </figure>
            <div className="play_icon">
              <a className="play-btn" href="javascript:void(0)">
                <img src="/images/play_icon.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
