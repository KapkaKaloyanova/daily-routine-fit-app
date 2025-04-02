import { useEffect, useState } from "react";
import MeditationCatalogItem from "./meditation-catalog-item/MeditationCatalogItem";
import activityService from "../../services/activityService";

export default function MeditationCatalog() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
      activityService.getAll()
          .then((allActivities) => {
            // Filter only meditation activity
            const meditationActivities = allActivities.filter(
              (activity) => activity.category === "meditation"
            );
            setActivities(meditationActivities)
          });
  }, []);

  return (
    <>
      <div className="activity">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center ">
                <h2>Meditation</h2>
              </div>
            </div>
          </div>
          <div className="row">
          {activities.length > 0 
              ? activities.map(activity => <MeditationCatalogItem key={activity._id} {...activity} />) 
              : <h3 className="titlepage text_align_center">No meditations yet</h3>
            }
          </div>
        </div>
      </div>
    </>
  );
}
