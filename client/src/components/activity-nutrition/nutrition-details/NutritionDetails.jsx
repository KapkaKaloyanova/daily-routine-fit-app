import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import activityService from "../../../api/activityService";
import getDirectImageUrl from "../../../utils/directImgUrlDriveLink";

export default function NutritionDetails() {

  const navigate = useNavigate();

  const [ activity, setActivity ] = useState({});
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

    navigate("/activity/nutrition");
  };

  return (
    <>
      <div className="container col-md-12">
        <div id="ho_shad" className="activity_box details_center text_align_center">

          <div className="col-md-6">
          
            <h3>{activity.title}</h3>
            <div className="details_box text_align_center">
              <p>
                <span>Difficulty</span> | <span>Cooking</span> |{" "}
                <span>calories</span>
                <br />
                <span>{activity.difficulty}</span> | <span>{activity.time} min</span> | <span>{activity.calories}</span>
              </p>
            </div>
            <h4>{activity.typeBenefit}</h4>
            <p>
              {activity.description}
            </p>
            <figure>
              {processedImageUrl ? (
                <img src={processedImageUrl} alt={activity.title} />
              ) : (
                <p>No image available</p>
              )}
            </figure>
            <h4>Ingredients</h4>
            <p>
              {activity.ingredients}
            </p>
            <h4>Preparation</h4>
            <p>
              {activity.preparation}
            </p>
          </div>

            {/* Edit/delete/comment nav */}
            <div className="button-container2">
                <Link className="edit_delete read_more" to="Javascript:void(0)">
                  Add review
                </Link>
                <Link className="edit_delete read_more" to={`/activity/nutrition/${activityId}/edit`}>
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
    </>
  );
}
