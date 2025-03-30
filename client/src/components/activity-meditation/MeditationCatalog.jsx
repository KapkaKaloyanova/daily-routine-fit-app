import MeditationCatalogItem from "./meditation-catalog-item/MeditationCatalogItem";

export default function MeditationCatalog(){
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
          <MeditationCatalogItem />
          <MeditationCatalogItem />
          <MeditationCatalogItem />
          
      </div>
    </div>
  </div>
        </>
    );
}