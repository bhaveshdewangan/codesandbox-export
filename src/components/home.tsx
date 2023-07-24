import "../styles.css";
import { Menu, Button, Select, Avatar, Dropdown, Tabs } from "antd";

const Highlights = () => {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Spotlight" key="1">
        Spotlight
      </TabPane>
      <TabPane tab="Trending" key="2">
        Trending
      </TabPane>
      <TabPane tab="New" key="3">
        New
      </TabPane>
      <TabPane tab="Update" key="4">
        Update
      </TabPane>
    </Tabs>
  );
};

const Banner = () => {
  return (
    <div
      style={{
        margin: "20px 20px",
        height: 300,
        background: "rgba(17,24,39,1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 style={{ color: "white", fontSize: "60px" }}>
        {" "}
        One store for all solutions
      </h1>
    </div>
  );
};

const Home = () => {
  const { SubMenu } = Menu;
  const { Option } = Select;

  // function onChange(value) {
  //   console.log(`selected ${value}`);
  // }

  // function onBlur() {
  //   console.log("blur");
  // }

  // function onFocus() {
  //   console.log("focus");
  // }

  // function onSearch(val) {
  //   console.log("search:", val);
  // }
  // let menus = [
  //   {
  //     title: "3d",
  //     subMenu: ["Character", "Environment", "Font"]
  //   },
  //   {
  //     title: "2d",
  //     subMenu: ["Character", "Environment", "Font"]
  //   },
  //   {
  //     title: "Audio",
  //     subMenu: ["Ambient", "Music", "Sound Fx"]
  //   },
  //   {
  //     title: "Animation",
  //     subMenu: []
  //   },
  //   {
  //     title: "Tool",
  //     subMenu: ["Game Tool Kit", "Generative AI"]
  //   }
  // ];
  return (
    <div>
      <Banner />
      <Highlights />
    </div>
  );
};

export default Home;
