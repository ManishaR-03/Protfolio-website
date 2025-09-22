
// src/routes/Home.jsx
import React from "react";
import { Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
<div
  className="home-hero"
  style={{
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "2rem",
    background: "linear-gradient(135deg, #0d1117 0%, #161b22 100%)", // 🔥 darker look
    color: "#fff",
  }}
>
  <Title level={1} style={{ color: "#fff", fontSize: "3rem", marginBottom: "1rem" }}>
    Hi - I'm <span style={{ color: "#9254de" }}>Manisha R</span>
  </Title>

  <Paragraph style={{ fontSize: "1.25rem", maxWidth: 600, margin: "0 auto 2rem", color: "#e6edf3" }}>
    Frontend Developer passionate about building interactive, modern, and responsive UIs with <strong>React</strong> and <strong>Ant Design</strong>.
  </Paragraph>

  <Button
    type="primary"
    size="large"
    href="/projects"
    style={{ borderRadius: "8px", padding: "0 2rem", fontSize: "1rem" }}
  >
    🚀 View My Projects
  </Button>
</div>

  );
}
