import { Link } from "react-router";
import CustomerReviewShow from "../review-show/ReviewShow";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="container_width">
          <div className="row d_flex grig">
            <div className="col-md-6">
              <div className="about_img">
                <figure>
                  <img src="images/about_img.jpg" alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-6 order">
              <div className="titlepage text_align_left">
                <h2>
                  Your path to <br /> a healthy lifestyle
                </h2>
                <p>
                This is the healthy lifestyle app for anyone who wants to get in shape, have more energy, sleep better, and increase their productivity.
                
                <br />
                
                Our mission is to help everyone achieve a healthy lifestyle by offering the best of health and fitness all in one place. 
                
                <br />

                We see health and fitness as a set of tiny actions that lead us to big changes. From exercising to sleeping well, working smart and drinking water – even making sure you take a breath from time to time.
                
                <br />

                Our app offers hundreds of workouts, as well as nutrition ideas and meditation. 
                </p>
                {/* <Link className="read_more" to="/about">
                  Read More
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <CustomerReviewShow /> */}
    </>
  );
}
