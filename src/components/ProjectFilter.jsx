
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const ProjectFilter = ({ categories, value, onChange }) => (
  <div style={{ marginBottom: 16 }}>
    <Select value={value} onChange={onChange} style={{ width: 220 }}>
      <Option value="all">All</Option>
      {categories.map((c) => (
        <Option key={c} value={c}>
          {c}
        </Option>
      ))}
    </Select>
  </div>
);

export default ProjectFilter;
