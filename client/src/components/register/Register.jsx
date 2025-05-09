import { useContext } from "react";
import { useRegister } from "../../api/authApi";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useRegister();
  const { userLoginHandler } = useContext(UserContext);

    
  const registerHandler = async (formData) => {
    const {email, password} = Object.fromEntries(formData);

    const confirmPassword = formData.get("confirm-password");

    if (password !== confirmPassword) {
      console.log('Password mismatch');

      return ;
    }
    
    const authData = await register(email, password);
    
    userLoginHandler(authData);
    
    navigate('/');
  }

  return (
    <>
      <div className="creates">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage text_align_center">
                <h2>Register User</h2>
              </div>
            </div>
            <div className="col-md-12">
              <form 
                id="register"  
                className="main_form"
                action={registerHandler}>
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
                      placeholder="Username"
                      type="text"
                      id="name"
                      name="username"
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
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Confirm-password"
                      type="password"
                      name="confirm-password"
                    />
                  </div>
                  
                  <div className="col-md-12">
                    <input 
                      className="send_btn" 
                      type="submit" value="Register"/>
                    <p className="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
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
