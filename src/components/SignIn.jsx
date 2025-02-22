import axios from 'axios';
import React, { useState } from 'react'
import NavBar from './NavBar';

const SignIn = () => {
    const [data, setData] = useState({
        Email: "",
        Password: ""
      });
      const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
      };
      const handleLogin = () => {
        if (!data.Email || !data.Password) {
          alert("Please fill in all fields.");
          return;
        }
        axios.post("http://localhost:3030/signin", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          sessionStorage.setItem('email', data.Email);
          alert("Login successful");
          window.location.href = "/mainhome"; // Redirect after successful login
        } else {
          alert("Login failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error during sign in:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div>
      <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name="Email" value={data.Email} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name="Password" value={data.Password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={handleLogin}>Sign In</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <a href="/signup" className="btn btn-secondary">New Users Click Here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn