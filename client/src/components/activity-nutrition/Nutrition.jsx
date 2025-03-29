import { Link } from "react-router";
import NutritionItem from "./nutrition-item/NutritionItem";

export default function Nutrition() {
  return (
    <>
      <div className="activity">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center ">
                <h2>Nutrition</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <NutritionItem />
            <NutritionItem />
            <NutritionItem />
            <NutritionItem />
            <NutritionItem />
          </div>
        </div>
      </div>
    </>
  );
}
