
import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import "./styles/global.scss";


const { Header, Content } = Layout;

export default function App() {
  const { theme } = useTheme();

  const config = {
    theme: {
      token: {
        colorBgBase: theme === 'dark' ? '#0d1117' : '#ffffff',
        colorTextBase: theme === 'dark' ? '#e6edf3' : '#111827',
        colorPrimary: theme === 'dark' ? '#9254de' : '#04befe',
        colorBgContainer: theme === 'dark' ? '#161b22' : '#f9fafb',
      },
    },
  };

  return (
    <ConfigProvider {...config}>
      <Layout className="app-layout">
        <Header className="app-header">
          <Navbar />
        </Header>

        <Content className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>

        <Footer />
      </Layout>
    </ConfigProvider>
  );
}
