import { Link } from 'react-router';
import processImageUrl from '../../../utils/processImageUrl';
import styles from '../../activity-meditation/meditation-activity-styles.module.css'

export default function MeditationCatalogItem({
    _id,
    title,
    time,
    description,
    imageUrl,
}){
  const processedImageUrl = processImageUrl(imageUrl);

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
            {/* <div className="play_icon">
              <a className="play-btn" href="javascript:void(0)">
                <img src="/images/play_icon.png" />
              </a>
            </div> */}
            
            <p>
              {description} 
            </p>

            <Link className="read_more" to={`/activity/meditation/${_id}/details`}>
              Details
            </Link>
          </div>
        </div>
        </>
    );
}