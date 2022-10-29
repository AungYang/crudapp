import React from 'react';
import 'antd/dist/antd.css';
import {HeartOutlined} from '@ant-design/icons'
import { Card } from 'antd';

const Note = () => (
  <Card title="I am happy"
  
  headStyle={{fontWeight: '600'}}

    hoverable
    style={{ width: 200, height: 150, backgroundColor: '#ffff88', fontSize: '12px'}}
  
  >
    <p style={{color: 'grey'}}> <i>/happy</i></p>

    By: Aung Yang

    <HeartOutlined className="float-end" key="heart" />

  </Card>
);

export default Note;
