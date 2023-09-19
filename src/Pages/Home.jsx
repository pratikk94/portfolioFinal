import "../CSS/Home.css";
import { Row, Col } from "antd";
import HeroSection from "../Component/HeroSection";
export default function Home() {
  return (
    <Row style={{ width: "100vw" }}>
      {/* left */}
      <Col span={24}>
        <HeroSection />
      </Col>
      {/* right */}
      {/* <Col span={0}>
        <div className="homeGIF">
          <h1>Other Half</h1>
        </div>
      </Col> */}
    </Row>
  );
}
