import React from 'react';
import { Col } from 'antd';

import './leftContent.css';

import bg from '../../../../lib/assets/bg3.png';

const LeftContent = () => {
  return (
    <Col className='left_block'>
      <Col className='left_block_info'>
        <Col className='left_block_info_title'>
          <h1>Get access to free features</h1>
          <Col>Если у Вас уже имеется аккаунт, Вы можете воспользоваться входом, перейдя по кнопке ниже</Col>
        </Col>
      </Col>
      <img className='signInContent_image' src={bg} alt="bg" />
    </Col>
  );
};

export default LeftContent;
