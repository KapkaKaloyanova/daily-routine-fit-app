import { useActionState } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";


export default function Login({
  onLogin,
}) {
  const navigate = useNavigate();
  const { login } = useLogin()
 
  const loginHandler = async (_, formData) => {
    const values = Object.fromEntries(formData);
    const authData = await login(values.email, values.password);
    
    onLogin(authData);
    
    navigate('/activity');
    
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
                        value="Login"
                        /* value={isPending ? 'Logging In...' : 'Login'} */
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
