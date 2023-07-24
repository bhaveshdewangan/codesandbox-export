import "./styles.css";
import React, { useEffect, useState } from "react";
import {
  Router as BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";
import axios from "axios";
import zyngaAssetStore from "./asset/zynga-asset-store.svg";
import uploadIcon from "./asset/upload-icon.svg";
import { Menu, Button, Select, Avatar, Dropdown, Tabs } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LockOutlined,
  PoweroffOutlined
} from "@ant-design/icons";
import Home from "./components/home";
import ThreeD from "./components/3d";
import TwoD from "./components/2d";
import Audio from "./components/audio";
import Animation from "./components/animation";
import Tools from "./components/tools";
import AssetDetails from "./components/asset-details";

import UploadFileModal from "./components/upload-file-modal";
import UploadDetailsModal from "./components/upload-details-modal";

const UserProfile = () => {
  return (
    <Menu>
      <Menu.Item>
        <SolutionOutlined className="icon" />
        <span style={{ marginLeft: "10px" }}>Profile</span>
      </Menu.Item>
      <Menu.Item>
        <LockOutlined className="icon" />
        <span style={{ marginLeft: "10px" }}>Change Password</span>
      </Menu.Item>

      <Menu.Item>
        <PoweroffOutlined className="icon" />
        <span style={{ marginLeft: "10px" }}>Sign Out</span>
      </Menu.Item>
    </Menu>
  );
};

export default function App() {
  const [uploadFileModalVisible, setUploadFileModalVisible] = useState<boolean>(
    false
  );
  const [uploadDetailsModalVisible, setUploadDetailsModalVisible] = useState<
    boolean
  >(false);

  const { SubMenu } = Menu;
  const { Option } = Select;
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  const onFileUpload = () => {};

  let menus = [
    {
      title: "3d",
      subMenu: ["Character", "Environment", "Font"]
    },
    {
      title: "2d",
      subMenu: ["Character", "Environment", "Font"]
    },
    {
      title: "Audio",
      subMenu: ["Ambient", "Music", "Sound Fx"]
    },
    {
      title: "Animation",
      subMenu: []
    },
    {
      title: "Tool",
      subMenu: ["Game Tool Kit", "Generative AI"]
    }
  ];

  return (
    <div className="App layout">
      <div
        style={{
          minHeight: "50px",
          margin: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <img
          src={zyngaAssetStore}
          onClick={() => navigate("/")}
          style={{ marginRight: "20px" }}
        />

        <Select
          showSearch
          style={{ width: 600, marginRight: "20px" }}
          placeholder="Search anything"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          // filterOption={(input, option) =>
          //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          // }
        >
          {/* <Option value="3d">3d</Option>
          <Option value="2d">2d</Option>
          <Option value="audio">audio</Option> */}
        </Select>
        <div>
          <Button
            style={{
              border: "1px solid red",
              marginRight: "20px",
              color: "red"
            }}
          >
            Suggestion
          </Button>
          <Button
            type="primary"
            style={{
              border: "1px solid red",
              background: "red",
              marginRight: "20px"
            }}
            onClick={() => setUploadDetailsModalVisible(true)}
          >
            <img
              src={uploadIcon}
              style={{ height: 10, width: 15, marginRight: 10 }}
            />
            Upload
          </Button>
          <Dropdown overlay={<UserProfile />}>
            <Avatar
              style={{ backgroundColor: "red" }}
              icon={<UserOutlined />}
            />
          </Dropdown>
        </div>
      </div>
      <Menu mode="horizontal" selectedKeys={[pathname]}>
        {menus &&
          menus.map((item) => {
            return (
              <Menu.Item key={"/" + item.title.toLocaleLowerCase()}>
                <Link to={"/" + item.title.toLocaleLowerCase()} />
                {item.title}
              </Menu.Item>
              // <SubMenu title={item.title}>
              //   <Link to={"/" + item.title.toLocaleLowerCase()} />

              //   {/* {item.subMenu.length > 0 &&
              //     item.subMenu.map((subItem) => {
              //       return <Menu.Item>{subItem}</Menu.Item>;
              //     })} */}
              // </SubMenu>
            );
          })}
        {/* <SubMenu title="Navigation">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
      </Menu>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="3d">
            <Route path="" element={<ThreeD />} />
            <Route path=":id" element={<AssetDetails />} />
          </Route>
          <Route path="2d">
            <Route path="" element={<TwoD />} />
            <Route path=":id" element={<AssetDetails />} />
          </Route>
          <Route path="audio">
            <Route path="" element={<Audio />} />
            <Route path=":id" element={<AssetDetails />} />
          </Route>
          <Route path="animation">
            <Route path="" element={<Animation />} />
            <Route path=":id" element={<AssetDetails />} />
          </Route>
          <Route path="tool">
            <Route path="" element={<Tools />} />
            <Route path=":id" element={<AssetDetails />} />
          </Route>
        </Routes>
      </div>
      <UploadFileModal
        visible={uploadFileModalVisible}
        setVisible={setUploadFileModalVisible}
        setDetailsModalVisible={setUploadDetailsModalVisible}
      />
      <UploadDetailsModal
        visible={uploadDetailsModalVisible}
        setVisible={setUploadDetailsModalVisible}
        onUpload={onFileUpload}
      />
    </div>
  );
}
