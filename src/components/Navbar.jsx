
import React from 'react';
import { Menu, Switch } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import {
  HomeOutlined,
  UserOutlined,
  ProjectOutlined,
  MailOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const selectedKey = location.pathname === '/' ? '/' : location.pathname;

  const items = [
    { key: '/', icon: <HomeOutlined />, label: <Link to="/">Home</Link> },
    { key: '/about', icon: <UserOutlined />, label: <Link to="/about">About</Link> },
    { key: '/projects', icon: <ProjectOutlined />, label: <Link to="/projects">Projects</Link> },
    { key: '/contact', icon: <MailOutlined />, label: <Link to="/contact">Contact</Link> },
  ];

  return (
    <div className="navbar">
      <div className="logo"><Link to="/">My Portfolio</Link></div>

      <div className="menu-wrap">
        <Menu mode="horizontal" theme={theme} selectedKeys={[selectedKey]} items={items} />
      </div>

      <div className="switch-wrap">
        <Switch checked={theme === 'dark'} onChange={toggleTheme} checkedChildren="Dark" unCheckedChildren="Light" />
      </div>
    </div>
  );
};

export default Navbar;
