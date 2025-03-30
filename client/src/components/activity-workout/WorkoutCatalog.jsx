import WorkoutCatalogItem from "./workout-catalog-item/WorkoutCatalogItem";
import { useEffect, useState } from "react";
import activityService from "../../api/activityService";

export default function WorkoutCatalog() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    activityService.getAll()
      .then(setActivities);
  }, []);

  return (
    <>
      <div className="activity">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center ">
                <h2>All Workouts</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {activities.map(activity => 
              <WorkoutCatalogItem key={activity._id} {...activity} />)}
          </div>
        </div>
      </div>
    </>
  );
}
