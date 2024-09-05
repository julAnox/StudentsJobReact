import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    //   const [email, setEmail] = useState("");
    //   const [password, setPassword] = useState("");
    //   const navigate = useNavigate();

    //   const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //       const response = await fetch("http://193.168.49.29:8080/api/users/", {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       });

    //       if (!response.ok) {
    //         const errorText = await response.text();
    //         throw new Error(Failed to fetch users: ${errorText});
    //       }

    //       const users = await response.json();
    //       console.log("Fetched users:", users);

    //       const user = users.find(
    //         (user) => user.email === email && user.password === password
    //       );

    //       console.log("Trying to log in with:", { email, password });
    //       console.log("Found user:", user);

    //       if (user) {
    //         localStorage.setItem("userData", JSON.stringify(user));
    //         navigate("/profile");
    //       } else {
    //         alert("Invalid email or password");
    //       }
    //     } catch (error) {
    //       console.error("Error logging in:", error);
    //     }
    //   };
    <div className="flex-r container-login">
      <div className="flex-r login-wrapper-login">
        <div className="login-text-login">
          <h1>Log In</h1>
          <p>
            Welcome!
            <br />
            We are glad that you chose us! Log In here...
          </p>
          <form className="flex-c">
            <div className="input-box-login">
              <span className="label-login">E-mail</span>
              <div className="flex-r input-login">
                <input
                  type="text"
                  placeholder="name@abc.com"
                  className="login-input"
                  required
                />
                <i className="fas fa-at"></i>
              </div>
            </div>
            <div className="input-box-login">
              <span className="label-login">Password</span>
              <div className="flex-r input-login">
                <input
                  type="password"
                  placeholder="enter your password"
                  className="login-input"
                  required
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <Link to="/home" className="link-button">
              <button className="btn-login-custom" type="button">
                Log In
              </button>
            </Link>
            <span className="extra-line-login">
              <span>Don't have an account?</span>
              <Link to="/signup" className="link-signup">
                Sign Up
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
