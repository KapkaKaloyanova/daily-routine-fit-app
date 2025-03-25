export default function ActivityCreate() {
  const submitAction = (formData) => {
    const data = Object.fromEntries(formData);

    console.log(data);
    console.log("proba");
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
                      placeholder="Title of the routine"
                      type="type"
                      name="title"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Category type / workout / nutrition / meditation"
                      type="text"
                      name="category"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Short / Long Workout"
                      type="text"
                      name="length"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Low / Medium / High Intensity"
                      type="text"
                      name="intensity"
                    />
                  </div>
                  <div className="col-md-6 ">
                    <input
                      className="form_control"
                      placeholder="Time"
                      type="number"
                      name="time"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Image Url"
                      type="text"
                      name="imageUrl"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Smoothies & Juices / Soups & Stews / Salads / Pasta / Rice / Quinoa"
                      type="text"
                      name="nutrient"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="High Protein / Low Calorie / High Fiber / Anti-Inflammatory / Increase Metabolism"
                      type="type"
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
                      defaultValue={"Description "}
                    />
                  </div>
                  <div className="col-md-12">
                    <button
                      className="send_btn" >
                        Create
                    </button>
                    
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
