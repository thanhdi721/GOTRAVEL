import React, { useEffect, useState } from "react";
import {
  WrapperBackground,
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
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import * as UserService from "../../services/UserServices";
import { useMutationHooks } from "../../hook/useMutationHook";
import { toast } from "react-toastify";

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
  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const { data, isLoading, isError, isSuccess } = mutation;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const handleLogin = () => {
    mutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          if (data?.status === "OK") {
            handleNavigateHome();
            toast.success("Đăng Nhập Thành Công");
            // localStorage.setItem("access_token", data?.access_token);
          } else {
            toast.error("Đăng Nhập Thất Bại");
          }
        },
      }
    );
  };
  return (
    <>
      <WrapperBackground className={backgroundStyle}></WrapperBackground>
      <WrapperSection>
        <WrapperContent>
          <WrapperContentH2> Welcome!</WrapperContentH2>
          <WrapperContentH3> To An Amazing Vacation </WrapperContentH3>

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
          {data?.status === "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}
          <WrapperCheck>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <WrapperCheckA> Forgot Password?</WrapperCheckA>
          </WrapperCheck>

          <ButtonComponent
            disabled={!email.length || !password.length}
            className="btn"
            styleButton={{
              background: "red",
              border: "1px solid gray",
              color: "#000",
              width: "100px",
              height: "40px",
              marginBottom: "15px",
            }}
            onClick={handleLogin}
            textbutton={"Login"}
          ></ButtonComponent>

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
