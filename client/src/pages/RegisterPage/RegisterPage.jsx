import React, { useEffect, useState } from "react";
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
import Logo from "../../assets/images/logo_white.png";
import moment from "moment";
import "./app.css";
import {
  FacebookOutlined,
  GithubOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const handleNavigateRegister = () => {
    navigate("/login");
  };

  const [backgroundStyle, setBackgroundStyle] = useState("background1");

  useEffect(() => {
    const updateBackground = () => {
      const currentHour = moment().hour();

      // Kiểm tra giờ hiện tại và áp dụng kiểu CSS tương ứng
      if (currentHour >= 6 && currentHour < 18) {
        setBackgroundStyle("background1");
      } else {
        setBackgroundStyle("background2");
      }
    };

    // Cập nhật nền ban đầu
    updateBackground();

    // Cập nhật nền mỗi 1 phút
    const intervalId = setInterval(updateBackground, 60000);

    // Xóa interval khi component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <WrapperBackground className={backgroundStyle}></WrapperBackground>
      <WrapperSection>
        <WrapperLogin>
          <WrapperLoginH2> Register </WrapperLoginH2>
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
            <WrapperSignUpP>Do you already have an account?</WrapperSignUpP>
            <WrapperSignUpA
              onClick={handleNavigateRegister}
              style={{ cursor: "pointer" }}
            >
              Log in
            </WrapperSignUpA>
          </WrapperSignUp>
        </WrapperLogin>
        <WrapperContent>
          <div>
            <img src={Logo} alt="Logo" style={{ width: "150px" }} />
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
      </WrapperSection>
    </>
  );
};

export default LoginPage;
