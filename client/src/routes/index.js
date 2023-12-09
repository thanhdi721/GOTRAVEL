import HomePage from "../pages/HomePage/HomePage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
export const routes = [
  {
    path: "/",
    page: HomePage,
    IsShowHeader: true,
  },
  {
    path: "/login",
    page: LoginPage,
  },
  {
    path: "/register",
    page: RegisterPage,
  },
];
export default routes;
