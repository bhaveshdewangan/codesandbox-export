import React, { useRef } from "react";
import {
  Carousel,
  Typography,
  Card,
  Row,
  Col,
  Rate,
  Button,
  Tabs,
  List,
  Avatar
} from "antd";
const { Title, Text } = Typography;
const { TabPane } = Tabs;

import twoDots from "../asset/twodots.png";

const UserReviewList = ({ reviews }) => {
  const renderItem = (review) => (
    <List.Item>
      <div className="review-item">
        <div className="avatar-wrapper">
          <Avatar src={review.avatarUrl} alt={review.author} size={60} />
        </div>
        <div className="review-content">
          <div className="author-info">
            <h4>{review.author}</h4>
            <Rate disabled defaultValue={review.rating} />
          </div>
          <p className="comment">{review.comment}</p>
        </div>
      </div>
    </List.Item>
  );

  return (
    <List
      itemLayout="vertical"
      dataSource={reviews}
      renderItem={renderItem}
      className="review-list"
    />
  );
};

const AssetDetailsPage = () => {
  const detailSectionRef = useRef<any>(null);

  const asset = {
    name: "Example Asset",
    category: "3D Models",
    price: "$19.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "example-asset.jpg",
    author: "John Doe",
    ratings: 4.5,
    images: [twoDots, twoDots, twoDots],
    userReviews: [
      {
        id: 1,
        author: "John Doe",
        rating: 4,
        comment: "Great product!",
        avatarUrl: ""
      },
      {
        id: 2,
        author: "Jane Smith",
        rating: 5,
        comment: "Highly recommended!",
        avatarUrl: ""
      }
    ]
  };

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="asset-details">
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "50px 20px"
        }}
      >
        <section style={{ display: "flex" }}>
          <section style={{ width: "50%" }}>
            <Carousel autoplay>
              {asset.images.map((image, index) => (
                <div
                  key={index}
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    style={{
                      width: detailSectionRef?.current?.offsetWidth,
                      height: detailSectionRef?.current?.offsetHeight,
                      objectFit: "cover"
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </section>
          <section
            ref={detailSectionRef}
            style={{ width: "50%", display: "flex", flexDirection: "column" }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Card>
                  <Card.Meta
                    title={asset.name}
                    description={asset.description}
                  />
                  <p>Category: {asset.category}</p>
                  <p>Price: {asset.price}</p>
                  <p>Author: {asset.author}</p>
                  <Rate value={asset.ratings} />
                  <Button type="primary">Download</Button>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                {/* Add additional content, such as user reviews, related assets, etc. */}
              </Col>
            </Row>
          </section>
        </section>
        <section>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Description" key="1">
              <span>{asset.description}</span>
            </TabPane>
            <TabPane tab="Version" key="2">
              V-1.0
            </TabPane>
            <TabPane tab="Reviews" key="3">
              <UserReviewList reviews={asset.userReviews} />
            </TabPane>
            {/* <TabPane tab="Update" key="4">
              Update
            </TabPane> */}
          </Tabs>
        </section>
      </section>
    </div>
  );
};

export default AssetDetailsPage;
