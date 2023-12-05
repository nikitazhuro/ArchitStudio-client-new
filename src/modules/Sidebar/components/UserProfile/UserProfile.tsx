import React from 'react';
import { Avatar, Col, Row, Dropdown, MenuProps } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import './userProfile.css';

import { useTypedSelector } from '../../../../lib/hooks/useTypedSelector';
import { useUserSliceActions, getUser } from '../../../../lib/store/user';
import { logout } from '../../../../lib/http/api/auth';

const UserProfile = () => {
  const router = useNavigate();

  const { clearUser } = useUserSliceActions();

  const user = useTypedSelector(getUser);

  const items: MenuProps['items'] = [
    {
      label: 'Profile',
      onClick: () => {
        router('/profile');
      },
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: 'Logout',
      onClick: async () => {
        try {
          await logout();
          localStorage.removeItem('access_token');
          clearUser();
        } catch (error) {
          console.log(error);
        }
      },
      key: '3',
    },
  ];

  return (
    <Row className='user_profile'>
      <Col>
        <Avatar size="large" icon={<UserOutlined rev={undefined} />} />
      </Col>
      <Col className='userName'>
        <Dropdown placement="bottomLeft" menu={{ items }} trigger={['click']}>
          <Col className='user_dropdown_title'>
            {user?.userName}
            <DownOutlined className='icon' rev={undefined} />
          </Col>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default UserProfile;
