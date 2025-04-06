import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import reviewService from "../../../services/reviewService";

import getDirectImageUrl from "../../../utils/directImgUrlDriveLink";
import CustomerReviewCreate from "../../customer-review-create/CustomerReviewCreate";
import CustomerReviewShow from "../../customer-review-show/CustomerReviewShow";
import { useDeleteActivity, useOneActivity } from "../../../api/activityApi";
import useAuth from "../../../hooks/useAuth";



export default function WorkoutDetails() {
  const navigate = useNavigate();
  const { email } = useAuth();
  const [reviews, setReviews] = useState([]);
  const { activityId } = useParams();
  const { activity } = useOneActivity(activityId);
  const { deleteActivity } = useDeleteActivity();

  const processedImageUrl = activity.imageUrl
    ? getDirectImageUrl(activity.imageUrl)
    : null;

  useEffect(() => {

      reviewService.getAll(activityId)
        .then(setReviews);
  }, [activityId]);

  const activityDeleteClickHandler = async () => {
    const hasConfirm = confirm(
      `Are you sure you want to delete ${activity.title} activity?`
    );
    if (!hasConfirm) {
      return;
    }
    await deleteActivity(activityId);

    navigate("/activity/workout");
  };

  const reviewCreateHandler = (newReview) => {
    setReviews(state => [...state, newReview] );
  };

  return (
    <>
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
                <p>No image provided</p>
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
            <Link
              className="edit_delete read_more"
              to={"/customers-review/create"}
            >
              Add review
            </Link>
            <Link
              className="edit_delete read_more"
              to={`/activity/workout/${activityId}/edit`}
            >
              Edit
            </Link>
            <button
              onClick={activityDeleteClickHandler}
              className="edit_delete read_more"
            >
              Delete
            </button>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
      {/* <CustomerReviewShow reviews={reviews}/>
      <CustomerReviewCreate 
        email={email} 
        activityId={activityId} 
        onCreate={reviewCreateHandler}
      /> */}
      
    </>
  );
}
