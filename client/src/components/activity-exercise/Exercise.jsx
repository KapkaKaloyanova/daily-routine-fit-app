import { Link } from "react-router";
import ExerciseItem from "./exercise-item/ExerciseItem";

export default function Exercise(){
    return (
        <>
          <div className="activity">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage text_align_center ">
            <h2>Exercises</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div id="ho_shad" className="activity_box text_align_left">
            <div className="duration">23 MIN</div>
            <h3>Balance of the Trilogy I</h3>
            <figure>
              <img src="/images/service1.jpg" alt="#" />
            </figure>
            <p>
              Build beautiful length to your spine while calming your mind through a series of flowing exercises that strengthens your ligaments, bones and joints.
            </p>
            <Link className="read_more" to="/activity/exercise/details">
              Details
            </Link>
          </div>
        </div>
        <ExerciseItem />
        <div className="col-md-4">
          <div id="ho_shad" className="activity_box text_align_left">
            <div className="duration">24 MIN</div>
            <h3>Flex Flow I</h3>
            <figure>
              <img src="/images/service3.jpg" alt="#" />
            </figure>
            <p>
              Prevent any future injury, back pain and balance issues through a series of stretching exercises that focus on your lower body and core.
            </p>
            <Link className="read_more" to="#">
              Details
            </Link>
          </div>
        </div>
        <ExerciseItem />
        <ExerciseItem />
        <ExerciseItem />
      </div>
    </div>
  </div>
        </>
    );
}