import { Link } from "react-router";
import NutritionCatalogItem from "./nutrition-catalog-item/NutritionCatalogItem";

export default function NutritionCatalog() {
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
            <NutritionCatalogItem />
            <NutritionCatalogItem />
            <NutritionCatalogItem />
          </div>
        </div>
      </div>
    </>
  );
}
