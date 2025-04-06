import { Link } from "react-router";
import processImageUrl from "../../../utils/processImageUrl";
import styles from '../../activity-workout/workout-activity-styles.module.css'

export default function WorkoutCatalogItem({
    _id,
    title,
    time,
    imageUrl,
    description,
}){
  const processedImageUrl = processImageUrl(imageUrl)
  
    return (
        <>
        <div className="col-md-4">
          <div id="ho_shad" className="activity_box text_align_left">
            <div className="duration">{time} MIN</div>
            <h3>{title}</h3>
            <figure>
              <img
                className={styles.image}
                src={processedImageUrl}
                alt={title}
              />
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