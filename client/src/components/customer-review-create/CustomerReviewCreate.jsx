import { useContext, useState } from "react";
import reviewService from "../../services/reviewService";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";

export default function CustomerReviewCreate({ 
  email, 
  activityId, 
  onCreate, 
}) {
  const navigate = useNavigate();

  const reviewAction = async (formData) => {
      const review = formData.get("review");
      const {email} = useContext(UserContext);
    
      const createdReview = await reviewService.create( email, activityId, review);
      
      onCreate(createdReview);
            
  };


  return (
    <>
      <div className="creates">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage text_align_center">
                <h2>Make review</h2>
              </div>
            </div>

            <div className="col-md-12">
              <form 
                id="create" 
                className="main_form" 
                action={reviewAction}>

                <div className="row">
                  <div className="col-md-12">
                    <textarea
                      className="textarea"
                      placeholder="Review......"
                      type="textarea"
                      id="review"
                      name="review"
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <input
                      className="send_btn"
                      type="submit"
                      value="Add review"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
