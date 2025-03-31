
export default function MeditationCatalogItem({
    _id,
    title,
    duration,
    description,
    imageUrl,
}){
    return (
        <>
        <div className="col-md-4">
          <div id="ho_shad" className="activity_box text_align_left">
            <div className="duration">15 MIN</div>
            <h3>Give Gratitude</h3>
            <figure>
              <img src="/images/give-gratitude-meditation.jpg" alt="#" />
            </figure>
            <div className="play_icon">
              <a className="play-btn" href="javascript:void(0)">
                <img src="/images/play_icon.png" />
              </a>
            </div>
            <p>
              Commit to gratitude, and embrace a sense of fulfillment. Bring happiness through a mindset and abundance. 
            </p>

          </div>
        </div>
        </>
    );
}