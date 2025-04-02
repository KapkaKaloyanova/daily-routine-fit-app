export default function CustomerReviewShow({ 
  reviews 
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
            <li
              data-target="#myCarousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="carousel-caption relative">
                {reviews.length > 0 
                  ? reviews.map(review => (
                  <div key={review._id} className="row d_flex">
                    <div className="col-md-2 col-sm-8">
                      <div className="pro_file">
                        <i>
                          <img src="/images/test2.png" alt="#" />
                        </i>
                        <h4>{review.name}</h4>
                        <span>{review.email}</span>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="test_box text_align_left">
                        <p>{review.reviews}</p>
                      </div>
                    </div>
                  </div>
                  ))
                  : <h1 className="titlepage text_align_center"> No Reviews yet. </h1>

                  }

                </div>
              </div>
            </div>
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
