import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const Signup = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const nameRegex = /^[A-Za-z]{2,}$/;
  const usernameRegex = /^[A-Za-z0-9._-]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usernameRegex.test(name)) {
      alert("Username must contain only letters, numbers, dot, underscore, or dash.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Invalid email format.");
      return;
    }
    if (!passwordRegex.test(pass)) {
      alert("Password must be 8–16 chars, include uppercase, lowercase, number, and special character.");
      return;
    }

    alert(`Submitted name: ${name}`);
    alert(`Submitted email: ${email}`);
    alert(`Submitted pass: ${pass}`);
  };

  return (
    <div className="container mt-4">
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <div className="container mt-3">
          <label htmlFor="name" className="form-label">User Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div className="container mt-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="container mt-3">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8–16 characters long, contain uppercase, lowercase, numbers, and special characters.
          </Form.Text>
        </div>

        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
