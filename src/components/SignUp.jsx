import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const SignUp = () => {
    const [data,changeData]=useState(
        {
            "FullName": "",
            "Email": "",
            "Phone": "",
            "Age": "",
            "Gender":"",
            "Course": "" ,
            "College":"",
            "Username": "",
            "Password": "",
            "Confirmpassword":""
    
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readvalue = () => {
        if (!data.FullName || !data.Email || !data.Phone || !data.Age || !data.Gender || !data.Course || !data.College||!data.Username||!data.Password||!data.Confirmpassword) {
          alert("Please fill in all fields.");
          return;
        }
      
        if (data.Password !== data.Confirmpassword) {
          alert("Passwords do not match.");
          return;
        }
      
        axios.post("http://localhost:3030/signup", data)
          .then((response) => {
            console.log("API Response:", response.data); // Debugging line
            console.log(response.data);
            if (response.data.status === "success") {
              alert("Registration successful");
              window.location.href = "/signin"; // Redirect to sign in after successful signup
            } else {
              alert("Registration failed. Please try again.");
            }
          })
          .catch((error) => {
            console.error("Error during sign up:", error);
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
                                <label htmlFor="fullname" className="form-label">Full Name</label>
                                <input type="text" className="form-control" name="FullName" value={data.FullName} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="Email" value={data.Email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" name="Phone" value={data.Phone} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input type="number" className="form-control" name="Age" value={data.Age} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                
                                <select className="form-control" name="Gender" value={data.Gender} onChange={inputHandler}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>


                                </select>
                                
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="course" className="form-label">Course</label>
                                <input type="text" className="form-control" name="Course" value={data.Course} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="college" className="form-label">College</label>
                                <input type="text" className="form-control" name="College" value={data.College} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" name="Username" value={data.Username} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" name="Password" value={data.Password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name="Confirmpassword" value={data.Confirmpassword} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readvalue}>Register</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                               <a href="/signin" className="btn-btn-primary">Back to login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp