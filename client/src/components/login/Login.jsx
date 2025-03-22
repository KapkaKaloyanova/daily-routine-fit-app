import { Link } from "react-router";


export default function Login() {


    return (
        <>
        <div className="creates">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="titlepage text_align_center">
                  <h2>Login User</h2>
                </div>
              </div>
              <div className="col-md-12">
                <form id="register"  className="main_form">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        className="form_control"
                        placeholder="Email"
                        type="email"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form_control"
                        placeholder="Password"
                        type="password"
                        name="password"
                      />
                    </div>
                    
                    <div className="col-md-12">
                      <input className="send_btn" type="submit" value="Login"/>
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
