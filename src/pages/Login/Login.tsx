import React from "react";
import Logo from "../../assets/images/lendLogo.svg"
import loginHero from "../../assets/images/loginHero.svg"
import './Login.scss'
import TextField from "../../components/form/Textfield/TextField";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const Login = () => {
  return (
    <>
      <div className="loginPage">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="loginHero">
          <div className="loginHeroImage">
            <img src={loginHero} alt="" />
          </div>
        </div>
        <div className="loginContent">
          <form>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
              <div className="input">
                <TextField type="text" placeholder="Email" />
              </div>
              <div className="input">
                <TextField type="password" placeholder="Password" />
              </div>
              <a href="#">Forgot PASSWORD?</a>
              <div className="loginBtn">
                <PrimaryButton value="log in"/>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
