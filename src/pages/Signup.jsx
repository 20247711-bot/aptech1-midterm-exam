import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Signup = () => {
const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", pass: "" });

  const usernameRegex = /^[A-Za-z0-9._-]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (field, value) => {
    let error = "";
    if (field === "name" && !usernameRegex.test(value)) {
      error = "Username must be at least 2 characters, only letters/numbers/._- allowed.";
    }
    if (field === "email" && !emailRegex.test(value)) {
      error = "Invalid email format.";
    }
    if (field === "pass" && !passwordRegex.test(value)) {
      error = "Password must be 8–16 chars, include uppercase, lowercase, number, and special character.";
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.name && !errors.email && !errors.pass && name && email && pass) {
      alert(`Submitted name: ${name}\nSubmitted email: ${email}\nSubmitted pass: ${pass}`);
    }
  };

  const isFormValid = name && email && pass && !errors.name && !errors.email && !errors.pass;

  return (
    <div className="container mt-4">
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <div className="container mt-3">
          <label htmlFor="name" className="form-label">User Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : name ? "is-valid" : ""}`}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateField("name", e.target.value);
            }}
            placeholder="Enter your username"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="container mt-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : email ? "is-valid" : ""}`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateField("email", e.target.value);
            }}
            placeholder="Enter your email"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="container mt-3">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
              validateField("pass", e.target.value);
            }}
            className={errors.pass ? "is-invalid" : pass ? "is-valid" : ""}
            aria-describedby="passwordHelpBlock"
          />
          {errors.pass && <div className="invalid-feedback">{errors.pass}</div>}
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8–16 characters long, contain uppercase, lowercase, numbers, and special characters.
          </Form.Text>
        </div>

        <button 
          type="submit" 
          className="btn btn-primary mt-3"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
      <br />
      <button onClick={()=> navigate(-1)} className="btn btn-primary">Go Back Home</button>
    </div>
  );
  
};

export default Signup;
