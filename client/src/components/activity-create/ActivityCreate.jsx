import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useCreateActivity } from "../../api/activityApi";

export default function ActivityCreate() {
  
  const navigate = useNavigate();
  const { create: createActivity } = useCreateActivity();

  const [category, setCategory] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const submitAction = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const activityData = Object.fromEntries(formData);

    try {
      await createActivity(activityData);
      if (category === "workout") {
        navigate("/activity/workout");
      } else if (category === "nutrition") {
        navigate("/activity/nutrition");
      } else if (category === "meditation") {
        navigate("/activity/meditation");
      } else {
        navigate("/activity"); // default navigation
      }
    } catch (error) {
      console.error("Error creating activity", error);
    }
  };

  return (
    <>
      <div className="creates">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage text_align_center">
                <h2>Create</h2>
                <p>
                  How are you feeling today? Create your workouts, nutrition and
                  meditations for a perfect day.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <form
                id="create"
                className="main_form"
                action="#"
                onSubmit={submitAction}
              >
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

                  {/* Category Select */}

                  <div className="col-md-6">
                    <select
                      className="form_control"
                      name="category"
                      value={category}
                      onChange={ handleCategoryChange }
                      required
                    >
                      <option value="" disabled>
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
                    />
                  </div>

                  {/* Conditional Fields Based on Category */}

                  {category === "workout" && (
                  <>
                    <div className="col-md-6">
                      <select
                        className="form_control"
                        name="intensity"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Intensity
                        </option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
  
                  </>
                  )}

                  {/* Common Fields */}

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

                  {/* Conditional Fields Based on Category */}

                  {(category === "workout" || category === "meditation") && (
                  <>
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
                </>
                )}

                {category === "nutrition" && (
                <>
                  <div className="col-md-6">
                    <select
                      className="form_control"
                      name="foodType"
                      defaultValue=""
                    >
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
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Difficulty"
                      type="text"
                      name="difficulty"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="calories"
                      type="number"
                      name="calories"
                    />
                  </div>
  
                  <div className="col-md-12">
                    <textarea
                      style={{ color: "#d0d0cf" }}
                      className="textarea"
                      placeholder="Ingredients"
                      type="textarea"
                      name="ingredients"
                      defaultValue={""}
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      style={{ color: "#d0d0cf" }}
                      className="textarea"
                      placeholder="Preparation"
                      type="textarea"
                      name="preparation"
                      defaultValue={""}
                    />
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
                      defaultValue={""}
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
