import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import activityService from "../../api/activityService";

export default function ActivityWorkoutEdit({
    _id,
  title,
  category,
  time,
  intensity,
  foodType,
  imageUrl,
  videoLink,
  description,
}){
    // const navigate = useNavigate();
    const { activityId } = useParams();
    const [activity, setActivity] = useState({});

    useEffect(() => {
      (async () => {
        const result = await activityService.getOne(activityId);
        setActivity(result);
      })();
    }, [activityId]);

    return (
        <>
        <div className="creates">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage text_align_center">
                <h2>Edit</h2>
              </div>
            </div>
            <div className="col-md-12">
              <form id="create" className="main_form" action="">
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
                  <div className="col-md-6">
                    <select className="form_control" name="category" defaultValue={activity.category}>
                      <option value="" disabled >
                        Category type
                      </option>
                      <option value="workout">Workout</option>
                      <option value="nutrition">Nutrition</option>
                      <option value="meditation">Meditation</option>
                      required
                    </select>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Duration / Preparation time"
                      type="number"
                      name="time"
                      defaultValue={activity.time}
                    />
                  </div>
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
                  <div className="col-md-6">
                    <select className="form_control" name="foodType" defaultValue={activity.foodType}>
                      <option value="" disabled >
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
                      defaultValue={activity.typeBenefit}
                    />
                  </div>
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
                    <button className="send_btn">Create</button>
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