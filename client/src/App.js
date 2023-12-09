import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";

import "tiny-slider/dist/tiny-slider.css";
import "glightbox/dist/css/glightbox.min.css";
import "./assets/css/main.css";
import "./assets/css/animate.css";

import DefaultComponents from "./components/DefaultComponent/DefaultComponent";

function App() {
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
