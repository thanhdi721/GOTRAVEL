import HomePage from "../pages/HomePage/HomePage.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
import PackagesPage from "../pages/PackagesPage/PackagesPage.jsx";
import PackageDetails from "../pages/PackageDetails/PackageDetails.jsx";

import AdminProduct from "../components/AdminProduct/AdminProduct.jsx";
import AdminUser from "../components/AdminUser/AdminUser.jsx";
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
  {
    path: "/packages-page",
    page: PackagesPage,
    IsShowHeader: true,
  },
  {
    path: "/package-details",
    page: PackageDetails,
    IsShowHeader: true,
  },
  {
    path: "/admin",
    page: AdminUser,
  },
  {
    path: "/admin/product",
    page: AdminProduct,
  },
];
export default routes;
