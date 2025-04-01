import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import activityService from "../../../api/activityService";
import getDirectImageUrl from "../../../utils/directImgUrlDriveLink";

export default function WorkoutDetails() {
  const navigate = useNavigate();

  const [activity, setActivity] = useState({});
  const { activityId } = useParams();

  const processedImageUrl = activity.imageUrl
    ? getDirectImageUrl(activity.imageUrl)
    : null;

  useEffect(() => {
    (async () => {
      const result = await activityService.getOne(activityId);
      setActivity(result);
    })();
  }, [activityId]);

  const activityDeleteClickHandler = async () => {
    const hasConfirm = confirm(
      `Are you sure you want to delete ${activity.title} activity?`
    );
    if (!hasConfirm) {
      return;
    }
    await activityService.delete(activityId);

    navigate("/activity/workout");
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
            {processedImageUrl ? (
              <img src={processedImageUrl} alt={activity.title} />
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

        {/* Edit/delete/comment nav */}
        <div className="button-container2">
            <Link className="edit_delete read_more" to="Javascript:void(0)">
              Add review
            </Link>
            <Link className="edit_delete read_more" to={`/activity/workout/${activityId}/edit`}>
              Edit
            </Link>
            <button
              onClick={activityDeleteClickHandler}
              className="edit_delete read_more"
            >
              Delete
            </button>
        </div>
      </div>
    </div>
  );
}
