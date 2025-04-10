import { Link, useNavigate, useParams } from "react-router";
import ReviewShow from "../../review-show/ReviewShow";
import ReviewCreate from "../../review-create/ReviewCreate";
import { useDeleteActivity, useOneActivity } from "../../../api/activityApi";
import useAuth from "../../../hooks/useAuth";
import { useCreateReview, useReviews } from "../../../api/reviewsApi";
import processImageUrl from "../../../utils/processImageUrl";
import { useOptimistic } from "react";
import Loader from "../../Loader";
import { v4 as uuid } from 'uuid';

export default function NutritionDetails() {

  const navigate = useNavigate();
  const { email, userId } = useAuth();
  const { activityId } = useParams();
  const { activity } = useOneActivity(activityId);
  const { deleteActivity } = useDeleteActivity();
  const { create } = useCreateReview();
  const { reviews, addReview } = useReviews(activityId);
  const [optimisticReviews, setOptimisticReviews] = useOptimistic( reviews, (state, newReview) => [...state, newReview]);
  
  if(!activity){
    return <Loader />; // or 

  }

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

  const reviewCreateHandler = async (review) => {
    // create Optimistic review
    const newOptimisticReview = {
      _id: uuid(),
      _ownerId: userId,
      activityId,
      review,
      pending: true,
      author: {
        email,
      }
    };

    // optimistic update
    setOptimisticReviews(newOptimisticReview);

    // server update
    const reviewResult = await create( activityId, review );

    // local state update
    addReview({ ...reviewResult, author: { email }})

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
      <ReviewCreate 
        email={email} 
        activityId={activityId} 
        onCreate={reviewCreateHandler}
        />
        {<ReviewShow reviews={reviews}/>}
    </>
  );
}
