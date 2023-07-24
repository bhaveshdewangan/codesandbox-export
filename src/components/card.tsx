import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DownloadOutlined
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const MetaCard = ({ metaData }: any) => {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      style={metaData.style}
      cover={<img alt="example" src={metaData.cover} />}
      onClick={() => navigate(`/${metaData.category}/${metaData.id}`)}
      actions={[
        <DownloadOutlined key="download" />,
        <div>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>,
        <div>
          <i className="fa fa-heart" style={{ color: "#d71414" }}></i>
          <span style={{ marginLeft: "5px" }}>40</span>
        </div>
      ]}
    >
      <Meta
        // avatar={
        //   <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        // }
        title={metaData.title}
        description={metaData.description}
      />
      {/* <DownloadOutlined />, */}
    </Card>
  );
};

export default MetaCard;
