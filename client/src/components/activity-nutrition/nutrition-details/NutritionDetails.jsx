import { Link } from "react-router";

export default function NutritionDetails({
  _id,
  title,
  duration,
  description,
  imageUrl,
}) {

  return (
    <>
      <div className="container col-md-12">
        <div id="ho_shad" className="activity_box details_center text_align_center">

          <div className="col-md-6">
          <figure>
              <img src="/images/green-matcha-smoothie.jpg" alt="#" />
            </figure>
            <h3>Green matcha smoothie</h3>
            <div className="details_box text_align_center">
              <p>
                <span>Difficulty</span> | <span>Cooking</span> |{" "}
                <span>calories</span>
                <br />
                <span>Easy</span> | <span>10 min</span> | <span>146</span>
              </p>
            </div>
            <h4>Meal Benefits</h4>
            <p>
              Restore future flexibility and mobility through a series of
              tension-releasing exercises that can be done at your desk - no
              equipment needed.
            </p>
            <h4>Ingredients</h4>
            <p>
              100 g Spinach <br />
              100 g Spinach <br />
              100 g Spinach <br />
              100 g Spinach <br />
              100 g Spinach <br />
            </p>
            <h4>Preparation</h4>
            <p>
              Using a hand blender, finely puree all the ingredients together. Serve in a glass with a slice of pink grapefruit.
            </p>
            {/* <Link className="read_more" to="#">
            Get started
        </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
