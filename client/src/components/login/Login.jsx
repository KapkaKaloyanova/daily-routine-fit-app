import { useActionState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { UserContext } from "../../contexts/UserContext";


export default function Login() {
  const navigate = useNavigate();
  const { userLoginHandler } = useContext(UserContext); // enables userLoginHandler in this component through the UserContext.Provider
  const { login } = useLogin();
 
  const loginHandler = async (_, formData) => {
    const values = Object.fromEntries(formData);
    const authData = await login(values.email, values.password);
    
    userLoginHandler(authData);
    
    navigate('/');
    
    return values;

  }
  
  const [ _, loginAction, isPending ] = useActionState( loginHandler, {email: '', password: ''} );

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

              {/* Form */}
              <div className="col-md-12">
                <form id="register"  className="main_form" action={loginAction}>

                  <div className="row">
                    <div className="col-md-6">
                      <input
                        className="form_control"
                        placeholder="Email"
                        type="email"
                        id="email"
                        name="email"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        className="form_control"
                        placeholder="Password"
                        type="password"
                        name="password"
                        required
                      />
                    </div>
                    
                    <div className="col-md-12">
                      <input 
                        className="send_btn" 
                        type="submit" 
                        // value="Login"
                        value={isPending ? 'Logging In...' : 'Login'}
                        disabled={isPending} // to prevent multiple submit while pending
                      />
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
