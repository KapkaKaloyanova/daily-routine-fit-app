import { useEffect, useState } from "react";
import activityService from "../../api/activityService";
import WorkoutCatalogItem from "./workout-catalog-item/WorkoutCatalogItem";

export default function WorkoutCatalog() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
      activityService.getAll()
          .then((allActivities) => {
            // Filter only workout actvity
            const workoutActivities = allActivities.filter(
              (activity) => activity.category === "workout"
            );
            setActivities(workoutActivities)
          });
  }, []);

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
