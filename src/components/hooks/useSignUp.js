import { useState } from "react";
import axios from "axios";

export const useSignUp = (t) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password1 !== password2) {
      setError(t("password_mismatch"));
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/signup/",
        {
          email: email,
          password1: password1,
          password2: password2,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        sessionStorage.setItem("user", response.data["user"]);
        localStorage.setItem("userData", JSON.stringify({ email }));
        window.location.href = "/profile";
      }
    } catch (error) {
      setError(error.response?.data?.error || t("signup_failed"));
    }
  };

  return {
    email,
    setEmail,
    password1,
    setPassword1,
    password2,
    setPassword2,
    error,
    handleSignup,
  };
};
