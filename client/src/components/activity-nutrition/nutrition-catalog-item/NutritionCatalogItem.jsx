import { Link } from "react-router";
import getDirectImageUrl from "../../../utils/directImgUrlDriveLink";

export default function NutritionCatalogItem({
    _id,
    title,
    foodType,
    typeBenefit,
    time,
    description,
    imageUrl,
}){
  const processedImageUrl = imageUrl ? getDirectImageUrl(imageUrl) : null;
    
  
  return (
        <>
        <div className="col-md-4">
          <div id="ho_shad" className="activity_box text_align_left">
            <div className="duration"><span>{time} MIN</span> | <span>{foodType}</span></div>
            <p className="duration"> {typeBenefit} </p>
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
            <p>
              {description}
            </p>
            <Link className="read_more" to={`/activity/nutrition/${_id}/details"`}>
              Details
            </Link>
          </div>
        </div>
        </>
    );
}