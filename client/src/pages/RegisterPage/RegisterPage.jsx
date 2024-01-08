import React, { useEffect, useState } from "react";
import {
  WrapperBackground,
  WrapperCheck,
  WrapperContent,
  WrapperContentH2,
  WrapperContentH3,
  WrapperIcon,
  WrapperIconI,
  WrapperLogin,
  WrapperLoginH2,
  WrapperLoginInput,
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
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import * as UserService from "../../services/UserServices";
import { useMutationHooks } from "../../hook/useMutationHook";
import * as message from "../../components/Messager/Messager";
import { toast } from "react-toastify";
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

  const mutation = useMutationHooks((data) => UserService.registerUser(data));
  const { data, isLoading, isError, isSuccess } = mutation;
  const handleMessage = () => {
    if (data?.message !== "SUCCESS") {
      toast.error("Đăng Kí Thất Bại");
    } else if (data?.status === "ERR") {
      toast.error("Đăng Kí Thất Bại");
    } else {
      toast.success("Đăng Kí Thành Công");
      handleNavigateRegister();
      localStorage.setItem("access_token", data?.access_token);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };
  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };
  const handleRegister = async () => {
    await mutation.mutate({ email, password, confirmPassword });
    handleMessage();
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
              onChange={handleOnchangeEmail}
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
              value={password}
              onChange={handleOnchangePassword}
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
              value={confirmPassword}
              onChange={handleOnchangeConfirmPassword}
            />
          </WrapperLoginInput>
          {data?.status === "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}
          <WrapperCheck></WrapperCheck>
          <ButtonComponent
            disabled={
              !email.length || !password.length || !confirmPassword.length
            }
            onClick={handleRegister}
            className="btn"
            styleButton={{
              background: "red",
              border: "1px solid gray",
              color: "#000",
              width: "100px",
              height: "40px",
              marginBottom: "15px",
            }}
            textbutton={"Register"}
          ></ButtonComponent>
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
