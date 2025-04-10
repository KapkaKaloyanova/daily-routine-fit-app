import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import { UserContext } from "../../../contexts/UserContext";

import CustomerReviewCreate from "../../customer-review-create/CustomerReviewCreate";
import CustomerReviewShow from "../../customer-review-show/CustomerReviewShow";
import { useDeleteActivity, useOneActivity } from "../../../api/activityApi";
import processImageUrl from "../../../utils/processImageUrl";
import { useReviews } from "../../../api/reviewsApi";

export default function NutritionDetails() {

  const navigate = useNavigate();
  const { email, _id: userId } = useContext(UserContext);
  const { activityId } = useParams();
  const { activity } = useOneActivity(activityId);
  const { deleteActivity } = useDeleteActivity();
  const {reviews} = useReviews(activityId);
  

  const processedImageUrl = processImageUrl(activity.imageUrl)

   

  const activityDeleteClickHandler = async () => {
    const hasConfirm = confirm(
      `Are you sure you want to delete ${activity.title} activity?`
    );
    if (!hasConfirm) {
      return;
    }
    await deleteActivity(activityId);

    navigate("/activity/nutrition");
  };

  const reviewCreateHandler = (newReview) => {
    setReviews(state => [...state, newReview] );
  };

  const isOwner = userId === activity._ownerId;


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
                <img src={processedImageUrl} alt={activity.title} />
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
                <Link className="edit_delete read_more" to={"/customers-review/create"} 
                >
                  Add review
                </Link>
                {isOwner && (
                  <>
                  <Link className="edit_delete read_more" to={`/activity/nutrition/${activityId}/edit`}>
                    Edit
                  </Link>
                  <button
                    onClick={activityDeleteClickHandler}
                    className="edit_delete read_more"
                  >
                    Delete
                  </button>
                  </>
                )}
            </div>
        </div>
      </div>
      {/* <CustomerReviewShow reviews={reviews}/> */}
      {/* <CustomerReviewCreate 
        email={email} 
        activityId={activityId} 
        onCreate={reviewCreateHandler}
      /> */}
    </>
  );
}
