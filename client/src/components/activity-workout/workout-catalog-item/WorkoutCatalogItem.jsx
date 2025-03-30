import { Link } from "react-router";

export default function WorkoutCatalogItem({
    _id,
    title,
    time,
    imageUrl,
    description,
}){
    return (
        <>
        <div className="col-md-4">
          <div id="ho_shad" className="activity_box text_align_left">
            <div className="duration">{time} MIN</div>
            <h3>{title}</h3>
            <figure>
              <img src={imageUrl} alt="#" />
            </figure>
            <p>
              {description}
            </p>
            <Link className="read_more" to={`/activity/workout/${_id}/details`}>
              Details
            </Link>
          </div>
        </div>
        </>
    );
}