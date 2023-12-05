import React from 'react';

import './calcPageHeader.css';

import Button from '../../../../UI/Button/Button';

import Folder from '../../../../lib/assets/folder.svg';

const CalcPageHeader = () => {
  return (
    <div className='calcPageHeader'>
      <h1>Calculator</h1>
      <div className='save_project_btn'>
        <Button size="small" mode="primary">
          Save project <Folder />
        </Button>
      </div>
    </div>
  );
};

export default CalcPageHeader;
