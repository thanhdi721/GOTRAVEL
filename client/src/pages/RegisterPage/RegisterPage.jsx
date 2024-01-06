import React, { useEffect, useState } from "react";
import {
  WrapperBackground,
  WrapperButton,
  WrapperCheck,
  WrapperCheckA,
  WrapperContent,
  WrapperContentH2,
  WrapperContentH3,
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

import moment from "moment";
import "./app.css";
import {
  FacebookOutlined,
  GithubOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm";
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

    // Cập nhật nền mỗi 10s
    const intervalId = setInterval(updateBackground, 10000);

    // Xóa interval khi component unmount
    return () => clearInterval(intervalId);
  }, []);
  const [email, setEmail] = useState("");
  const handleOnchangeEmail = (e) => {
    console.log("e", e.target.value);
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
          <WrapperLoginH2> Register </WrapperLoginH2>
          <WrapperLoginInput>
            <InputForm
              style={{
                border: "1px solid gray",
                borderRadius: "6px",
                height: "40px",
                padding: "10px",
              }}
              type="text"
              placeholder="Email"
              value={email}
              handleOnchange={handleOnchangeEmail}
            />
          </WrapperLoginInput>
          <WrapperLoginInput>
            <InputForm
              style={{
                border: "1px solid gray",
                borderRadius: "6px",
                height: "40px",
                padding: "10px",
              }}
              type="password"
              placeholder="PassWord"
            />
          </WrapperLoginInput>
          <WrapperLoginInput>
            <InputForm
              style={{
                border: "1px solid gray",
                borderRadius: "6px",
                height: "40px",
                padding: "10px",
              }}
              type="password"
              placeholder="Confirm PassWord"
            />
          </WrapperLoginInput>
          <WrapperCheck></WrapperCheck>
          <WrapperButton>
            <button
              className="btn"
              style={{ border: "1px solid gray", color: "#000" }}
            >
              Register
            </button>
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
      </WrapperSection>
    </>
  );
};

export default LoginPage;
