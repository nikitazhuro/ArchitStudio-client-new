import React from 'react';
import './loadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className='scene_bg'>
      <div className='scene'>
        <div className='cube_wrapper'>
          <div className='cube'>
            <div className='cube_faces'>
              <div
                className='cube_face shadow'
              ></div>
              <div
                className='cube_face bottom'
              ></div>
              <div className='cube_face top'></div>
              <div
                className='cube_face left'
              ></div>
              <div
                className='cube_face right'
              ></div>
              <div
                className='cube_face back'
              ></div>
              <div
                className='cube_face front'
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
