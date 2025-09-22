
import React, { useMemo, useState } from 'react';
import { Row, Col } from 'antd';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';

const sampleProjects = [
  { id: 1, 
    title: 'Portfolio Website', 
    description: 'A personal portfolio built with React + AntD', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s/600/400', 
    tags: ['React', 'Sass'], 
    category: 'Web',
    link: "https://github.com/ManishaR-03/Protfolio-website"
   },

  { id: 2, 
    title: 'Data Analysis', 
    description: 'Analysis of smart attrition and wellness prediction', 
    image: 'https://public-images.interaction-design.org/literature/articles/heros/article_131376_hero_654d8b963adfb4.39819600.png', 
    tags: ['Machine Learning', 'Analysis'], 
    category: 'Data Science',
    link: "https://github.com/ManishaR-03/Smart-attrition-data-analysis.git"
   },

  { id: 3, 
    title: 'Industrial Collaboration DBMS', 
    description: 'Implemented CRUD operations for management of records of university with industries', 
    image: 'https://www.shutterstock.com/image-illustration/dbms-database-management-system-concept-600nw-2391827465.jpg', 
    tags: ['DBMS'], 
    category: 'DBMS',
    link : "https://github.com/ManishaR-03/Industrial-collaboration-dbms.git"
   },

  { id: 4, 
    title: 'Automation Testing', 
    description: 'Automation testing on KC Das website using Selenium', 
    image: 'https://www.testingmind.com/wp-content/uploads/2022/12/What-is-Automation-Testing.jpg', tags: ['Python', 'Selenium'], 
    category: 'Testing',
    link : "https://github.com/ManishaR-03/Selenium-testing.git"
   },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = useMemo(() => Array.from(new Set(sampleProjects.map((p) => p.category))), []);

  const filtered = useMemo(
    () => (filter === 'all' ? sampleProjects : sampleProjects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div>
      <h1>Projects</h1>

      <ProjectFilter categories={categories} value={filter} onChange={setFilter} />

      <Row gutter={[16, 16]}>
        {filtered.map((p) => (
          <Col key={p.id} xs={24} sm={12} md={8} lg={6}>
            <ProjectCard project={p} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
