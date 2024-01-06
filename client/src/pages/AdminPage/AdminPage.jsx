import React, { useState } from "react";
import { Menu } from "antd";
import { getItem } from "../../utils/utils";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";

import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderAdmin from "./components/HeaderAdmin/HeaderAdmin";
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminProduct from "../../components/AdminProduct/AdminProduct";

const AdminPage = () => {
  const items = [
    getItem("Người Dùng", "user", <UserOutlined />),
    getItem("Quản lý Tour", "product", <SettingOutlined />),
  ];
  const [keySelected, setKeySelected] = useState("");
  const renderPage = (key) => {
    switch (key) {
      case "user":
        return <AdminUser />;
      case "product":
        return <AdminProduct />;
      default:
        return <></>;
    }
  };
  const handleClick = ({ key }) => {
    setKeySelected(key);
  };
  console.log(keySelected);
  return (
    <div>
      <HeaderAdmin />
      <div style={{ display: "flex", marginTop: "100px" }}>
        {/* <Menu
          className="menu"
          mode="inline"
          style={{
            width: 256,
          }}
          items={items}
          onClick={handleClick}
        /> */}
        {/* <div style={{ flex: "1", padding: "15px" }}>
          {renderPage(keySelected)}
        </div> */}
      </div>

      <FooterComponent />
    </div>
  );
};

export default AdminPage;
