import React from 'react';
import { Col } from 'antd';

import './leftContent.css';

import bg from '../../../../lib/assets/bg1.png';

const LeftContent = () => {
  return (
    <Col className='left_block'>
      <Col className='left_block_info'>
        <Col className='left_block_info_title'>
          <h1>Get access to free features</h1>
        </Col>
        <Col>awdawdwa</Col>
      </Col>
      <img className='signInContent_image' src={bg} alt="bg" />
    </Col>
  );
};

export default LeftContent;
