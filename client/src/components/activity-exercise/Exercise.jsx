import { Link } from "react-router";
import ExerciseItem from "./exercise-item/ExerciseItem";

export default function Exercise() {
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
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
          </div>
        </div>
      </div>
    </>
  );
}
