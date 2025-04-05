import WorkoutCatalogItem from "./workout-catalog-item/WorkoutCatalogItem";
import { useActivities } from "../../api/activityApi";

export default function WorkoutCatalog() {

  const { activities } = useActivities("workout");

  return (
    <>
      <div className="activity">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center ">
                <h2>Workouts</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {activities.length > 0 
              ? activities.map(activity => <WorkoutCatalogItem key={activity._id} {...activity} />) 
              : <h3 className="titlepage text_align_center">No workouts yet</h3>
            }
          </div>
        </div>
      </div>
    </>
  );
}
