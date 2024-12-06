import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useLogIn = (t) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/login/",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        sessionStorage.setItem("user", response.data["user"]);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            email: email,
            ...response.data,
          })
        );
        navigate("/profile");
      }
    } catch (error) {
      setError(error.response?.data?.error || t("log_in_failed"));
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
  };
};
