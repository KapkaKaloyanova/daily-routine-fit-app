import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import reviewService from "../../../services/reviewService";

import CustomerReviewCreate from "../../customer-review-create/CustomerReviewCreate";
import CustomerReviewShow from "../../customer-review-show/CustomerReviewShow";
import { UserContext } from "../../../contexts/UserContext";
import { useDeleteActivity, useOneActivity } from "../../../api/activityApi";
import processImageUrl from "../../../utils/processImageUrl";

export default function MeditationDetails(){
    const navigate = useNavigate();
    const { email, _id: userId } = useContext(UserContext);
    const [reviews, setReviews] = useState([]);
    const { activityId } = useParams();
    const { activity } = useOneActivity(activityId);
    const { deleteActivity } = useDeleteActivity();

    const processedImageUrl = processImageUrl(activity.imageUrl)

    useEffect(() =>{

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
    
        navigate("/activity/meditation");
      };

      const reviewCreateHandler = (newReview) => {
        setReviews(state => [...state, newReview]);
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
            <Link
              className="edit_delete read_more"
              to={`/customers-review/create`}
            >
              Add review
            </Link>
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
      {/* <CustomerReviewShow reviews={reviews}/>
      <CustomerReviewCreate 
        email={email} 
        activityId={activityId} 
        onCreate={reviewCreateHandler}
      /> */}
      
    </>
    );
}