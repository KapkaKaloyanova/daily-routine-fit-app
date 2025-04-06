import { Link } from 'react-router';
import processImageUrl from '../../../utils/processImageUrl';
import styles from '../../activity-nutrition/nutrition-activity-styles.module.css'

export default function NutritionCatalogItem({
    _id,
    title,
    foodType,
    typeBenefit,
    time,
    description,
    imageUrl,
}){
  const processedImageUrl = processImageUrl(imageUrl);
  
  return (
        <>
        <div className="col-md-4">
          <div id="ho_shad" className="activity_box text_align_left">
            <div className="duration"><span>{time} MIN</span> | <span>{foodType}</span></div>
            <h4 > {typeBenefit} </h4>
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

            <Link className="read_more" to={`/activity/nutrition/${_id}/details`}>
              Details
            </Link>
          </div>
        </div>
        </>
    );
}