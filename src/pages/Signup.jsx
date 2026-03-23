import React, { useState } from "react";

const Signup = () => {
    const [name, pass, setName, setPass] = useState(" ");

    const handleChange = (e) => {
        setName(e.target.value);
        setPass(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted name: ${name}`);
        alert(`Submitted pass: ${pass}`)
    }

    return(
        <div className="container mt-4">
            <h3>Sign up</h3>
            <form onSubmit={handleSubmit(onsubmit)}>

                <div className="container mt-3">
                    <label htmlFor="name" className="form-label">User Name</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value= {name}
                            onChange={handleChange}
                            placeholder="Enter your username"
                        />
                </div>
                <div>
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                        <input
                        type="password"
                        className="form-control"
                        value= {pass}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup;