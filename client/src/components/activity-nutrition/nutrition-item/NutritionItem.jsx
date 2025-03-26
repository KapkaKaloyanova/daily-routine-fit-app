import { Link } from "react-router";

export default function NutritionItem({
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
            <div className="duration"><span>20 MIN</span> | <span>Smoothies and juices</span></div>
            <h3>Green Matcha Smoothie</h3>
            <figure>
              <img src="/images/green-matcha-smoothie.jpg" alt="#" />
            </figure>
            <p>
              Packed with an incredible number of antioxidants, matcha powder is a potent source of nutrients.
            </p>
            <Link className="read_more" to="/activity/nutrition/details">
              Details
            </Link>
          </div>
        </div>
        </>
    );
}