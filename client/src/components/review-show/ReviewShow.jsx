import ReviewCarouselItem from "./ReviewCarouselItem";


export default function ReviewShow({
  reviews,
}) {


  return (
    <>
      <div className="customers">
        <div className="clients_bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="titlepage text_align_center">
                  <h2>What is Says Customers</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* start slider section */}
        <div
          id="myCarousel"
          className="carousel slide clients_banner"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {reviews.map((_, index) => (

              <li
              key={index}
              data-target="#myCarousel"
              data-slide-to={index}
              className={index === 0 ? "active" : ""}
              />
              ))}
          </ol>

          <div className="carousel-inner">

                {reviews.length > 0 
                  ? (reviews.map(({_id, review, pending, author }, index) => (
                    <ReviewCarouselItem 
                      key={_id}
                      review={review}
                      author={author}
                      isActive={index === 0} // set active for first item
                    />
                  )))
                  : (
                    <h1 className="titlepage text_align_center"> No Reviews yet. </h1>
                  )}
                </div>

          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
}
