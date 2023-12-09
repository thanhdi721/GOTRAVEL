import React from "react";
import {
  WrapperBackground,
  WrapperButton,
  WrapperCheck,
  WrapperCheckA,
  WrapperContent,
  WrapperContentH2,
  WrapperContentH3,
  WrapperContentPre,
  WrapperIcon,
  WrapperIconI,
  WrapperLogin,
  WrapperLoginH2,
  WrapperLoginInput,
  WrapperLoginInput1,
  WrapperLoginInputI,
  WrapperSection,
  WrapperSignUp,
  WrapperSignUpA,
  WrapperSignUpP,
} from "./style";
import {
  FacebookOutlined,
  GithubOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const LoginPage = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/register");
  };
  return (
    <>
      <WrapperBackground></WrapperBackground>
      <WrapperSection>
        <WrapperContent>
          <div>
            <img src={logo} alt="" style={{ width: "150px" }} />
          </div>
          <WrapperContentH2> Welcome!</WrapperContentH2>
          <WrapperContentH3> To Our Nem Website </WrapperContentH3>
          <WrapperContentPre>
            Lorem ipsum, dolor sit amen consenter adipisicing elit.
            Beatae,asperiores
          </WrapperContentPre>
          <WrapperIcon>
            <WrapperIconI>
              <FacebookOutlined />
            </WrapperIconI>
            <WrapperIconI>
              <InstagramOutlined />
            </WrapperIconI>
            <WrapperIconI>
              <TwitterOutlined />
            </WrapperIconI>
            <WrapperIconI>
              <GithubOutlined />
            </WrapperIconI>
          </WrapperIcon>
        </WrapperContent>
        <WrapperLogin>
          <WrapperLoginH2> Login </WrapperLoginH2>
          <WrapperLoginInput>
            <WrapperLoginInput1 type="text" placeholder="Email" />
            <WrapperLoginInputI></WrapperLoginInputI>
          </WrapperLoginInput>
          <WrapperLoginInput>
            <WrapperLoginInput1 type="password" placeholder="Password" />
            <WrapperLoginInputI></WrapperLoginInputI>
          </WrapperLoginInput>
          <WrapperCheck>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <WrapperCheckA> Forgot Password?</WrapperCheckA>
          </WrapperCheck>
          <WrapperButton>
            <button> Login </button>
          </WrapperButton>
          <WrapperSignUp>
            <WrapperSignUpP> Don't have an account?</WrapperSignUpP>
            <WrapperSignUpA
              onClick={handleNavigateLogin}
              style={{ cursor: "pointer" }}
            >
              Sign up
            </WrapperSignUpA>
          </WrapperSignUp>
        </WrapperLogin>
      </WrapperSection>
    </>
  );
};

export default LoginPage;
