import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required";

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = "Must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(formData.password)) {
      newErrors.password = "Must contain at least one special character (!@#$%^&*)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!validate()) return;

    // Simple username/password check (for testing purposes)
    if (formData.username === "admin" && formData.password === "123456") {
      navigate("/dashboard"); // Redirect after successful login
    } else {
      setErrors({ ...errors, general: "Invalid username or password" });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form" style={{padding: "40px"}}>
        <h2>Login</h2>

        {/* Username Field */}
        <div className="input-group" style={{marginBottom: "20px"}}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        {/* Password Field */}
        <div className="input-group" style={{marginBottom: "20px"}}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* General Error */}
        {errors.general && <p className="error">{errors.general}</p>}

        {/* Submit Button */}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default UserLogIn;
