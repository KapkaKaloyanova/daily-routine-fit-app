export default function CustomerReviewCreate({
  email,
}) {

  const reviewAction = (formData) =>{
    const review = formData.get('review');

    console.log(email);
    console.log(review);
  }

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
                      placeholder="Review"
                      type="textarea"
                      id="review"
                      name="review"
                    />
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
