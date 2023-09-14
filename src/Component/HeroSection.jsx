import "../CSS/HomeHeroSection.css";
import { Card } from "antd";
export default function HeroSection() {
  return (
    <div className="divider">
      <Card
        style={{
          width: "40vw",
          height: "40vh",
        }}
      >
        <img
          src="/me.jpeg"
          style={{ borderRadius: "200px", width: "10vw", height: "10vw" }}
        />
        <h1>Pratik Khanapurkar</h1>
        <h3>Tech Consultant DCPCR</h3>
      </Card>
    </div>
  );
}
