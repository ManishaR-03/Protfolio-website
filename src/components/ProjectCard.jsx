
import React from 'react';
import { Card, Tag, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProjectCard = ({ project }) => (
  <Card
    hoverable
    cover={<img alt={project.title} src={project.image} 
    style={{objectFit: 'contain', width: "100%",      
        height: 300, }} />}
  >
    <Meta title={project.title} description={project.description} />
    <div style={{ marginTop: 10 }}>
      {project.tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>

    <div style={{ marginTop: 12 }}>
      <a href={project.link} target="_blank" rel="noreferrer">
        <Button type="primary" icon={<LinkOutlined />}>View</Button>
      </a>
    </div>
  </Card>
);

export default ProjectCard;
