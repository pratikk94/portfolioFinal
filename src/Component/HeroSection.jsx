import "../CSS/HomeHeroSection.css";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";

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
          alt="It's me"
          src="/me.jpeg"
          style={{ borderRadius: "200px", width: "10vw", height: "10vw" }}
        />
        <h1>Pratik Khanapurkar</h1>
        <h3>Tech Consultant DCPCR</h3>
        <Link to="/about">
          <Button
            type="primary"
            style={{ backgroundColor: "#F8DA59", color: "#000" }}
          >
            Click to know more
          </Button>
        </Link>
      </Card>
    </div>
  );
}
