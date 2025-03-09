import React, { useState } from "react";
import "./Register.css";
import '../../App.css'
import background from "../LoginAssets/bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../LoginAssets/logo.png";
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsShieldFillExclamation } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Axios from 'axios'

const Register = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigateTo = useNavigate();

    // OnClick let us get what the user has entered
    const createUser = (e) => {
      e.preventDefault()
      //We shall require Axios to create API that connects
      // to server = Lets install that inside client

      Axios.post('http://localhost:3003/register', {
        //create variable to send to the server

        FullName: fullName,
        Email: email,
        UserName: userName,
        Password: password
      }).then(()=>{
        
        navigateTo('/');

        setFullName('')
        setEmail('')
        setUserName('')
        setPassword('')
      });
    }
  return (
    <div>
      <div className="registerPage flex">
        <div className="container flex">
          <div className="imgDiv">
            <img src={background} alt="" />
            <div className="textDiv">
              <h2 className="title">Drape Yourself In Luxury</h2>
              <p>Luxe with Amvora</p>
            </div>

            <div className="footerDiv flex">
              <span className="text">Have an account</span>
              <Link to='/' >
                <button className='btn'>Login</button>
              </Link>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="Logo Image" />
              <h3>Let us know you</h3>
            </div>

            <form action="" className="form grid">
              
              <div className="inputDiv">
                <label htmlFor="fullname">Full Name</label>
                <div className="input flex">
                  <FaUser className="icon" />
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Enter Full Name"
                    onChange={(event) => {
                      setFullName(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                  <MdOutlineAlternateEmail className="icon" />
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter Email"
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter Username"
                    onChange={(event) => {
                      setUserName(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsShieldFillExclamation className="icon" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn flex" onClick={createUser}>
                  Register
                  <AiOutlineSwapRight className="icon" />   
              </button>

              <span className="forgetPassword">
              Forget your password? <a href="">Click here</a>
              </span>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
