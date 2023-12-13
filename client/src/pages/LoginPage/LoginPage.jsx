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
import {
  FacebookOutlined,
  GithubOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import "./app.css";
const LoginPage = () => {
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

    // Cập nhật nền mỗi 10s
    const intervalId = setInterval(updateBackground, 10000);

    // Xóa interval khi component unmount
    return () => clearInterval(intervalId);
  }, []);

  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/register");
  };
  const handleNavigateHome = () => {
    navigate("/");
  };
  return (
    <>
      <WrapperBackground className={backgroundStyle}></WrapperBackground>
      <WrapperSection>
        <WrapperContent>
          <WrapperContentH2> Welcome!</WrapperContentH2>
          <WrapperContentH3> To Our Nem Website </WrapperContentH3>

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
            <button
              className="btn"
              style={{ border: "1px solid gray", color: "#000" }}
              onClick={handleNavigateHome}
            >
              Login
            </button>
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
