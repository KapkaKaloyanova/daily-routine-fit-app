export default function ReviewCarouselItem({ review, author, isActive }) {
  return (
    <>
      <div className={`carousel-item ${isActive ? "active" : ""}`}>
        <div className="container">
          <div className="carousel-caption relative">
            <div className="row d_flex">
              <div className="col-md-2 col-sm-8">
                <div className="pro_file">
                  <i>
                    <img src="/images/test2.png" alt="#" />
                  </i>
                  <h4>{author?.email ? "User" : "Anonymous"}</h4>
                  <span>{author?.email || "No email"}</span>
                </div>
              </div>
              <div className="col-md-10">
                <div className="test_box text_align_left">
                  <p>{review}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
