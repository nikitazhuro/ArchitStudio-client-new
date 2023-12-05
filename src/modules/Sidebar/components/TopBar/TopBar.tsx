import React from 'react';

import './topBar.css';

import UserAuth from '../UserAuth/UserAuth';
import UserProfile from '../UserProfile/UserProfile';

import { useTypedSelector } from '../../../../lib/hooks/useTypedSelector';
import { getIsAuth } from '../../../../lib/store/user';

const TopBar = () => {
  const isAuth = useTypedSelector(getIsAuth);

  return (
    <div className='topMenu'>
      <div className='profile'>
        <div className='navItemTitle'>
          {isAuth ? <UserProfile /> : <UserAuth />}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
