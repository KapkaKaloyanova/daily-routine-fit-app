import { Link } from "react-router";

export default function Pricing(){
    return (
        <>
          <div className="priceing">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage text_align_center">
            <h2>Our Priceing </h2>
            <p>
              If you want to use our special activities or to have a personal activity plan you can choose your option here. 
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="row">
            <div className="col-md-6">
              <div className="our_priceing text_align_center">
                <div className="our_pri">
                  <h3>Regular Price</h3>
                  <span>
                    $<strong>50</strong>
                  </span>
                  <p>
                    sed do eiusmod <br />
                    tempor incididunt ut <br />
                    labore et dolore
                    <br /> magna aliqua. Utenim <br /> ad minim aliquip
                  </p>
                </div>
                <Link className="read_more" to="javascript:void(0)">
                  Comming soon
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="our_priceing text_align_center">
                <div className="our_pri">
                  <h3>Special Price</h3>
                  <span>
                    $<strong>100</strong>
                  </span>
                  <p>
                    sed do eiusmod <br />
                    tempor incididunt ut <br />
                    labore et dolore
                    <br /> magna aliqua. Utenim <br /> ad minim aliquip
                  </p>
                </div>
                <Link className="read_more" to="javascript:void(0)">
                  Comming soon
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    );
}