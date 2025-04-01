import { Link } from 'react-router';
import getDirectImageUrl from "../../../utils/directImgUrlDriveLink";

export default function MeditationCatalogItem({
    _id,
    title,
    time,
    description,
    imageUrl,
}){
  const processedImageUrl = imageUrl ? getDirectImageUrl(imageUrl) : null;

    return (
        <>
        <div className="col-md-4">
          <div id="ho_shad" className="activity_box text_align_left">
            <div className="duration">{time} MIN</div>
            <h3>{title}</h3>
            <figure>
            {processedImageUrl ? (
              <img
                src={processedImageUrl}
                alt={title}
              />
            ) : (
              <p>No image available</p>
            )}
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