import React from "react";
import { WrapperHeader } from "./style";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TableComponent from "../TableComponent/TableComponent";
import HeaderAdmin from "../../pages/AdminPage/components/HeaderAdmin/HeaderAdmin";

function AdminUser() {
  return (
    <div>
      <HeaderAdmin />

      <div style={{ padding: "15px" }}>
        <WrapperHeader>Quản Lý Người Dùng</WrapperHeader>
        <Button
          style={{
            height: "150px ",
            width: "150px",
            borderRadius: "6px",
            borderStyle: "dashed",
          }}
        >
          <PlusOutlined style={{ fontSize: "60px" }} />
        </Button>
      </div>
      <TableComponent />
    </div>
  );
}

export default AdminUser;
