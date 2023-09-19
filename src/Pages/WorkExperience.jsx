import React from "react";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";

export default function WorkExperience(props) {
  return (
    <Row>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: "18vw", marginRight: "2vw" }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>

      <Col span={8}>
        <Card
          hoverable
          style={{ width: "18vw", marginRight: "2vw" }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>

      <Col span={8}>
        <Card
          hoverable
          style={{ width: "18vw", marginRight: "2vw" }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
    </Row>
  );
}
