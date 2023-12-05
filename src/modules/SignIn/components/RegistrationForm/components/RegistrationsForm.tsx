import React, { useEffect, useState } from 'react';
import { notification } from 'antd';

import './registrationForm.css';

import RegistrationInputList from './RegistrationInputList/RegistrationInputList';
import Authorization from '../../../../../components/Authorization/Authorization';

import { IRegistrationState } from '../types';

import { AntNotificationType } from '../../../../../lib/types/ant';
import { useAppDispatch } from '../../../../../lib/hooks/useAppDispatch';
import {
  registrateUserThunk,
  useUserSliceActions,
  getRegistrationLoading,
  getRegistrationSuccess,
  getRegistrationError,
} from '../../../../../lib/store/user';
import { useTypedSelector } from '../../../../../lib/hooks/useTypedSelector';

import { SignUpNotifications } from '../../../utils';

const RegistrationForm = () => {
  const [api, contextHolder] = notification.useNotification();

  const dispatch = useAppDispatch();

  const { clearRegistrationState } = useUserSliceActions();

  const isRegistrationLoading = useTypedSelector(getRegistrationLoading);
  const isRegistrationError = useTypedSelector(getRegistrationError);
  const isRegistrationSuccess = useTypedSelector(getRegistrationSuccess);

  const [registrationState, setRegistrationState] =
    useState<IRegistrationState>({
      userName: '',
      email: '',
      password: '',
    });

  const openNotificationWithIcon = (
    type: AntNotificationType,
    description: string,
  ) => {
    api[type]({
      message: 'Sign up status',
      description,
    });
  };

  const registrateAUser = async () => {
    await dispatch(registrateUserThunk(registrationState));
  };

  useEffect(() => {
    if (isRegistrationSuccess) {
      openNotificationWithIcon('success', SignUpNotifications.SUCCESS_MESSAGE);
    }
  }, [isRegistrationSuccess]);

  useEffect(() => {
    if (isRegistrationError) {
      openNotificationWithIcon('error', SignUpNotifications.ERROR_MESSAGE);
    }
  }, [isRegistrationError]);

  useEffect(() => {
    return () => {
      clearRegistrationState();
    };
  }, []);

  return (
    <div className='registrationForm'>
      {contextHolder}
      <RegistrationInputList
        registrationState={registrationState}
        setRegistrationState={setRegistrationState}
      />
      <Authorization submitText="Sign up" authHandler={registrateAUser} />
    </div>
  );
};

export default RegistrationForm;
