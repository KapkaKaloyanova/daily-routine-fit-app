import MeditationCatalogItem from "./meditation-catalog-item/MeditationCatalogItem";
import { useActivities } from "../../api/activityApi";

export default function MeditationCatalog() {
  
  const { activities } = useActivities("meditation")

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
