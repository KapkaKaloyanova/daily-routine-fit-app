import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import activityService from "../../api/activityService";

export default function ActivityEdit(){
    const navigate = useNavigate();
    const { activityId } = useParams();
    const [activity, setActivity] = useState({});
    const [category, setCategory] = useState("");

    useEffect(() => {
      (async () => {
        const result = await activityService.getOne(activityId);
        setActivity(result);
        setCategory(result.category);
      })();
    }, [activityId]);

    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };

    const submitAction = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const activityData =  Object.fromEntries(formData);
      await activityService.edit(activityId, activityData);

      navigate(`/activity/${activityData.category}/${activityId}/details`);
    }

    return (
        <>
        <div className="creates">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage text_align_center">
                <h2>Edit Activity</h2>
              </div>
            </div>
            <div className="col-md-12">
              <form id="create" className="main_form" action="#" onSubmit={submitAction}>

                <div className="row">
                  <div className="col-md-6 ">
                    <input
                      className="form_control"
                      placeholder="Title"
                      type="text"
                      name="title"
                      defaultValue={activity.title}
                      required
                    />
                  </div>

                  {/* Category Select */}

                  <div className="col-md-6">
                    <select 
                      className="form_control" 
                      name="category" 
                      value={category}
                      onChange={ handleCategoryChange } // update category
                      required
                    > 
                      <option value="" disabled >
                        Category type
                      </option>
                      <option value="workout">Workout</option>
                      <option value="nutrition">Nutrition</option>
                      <option value="meditation">Meditation</option>
                    </select>
                  </div>

                  {/* Common Fields */}

                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Duration / Preparation time"
                      type="number"
                      name="time"
                      defaultValue={activity.time}
                    />
                  </div>

                  {/* Conditional rendering for intensity (only for workout) */}
                  {category === "workout" && (

                      <div className="col-md-6">
                        <select className="form_control" name="intensity" defaultValue={activity.intensity}>
                          <option value="" disabled >
                            Intensity
                          </option>
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                        </select>
                      </div>
                  )}

                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Image link"
                      type="url"
                      name="imageUrl"
                      defaultValue={activity.imageUrl}
                      // required
                      // pattern="https?://.*\.(jpg|jpeg|png|gif|bmp|webp)"  // Only allow image links
                    />
                  </div>

                {/* Conditional rendering for video link (only for workout or meditation) */}
                {(category === "workout" || category === "meditation") && (

                  <div className="col-md-6">
                    <input
                      className="form_control"
                      id="videoLink"
                      type="url"
                      name="videoLink"
                      placeholder="Video link"
                      defaultValue={activity.videoLink}
                      // required
                    />
                  </div>
                )}

                  {/* Conditional rendering for food type (only for nutrition) */}
                  {category === "nutrition" && (
                  <>
                    <div className="col-md-6">
                        <select className="form_control" name="foodType" defaultValue={activity.foodType}>
                          <option value="" disabled>
                            Nutrient
                          </option>
                          <option value="smoothies-juices">
                            Smoothies & Juices
                          </option>
                          <option value="soups-stews">Soups & Stews</option>
                          <option value="salad">Salad</option>
                          <option value="pasta">Pasta</option>
                          <option value="rice">Rice</option>
                          <option value="quinoa">Quinoa</option>
                        </select>
                    </div>
                        
                    <div className="col-md-6">
                      <input
                        className="form_control"
                        placeholder="High Protein / Low Calorie / High Fiber / Anti-Inflammatory / Increase Metabolism"
                        type="text"
                        name="typeBenefit"
                        defaultValue={activity.typeBenefit} />
                    </div>
                  </>
                  )}

                  <div className="col-md-12">
                    <textarea
                      style={{ color: "#d0d0cf" }}
                      className="textarea"
                      placeholder="Description"
                      type="textarea"
                      name="description"
                      defaultValue={activity.description}
                    />
                  </div>

                  <div className="col-md-12">
                    <button className="send_btn">Edit</button>
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