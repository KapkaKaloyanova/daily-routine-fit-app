import { Link } from "react-router";

export default function ExerciseItem({
    _id,
    title,
    duration,
    description,
    imageUrl,
}){
    return (
        <>
        <div className="col-md-4">
          <div id="ho_shad" className="activity_box text_align_left">
            <div className="duration">20 MIN</div>
            <h3>Desk Remedy I</h3>
            <figure>
              <img src="/images/service2.jpg" alt="#" />
            </figure>
            <p>
              Restore future flexibility and mobility through a series of tension-releasing exercises that can be done at your desk - no equipment needed.
            </p>
            <Link className="read_more" to="#">
              Details
            </Link>
          </div>
        </div>
        </>
    );
}