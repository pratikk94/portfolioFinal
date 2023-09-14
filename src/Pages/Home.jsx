import "../CSS/Home.css";
import { Row, Col } from "antd";
import HeroSection from "../Component/HeroSection";
export default function Home() {
  return (
    <Row style={{ width: "100vw" }}>
      <Col span={12}>
        <HeroSection />
      </Col>

      <Col span={12}>
        <h1>Other Half</h1>
      </Col>
    </Row>
  );
}
