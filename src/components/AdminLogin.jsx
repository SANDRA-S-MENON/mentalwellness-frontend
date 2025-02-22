import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate()
    const [data, setInput] = useState({
        username: "", 
        password: ""
    });

    const inputHandler = (event) => {
        setInput({ ...data, [event.target.name]: event.target.value });
    };

    const readValues = () => {
        console.log(data);

        axios.post("http://localhost:3030/adminlogin", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "Incorrect Password") {
                    alert("Incorrect Password");
                    setInput(
                        {
                            username: "", 
                            password: ""
                        }
                    )
                } else if (response.data.status === "Invalid Username") {
                    alert("Incorrect Password or Username");
                    setInput(
                        {
                            username: "", 
                            password: ""
                        }
                    )
                } else {
                    let token = response.data.token;
                    let userId = response.data.userId;
                    console.log(userId);
                    console.log(token);

                    sessionStorage.setItem("userId",userId)
                    sessionStorage.setItem("token",token)
                    navigate("/adminhome")
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

  return (
    <div>
            {/* <Navmain/> */}
            <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-6 col-xl-6 col-xxl-6">
            <div class="card border-light mb-3">
            <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
            </div>
            </div>
            </div>

            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-6 col-xl-6 col-xxl-6">
            <div class="card border-light mb-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
            <br></br><br></br><br></br><br></br>
                <label htmlFor="" className="form-label">USERNAME</label>
                <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">PASSWORD</label>
                <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
            <div class="d-grid gap-2">
                <button onClick={readValues} className="btn btn-success">SIGN IN</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
          </div>
    );
};



export default AdminLogin