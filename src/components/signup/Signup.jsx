import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    //   const [email, setEmail] = useState("");
    //   const [password, setPassword] = useState("");
    //   const [repeatPassword, setRepeatPassword] = useState("");
    //   const navigate = useNavigate();

    //   const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (password !== repeatPassword) {
    //       alert("Passwords do not match");
    //       return;
    //     }

    //     const userData = {
    //       email: email,
    //       password: password,
    //     };

    //     try {
    //       localStorage.setItem("userRegData", JSON.stringify(userData));
    //       navigate("/infoabout");
    //     } catch (error) {
    //       console.error("Error creating account:", error);
    //     }
    //   };
    <div className="flex-r container-sign-up">
      <div className="flex-r login-wrapper-sign-up">
        <div className="login-text-sign-up">
          <h1>Sign Up</h1>
          <p>
            Please enter your E-mail address, then create your own account
            password.
          </p>
          <form className="flex-c">
            <div className="input-box-sign-up">
              <span className="label-sign-up">E-mail</span>
              <div className="flex-r input-sign-up">
                <input type="text" placeholder="name@abc.com" required />
                <i className="fas fa-at"></i>
              </div>
            </div>
            <div className="input-box-sign-up">
              <span className="label-sign-up">Password</span>
              <div className="flex-r input-sign-up">
                <input
                  type="password"
                  placeholder="create a password"
                  required
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="input-box1-sign-up">
              <span className="label-sign-up">Repeat password</span>
              <div className="flex-r input1-sign-up">
                <input
                  type="password"
                  placeholder="repeat your password"
                  required
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="check-sign-up">
              <input type="checkbox" required />
              <span>I've read and agree with all of the instructions</span>
            </div>
            <Link to="/home" className="btn-sign-up-link">
              <button className="btn-sign-up" type="button">
                Create an Account
              </button>
            </Link>
            <span className="extra-line-sign-up">
              <span>Already have an account?</span>
              <Link to="/login" className="link-login">
                Log In
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
