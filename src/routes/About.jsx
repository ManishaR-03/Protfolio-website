// src/routes/About.jsx
import React from "react";
import { Row, Col, Card, Typography } from "antd";
import {
  CodeOutlined,
  BookOutlined,
  ExperimentOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "./About.css"; // import styles

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <div className="about-container">
      <Title level={1} className="about-title">
        About Me
      </Title>
      <Paragraph className="about-intro">
        Hi , I'm a passionate developer who loves building modern web apps using{" "}
        <strong>React</strong>, <strong>Ant Design</strong>, and <strong>Sass</strong>.
      </Paragraph>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card title={<span><CodeOutlined /> Skills</span>} className="about-card">
            <ul>
              <li>React.js</li>
              <li>Python</li>
              <li>Data Science</li>
              <li>SQL</li>
            </ul>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title={<span><BookOutlined /> Education</span>} className="about-card">
            <p><strong>B.E in Information Science & Engineering</strong></p>
            <p>SJB Institute of Technology (2021 – 2025)</p>
            
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title={<span><ExperimentOutlined /> Experience</span>} className="about-card">
            <p><strong>React Developer</strong></p>
            <p>ThoughtClan Technologies Pvt. Ltd.</p>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title={<span><SmileOutlined /> Hobbies</span>} className="about-card">
            <p>Coding, Reading tech blogs, Reading books</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
