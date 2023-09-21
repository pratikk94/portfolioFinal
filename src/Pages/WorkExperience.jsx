import React from "react";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";

export default function WorkExperience(props) {
  return (
    <Row>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: "18vw", marginRight: "2vw", height: "32vh" }}
          cover={
            <img
              alt="example"
              src="https://curzonpr.com/wp-content/uploads/2021/10/bat-1-1024x578.png"
              style={{
                marginRight: "2vw",
                height: "100%",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          }
        >
          <Meta
            title="British Asian Trust"
            description="Technology consultant"
          />
        </Card>
      </Col>

      <Col span={8}>
        <Card
          hoverable
          style={{ width: "18vw", marginRight: "2vw", height: "32vh" }}
          cover={
            <img
              alt="example"
              src="https://freestoneinfotech.com/wp-content/uploads/2019/02/about.png"
              style={{ padding: "2vw", width: "14vw" }}
            />
          }
        >
          <Meta title="Freestone Infotech" description="Automation Engineer" />
        </Card>
      </Col>

      <Col span={8}>
        <Card
          hoverable
          style={{
            width: "18vw",
            marginRight: "2vw",
            height: "32vh",
          }}
          cover={
            <center>
              <img
                alt="example"
                src="https://d3ml3b6vywsj0z.cloudfront.net/company_images/605db31e10fce904a72db18e_images.png"
                style={{
                  height: "20vh",
                  width: "14vh",
                  marginRight: "2vw",
                  height: "16vh",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </center>
          }
        >
          <Meta title="TinkerTechLabs" description="Lead Android Developer" />
        </Card>
      </Col>
    </Row>
  );
}
