import MeditationItem from "./meditation-item/MeditationItem";

export default function Meditation(){
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
          <MeditationItem />
          <MeditationItem />
          <MeditationItem />
          <MeditationItem />
      </div>
    </div>
  </div>
        </>
    );
}