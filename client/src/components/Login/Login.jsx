import React, { useEffect, useState } from "react";
import "./Login.css";
import '../../App.css'
import background from "../LoginAssets/bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../LoginAssets/logo.png";
import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsShieldFillExclamation } from "react-icons/bs";
import Axios from 'axios'

const Login = () => {
    const [loginUserName, setLoginUserName] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const navigateTo = useNavigate();
    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setStatusHolder] = useState('message')

    const loginUser = (e) => {
      //We shall require Axios to create API that connects
      // to server = Lets install that inside client
e.preventDefault();

      Axios.post('http://localhost:3003/login', {
        //create variable to send to the server
        LoginUserName: loginUserName,
        LoginPassword: loginPassword
      }).then((response)=>{
        console.log()
//I want to catch the response first - we have data successfully from the db and we can catch an error if the credentials are wrong.
        if(response.data.message || loginUserName == '' || loginPassword == ''){
          //if credential don't match
          navigateTo('/') // so we shall navigate to the login page
          setLoginStatus(`Credential Don't Exist!`)
        }
        else {
          navigateTo('/dashboard') // navigate to dashboad
        }
      })
    }

    useEffect(()=>{
      if(loginStatus !== ''){
        setStatusHolder('showMessage') //show message
        setTimeout(() => {
          setStatusHolder('message') //hide message after 4s
        }, 4000);
      }
    }, [loginStatus]);

    const onSubmit = () =>{
      setLoginUserName('')
      setLoginPassword('')
    }

  return (
    <div>
      <div className="loginPage flex">
        <div className="container flex">
          <div className="imgDiv">
            <img src={background} alt="" />
            <div className="textDiv">
              <h2 className="title">Drape Yourself In Luxury</h2>
              <p>Luxe with Amvora</p>
            </div>

            <div className="footerDiv flex">
              <span className="text">Don't have an Account</span>
              <Link to='/register' >
                <button className='btn'>Sign Up</button>
              </Link>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="Logo Image" />
              <h3>Welcome Back!</h3>
            </div>

            <form action="" className="form grid" onSubmit={onSubmit}>
              <span className={statusHolder}>{loginStatus}</span>
              
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter Username"
                    onChange={(event) => {
                      setLoginUserName(event.target.value)
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
                      setLoginPassword(event.target.value)
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn flex" onClick={loginUser}>
                  <span>Login</span>
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

export default Login;
