
export default function ReviewCreate({ 
  onCreate, 
}) {

  const reviewAction = async (formData) => {
      const review = formData.get("review");
  
      if (onCreate && typeof onCreate === 'function') {
        onCreate(review);  
    } else {
        console.error('onCreate is not a function');
    }
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
                // action={reviewAction}
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  reviewAction(formData);
                }}>

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
