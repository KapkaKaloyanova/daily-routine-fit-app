import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <div className="creates">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage text_align_center">
                <h2>404</h2>
                <p>Ooops, This Page Not Found!</p>
                <div className="col-md-12 button-container">
                  <Link className="read_more" to="/">
                    Go back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
