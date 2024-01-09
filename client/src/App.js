import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "glightbox/dist/css/glightbox.min.css";
import "./assets/css/main.css";
import "./assets/css/animate.css";
import DefaultComponents from "./components/DefaultComponent/DefaultComponent";
import { isJsonString } from "./utils/utils";
import {
  axiosJWT,
  getDetailsUser,
  refreshToken,
} from "./services/UserServices.js";
import { useDispatch } from "react-redux";
import { updateUser } from "./redux/slides/userSlide";
import jwt_decode from "jwt-decode";
const axios = require("axios");
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { storageData, decoded } = handleDecoded();
    if (decoded?.id) {
      handleGetDetailUser(decoded?.id, storageData);
    }
  }, []);

  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    let decoded = {};
    console.log("storageData", storageData);
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwt_decode(storageData);
    }
    return { decoded, storageData };
  };
  const handleGetDetailUser = async (id, token) => {
    const res = await getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };
  axiosJWT.interceptors.request.use(
    async (config) => {
      // Do something before request is sent
      const currentTime = new Date();
      const { decoded } = handleDecoded();
      if (decoded?.exp < currentTime.getTime() / 1000) {
        try {
          const data = await refreshToken();
          config.headers["token"] = `Bearer ${data?.access_token}`;
          // Lưu token mới vào localStorage để sử dụng sau này
          localStorage.setItem(
            "access_token",
            JSON.stringify(data.access_token)
          );
        } catch (error) {
          console.error("Error refreshing token:", error);
          throw error;
        }
      }

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.IsShowHeader ? DefaultComponents : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
