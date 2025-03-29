import React, { useState } from "react";
import { useNavigate } from "react-router";
import activityService from "../../api/activityService";

export default function ActivityCreate() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const submitAction = async (formData) => {
    const activityData = Object.fromEntries(formData);
    // TODO: make a conditional based on the category
    // TODO: try/catch error handling
    try {
      await activityService.create(activityData);
      if (category === "workout") {
        navigate("/activity/exercise");
      } else if (category === "nutrition") {
        navigate("/activity/nutrition");
      } else if (category === " meditation") {
        navigate("/activity/meditation");
      } 
      else {
        navigate("/activity");
      }
    } catch (error) {
      console.error("Error creating activity", error);
    }
    console.log(category);
  };

  return (
    <>
      <div className="creates">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage text_align_center">
                <h2>Create Activity</h2>
                <p>
                  How are you feeling today? Choose your exercises, nutrition
                  and meditations for a perfect day.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <form id="create" className="main_form" action={submitAction}>
                <div className="row">
                  <div className="col-md-6 ">
                    <input
                      className="form_control"
                      placeholder="Title"
                      type="text"
                      name="title"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <select className="form_control" name="category">
                      <option value="" disabled selected>
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
                    />
                  </div>
                  <div className="col-md-6">
                    <select className="form_control" name="intensity">
                      <option value="" disabled selected>
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
                      // required
                    />
                  </div>
                  <div className="col-md-6">
                    <select className="form_control" name="intensity">
                      <option value="" disabled selected>
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
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      style={{ color: "#d0d0cf" }}
                      className="textarea"
                      placeholder="Description"
                      type="textarea"
                      name="description"
                      defaultValue={"Description"}
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
