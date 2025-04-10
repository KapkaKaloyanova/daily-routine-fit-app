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

export default function MeditationDetails(){
  const navigate = useNavigate();
  const { email, userId } = useAuth();
  const { activityId } = useParams();
  const { activity } = useOneActivity(activityId);
  const { deleteActivity } = useDeleteActivity();
  const { create } = useCreateReview();
  const { reviews, addReview } = useReviews(activityId);
  const [optimisticReviews, setOptimisticReviews] = useOptimistic( reviews, (state, newReview) => [...state, newReview]);

    if(!activity){
      return <Loader />; // or <div>Loading...</div>
  
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
    
        navigate("/activity/meditation");
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
        <div id="ho_shad" className="activity_box text_align_center">
          <div className="col-md-8">
            <h3>{activity.title}</h3>
            <div className="details_box text_align_center">
              <p>
                <span>{activity.time} MIN</span>
              </p>
            </div>
            <p>{activity.description}</p>
          </div>

          <div className="col-md-8">
            <figure>
                <img src={processedImageUrl} alt={activity.title} />
            </figure>

            <div className="play_icon">
              <a 
                className="play-btn" 
                href={activity.videoLink}>
                <img src="/images/play_icon.png" />
              </a>
            </div>
          </div>

          {/* Edit/delete/comment nav */}
          <div className="button-container2">

            {isOwner && (<>
              <Link
                className="edit_delete read_more"
                to={`/activity/meditation/${activityId}/edit`}
              >
                Edit
              </Link>
              <button
                onClick={activityDeleteClickHandler}
                className="edit_delete read_more"
              >
                Delete
              </button>
            </>)}
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
      <ReviewCreate 
        email={email} 
        activityId={activityId} 
        onCreate={reviewCreateHandler}
      />
      <ReviewShow reviews={optimisticReviews}/>
      
    </>
    );
}