import { useEffect, useState } from "react";
import activityService from "../../services/activityService";
import NutritionCatalogItem from "./nutrition-catalog-item/NutritionCatalogItem";

export default function NutritionCatalog() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
      activityService.getAll()
          .then((allActivities) => {
            // Filter only workout activity
            const nutritionActivities = allActivities.filter(
              (activity) => activity.category === "nutrition"
            );
            setActivities(nutritionActivities)
          });
  }, []);

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
          {activities.length > 0 
              ? activities.map(activity => <NutritionCatalogItem key={activity._id} {...activity} />) 
              : <h3 className="titlepage text_align_center">No recipes yet</h3>
            }
          </div>
        </div>
      </div>
    </>
  );
}
