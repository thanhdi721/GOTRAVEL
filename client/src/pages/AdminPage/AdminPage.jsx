import React, { useState } from "react";
import { Menu } from "antd";
import { getItem } from "../../utils/utils";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";

import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderAdmin from "./components/HeaderAdmin/HeaderAdmin";

const items = [
  getItem("Người Dùng", "sub1", <UserOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("Quản lý Tour", "sub2", <SettingOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
];
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const AdminPage = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const handleClick =()=>{
    
  }
  return (
    <div>
      <HeaderAdmin />
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
          marginTop: "100px",
        }}
        items={items}
        onClick={handleClick}
      />
      <FooterComponent />
    </div>
  );
};

export default AdminPage;
