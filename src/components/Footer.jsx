
import React from "react";
import { Layout, Typography, Space } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./Footer.css";

const { Footer: AntFooter } = Layout;

const Footer = () => (
  <AntFooter className="custom-footer">
    <Typography.Text className="footer-text">
      © {new Date().getFullYear()} Manisha R — Built with React & Ant Design
    </Typography.Text>

    <Space size="large" className="footer-icons">
      <a
        href="https://github.com/ManishaR-03"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <GithubOutlined />
      </a>
      <a
        href="https://linkedin.com/in/manisha-rku"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedinOutlined />
      </a>
      <a href="mailto:manisharblr@gmail.com" aria-label="Email">
        <MailOutlined />
      </a>
    </Space>
  </AntFooter>
);

export default Footer;
