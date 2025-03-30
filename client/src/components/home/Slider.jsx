import { Link } from "react-router";
import Reviews from "../Reviews";
import HomeSlideWorkout from "./home-slides/HomeSlideWorkout";
import HomeSlideMeditation from "./home-slides/HomeSlideMeditation";
import HomeSlideNutrition from "./home-slides/HomeSlideNutrition";

export default function Slider(){
    return (
        <>
            <div className="slider_main">
      {/* carousel code */}
      <div id="banner1" className="carousel slide">
        <ol className="carousel-indicators">
          <li data-target="#banner1" data-slide-to={0} className="active" />
          <li data-target="#banner1" data-slide-to={1} />
          <li data-target="#banner1" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          {/* first slide */}
          <HomeSlideWorkout />
          {/* second slide */}
          <HomeSlideNutrition />
          {/* third slide*/}
          <HomeSlideMeditation />
        </div>
        {/* controls from bootstrap */}
               <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
               <i class="fa fa-angle-left" aria-hidden="true"></i>
               <span class="sr-only">Previous</span>
               </a>
               <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
               <i class="fa fa-angle-right" aria-hidden="true"></i>
               <span class="sr-only">Next</span>
               </a>
      </div>
    </div>
    <Reviews />
        </>
    );
}