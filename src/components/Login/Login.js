import React, { useState } from "react";
import Button from "../common/Button";
import InputField from "../common/InputField";
import { userCredential } from "../../constant";

import "./Login.css";

function Login(props) {
  const { handleRoute } = props;
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      handleRoute("dashboard");
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.username.trim()) {
      errors.username = "Username is required";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="login-container">
      <div className="left">{/* <img src="./images/left-image.gif" /> */}</div>
      <div className="right">
        <h3>Login</h3>
        <form onSubmit={handleFormSubmit}>
          <InputField
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            handleChange={(e) => handleInputChange(e)}
            iconImage={"./images/username.svg"}
            errors={errors.username}
          />

          <InputField
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            handleChange={(e) => handleInputChange(e)}
            iconImage={"./images/password.svg"}
            errors={errors.password}
          />

          <div className="form-group">
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            <Button
              type="submit"
              label="Sign In"
              handleClick={() => handleFormSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
