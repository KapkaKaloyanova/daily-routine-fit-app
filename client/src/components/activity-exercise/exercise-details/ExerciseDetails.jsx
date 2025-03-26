import { Link } from "react-router";

export default function ExerciseDetails({
  _id,
  title,
  duration,
  description,
  imageUrl,
}) {
  return (
    <>
      <div className="container col-md-12">
        <div id="ho_shad" className="activity_box text_align_center">
          <div className="col-md-8">
            <h3>Desk Remedy I</h3>
            <div>with Angela</div>
            <div className="details_box text_align_center">
              <p>
                <span>20 MIN</span> | <span>Medium Intensity</span>
              </p>
            </div>
            <p>
              Restore future flexibility and mobility through a series of
              tension-releasing exercises that can be done at your desk - no
              equipment needed.
            </p>
            {/* <Link className="read_more" to="#">
            Get started
        </Link> */}
          </div>
          <div className="col-md-8">
            <figure>
              <img src="/images/workout-desk-remedy-I.png" alt="#" />
            </figure>
            <div className="play_icon">
              <a className="play-btn" href="javascript:void(0)">
                <img src="/images/play_icon.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
